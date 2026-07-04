---
title: "Laravel Action Pattern"
category: Laravel
date: 2026-07-04
description: Pull business logic out of controllers and models into small, single-purpose Action classes with one handle() method — one class per operation, called from anywhere.
status: published
tags:
  - Laravel
  - PHP
  - Backend
  - Architecture
  - Action Pattern
---

Your `ArticleController::store()` validates input, generates a slug, creates the record, and syncs tags. The same logic shows up again in a queued import job, then in an Artisan command. When the rules change, you hunt down all three.

The fix: extract each operation into an **Action class** — a small object with one `handle()` method, resolved from the container and callable from controllers, jobs, and commands.

## What Is an Action?

A plain PHP object that performs **one business operation**. No base class, no interface. One `handle()` entry point.

```php [app/Actions/PublishArticle.php]
namespace App\Actions;

use App\Models\Article;
use Illuminate\Validation\ValidationException;

final readonly class PublishArticle
{
    public function handle(Article $article): void
    {
        if ($article->status !== 'draft') {
            throw ValidationException::withMessages([
                'status' => [__('Only draft articles can be published.')],
            ]);
        }

        $article->update([
            'status' => 'published',
            'published_at' => now(),
        ]);
    }
}
```

That is the whole pattern. Laravel resolves it from the container automatically — no service provider registration, no binding.

## Anatomy of an Action

```php [app/Actions/CreateArticle.php]
namespace App\Actions;

use App\Models\Article;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

final readonly class CreateArticle
{
    /**
     * @param  array{title: string, body: string, tags?: string[]}  $data
     */
    public function handle(User $user, array $data): Article
    {
        return DB::transaction(function () use ($user, $data): Article {
            $article = $user->articles()->create([
                'title' => $data['title'],
                'slug' => Str::slug($data['title']),
                'body' => $data['body'],
                'status' => 'draft',
            ]);

            if (! empty($data['tags'])) {
                $article->syncTags($data['tags']);
            }

            return $article;
        });
    }
}
```

Conventions to follow:

- **`final readonly class`** — the class cannot be extended, and its collaborators stay immutable after construction.
- **One `handle()` method** — the single entry point every caller uses.
- **Constructor injection** for collaborators (a payment gateway, a file uploader). If the Action has no dependencies, skip the constructor entirely — see `PublishArticle` above.
- **`DB::transaction()`** for any operation that touches multiple records, so it stays atomic.
- **Return what the caller needs** — the created model, a bool, or void.

## Naming and Location

Actions live in `app/Actions`, named for the operation, **no suffix**.

| Convention | Example |
|------------|---------|
| `app/Actions/{Name}.php` | `app/Actions/CreateArticle.php` |
| Verb + noun | `CreateArticle`, `PublishArticle`, `ArchiveArticle` |
| No `Action` suffix | `CreateArticle`, not `CreateArticleAction` |
| Entry point | `$createArticle->handle(...)` |

The `make:action` command ships with [nunomaduro/essentials](https://github.com/nunomaduro/essentials), not Laravel itself. With the package installed:

```bash
php artisan make:action "CreateArticle"
```

## Calling Actions from Controllers

Controllers should only coordinate: receive the request, call the Action, return a response. Inject the Action into the **method**, not the constructor.

```php [app/Http/Controllers/ArticleController.php]
final class ArticleController extends Controller
{
    public function store(StoreArticleRequest $request, CreateArticle $createArticle): RedirectResponse
    {
        $article = $createArticle->handle($request->user(), $request->validated());

        return to_route('articles.show', $article);
    }
}
```

Two lines in the body: call the Action, redirect. Validation lives in the Form Request, business logic in the Action — the controller only coordinates.

## Why Method Injection

Inject Actions on the method that uses them, never through the controller's constructor.

```php [app/Http/Controllers/ArticleController.php]
// ❌ Constructor — every Action constructed for every request, even unused ones
final class ArticleController extends Controller
{
    public function __construct(
        private CreateArticle $createArticle,
        private UpdateArticle $updateArticle,
        private DeleteArticle $deleteArticle,
    ) {}
}

// ✅ Method — each endpoint pulls only what it needs
public function store(StoreArticleRequest $request, CreateArticle $createArticle): RedirectResponse
{
    $article = $createArticle->handle($request->user(), $request->validated());
    return to_route('articles.show', $article);
}
```

Adding a new endpoint never touches the constructor, and each method reads as a self-contained list of its dependencies.

## Invoke from Anywhere

Because Actions resolve from the container, the same class runs from a controller, a job, or a command — one implementation, every caller.

```php [app/Jobs/ImportArticle.php]
namespace App\Jobs;

use App\Actions\CreateArticle;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

final class ImportArticle implements ShouldQueue
{
    use Dispatchable, Queueable;

    /**
     * @param  array{title: string, body: string, tags?: string[]}  $payload
     */
    public function __construct(
        public readonly User $user,
        public readonly array $payload,
    ) {}

    public function handle(CreateArticle $createArticle): void
    {
        $createArticle->handle($this->user, $this->payload);
    }
}
```

The job does not know *how* an article is created, only *which* Action to call. Change the implementation, and every caller picks up the change.

## Before and After

Suppose you now need to log every article creation to an audit table. Add one line to the Action, and every caller starts logging.

```php
// ❌ Before — logic in the controller; the job and command duplicate it
public function store(Request $request)
{
    $data = $request->validate(['title' => ['required'], 'body' => ['required']]);

    $article = $request->user()->articles()->create([
        'title' => $data['title'],
        'slug' => Str::slug($data['title']),
        'body' => $data['body'],
        'status' => 'draft',
    ]);
    Activity::log($request->user(), 'article.created'); // controller only

    return to_route('articles.show', $article);
}

// ✅ After — the Action owns the operation, so the audit log ships everywhere
public function handle(User $user, array $data): Article
{
    return DB::transaction(function () use ($user, $data): Article {
        // ...create article, sync tags...

        Activity::log($user, 'article.created');

        return $article;
    });
}
```

## Summary

- An **Action** is a small, single-purpose object with one `handle()` method that owns a single operation.
- Keep them in `app/Actions`, named for what they do, with **no suffix**.
- Make them `final readonly`, inject collaborators through the constructor, and wrap multi-model work in `DB::transaction()`.
- Call them from controller **methods**, never from constructors.
- The same Action runs from controllers, jobs, and commands — that reuse is the payoff.

**References:**
- [Laravel Service Container — Method Injection](https://laravel.com/docs/container#method-injection)
- [nunomaduro/essentials — provides `make:action`](https://github.com/nunomaduro/essentials)
