---
title: "PHP Enums in FilamentPHP: HasLabel, HasColor, HasIcon"
category: PHP
date: 2026-03-21
description: Use PHP 8.1 backed enums with FilamentPHP's HasLabel, HasColor, and HasIcon interfaces to automatically render badges, colors, and icons across your admin panel — defined once, used everywhere.
status: published
tags:
  - PHP
  - Filament
  - FilamentPHP
  - Laravel
  - Backend
---

You have a `status` field in your database. Values are `pending`, `active`, `inactive`. You want them rendered as colored badges with icons in your FilamentPHP table — orange for pending, green for active, red for inactive.

The common approach: scatter `match` statements across every resource. The better approach: use **PHP Enums** with `HasLabel`, `HasColor`, and `HasIcon` — let Filament handle the rest.

## What Is a PHP 8.1 Backed Enum?

PHP 8.1 introduced enums as a first-class language feature. A **backed enum** attaches a scalar value (string or int) to each case — that value is what gets stored in the database and used to rehydrate the enum when reading back.

```php
enum UserStatus: string
{
    case PENDING  = 'pending';
    case ACTIVE   = 'active';
    case INACTIVE = 'inactive';
}
```

Register it as a cast in your Eloquent model:

```php
protected array $casts = [
    'status' => UserStatus::class,
];
```

From here, `$user->status` returns a `UserStatus` enum instance, not a raw string. You compare with `$user->status === UserStatus::ACTIVE` instead of `$user->status === 'active'` — fully type-safe, with IDE autocomplete.

## FilamentPHP's Enum Interfaces

Filament provides three interfaces under `Filament\Support\Contracts` that let enums describe how they should appear in the UI:

| Interface  | Method       | Purpose                           |
|------------|--------------|-----------------------------------|
| `HasLabel` | `getLabel()` | Display text instead of raw value |
| `HasColor` | `getColor()` | Badge/select color                |
| `HasIcon`  | `getIcon()`  | Heroicon icon                     |

Once your enum implements these interfaces, Filament reads them automatically across every component — table columns, form fields, filters — with no additional configuration on the component side.

Implement all three:

```php
use Filament\Support\Colors\Color;
use Filament\Support\Contracts\HasColor;
use Filament\Support\Contracts\HasIcon;
use Filament\Support\Contracts\HasLabel;
use Filament\Support\Icons\Heroicon;

enum UserStatus: string implements HasLabel, HasColor, HasIcon
{
    case PENDING  = 'pending';
    case ACTIVE   = 'active';
    case INACTIVE = 'inactive';

    public function getLabel(): string
    {
        return match($this) {
            UserStatus::PENDING  => 'Pending',
            UserStatus::ACTIVE   => 'Active',
            UserStatus::INACTIVE => 'Inactive',
        };
    }

    public function getColor(): array
    {
        return match($this) {
            UserStatus::PENDING  => Color::Amber,
            UserStatus::ACTIVE   => Color::Emerald,
            UserStatus::INACTIVE => Color::Red,
        };
    }

    public function getIcon(): Heroicon
    {
        return match($this) {
            UserStatus::PENDING  => Heroicon::Clock,
            UserStatus::ACTIVE   => Heroicon::CheckCircle,
            UserStatus::INACTIVE => Heroicon::XCircle,
        };
    }
}
```

Colors use constants from `Filament\Support\Colors\Color` — each constant is an array of OKLCH values across the 50–950 shade scale, which Filament uses to render consistent colors across light and dark themes. Icons use the `Filament\Support\Icons\Heroicon` enum — type-safe, IDE-autocompleted, no risk of typos in icon names.

## Using Enums in Filament Tables

Add `->badge()` to a `TextColumn` — Filament reads the label, color, and icon directly from the enum:

```php
use Filament\Tables\Columns\TextColumn;

TextColumn::make('status')
    ->badge(),
```

That's it. No `->color()` callback, no `->icon()` callback, no `->formatStateUsing()`. The badge renders with the correct color and icon based on the enum case.

To display the icon before the label:

```php
use Filament\Support\Enums\IconPosition;

TextColumn::make('status')
    ->badge()
    ->iconPosition(IconPosition::Before),
```

## Using Enums in Filament Forms

### Select with automatic options

Pass the enum class directly to `->options()` — Filament calls `getLabel()` on each case to build the option list:

```php
use Filament\Forms\Components\Select;

Select::make('status')
    ->options(UserStatus::class),
```

The dropdown shows "Pending", "Active", "Inactive" instead of `pending`, `active`, `inactive`. No manual mapping needed.

### ToggleButtons with colors and icons

```php
use Filament\Forms\Components\ToggleButtons;

ToggleButtons::make('status')
    ->options(UserStatus::class)
    ->inline(),
```

Filament reads `getColor()` and `getIcon()` from the enum to style and decorate each button — nothing extra needed on the component.

## Using Enums in Filament SelectFilter

`SelectFilter` also reads `HasLabel` to populate the dropdown options in table filters:

```php
use Filament\Tables\Filters\SelectFilter;

SelectFilter::make('status')
    ->options(UserStatus::class),
```

Users see "Pending / Active / Inactive" in the filter dropdown instead of raw database values.

## One Enum, Used Everywhere

The real payoff: **define once, apply everywhere**. Want to rename "Pending" to "Awaiting Review"? Want to change the `PENDING` color to blue? Edit one place in the enum — the table, form, and filter all update immediately.

Compare with the old approach:

```php
// ❌ Before — logic scattered across every component
TextColumn::make('status')
    ->badge()
    ->color(fn ($state) => match($state) {
        'pending'  => 'warning',
        'active'   => 'success',
        'inactive' => 'danger',
    })
    ->icon(fn ($state) => match($state) {
        'pending'  => 'heroicon-o-clock',
        'active'   => 'heroicon-o-check-circle',
        'inactive' => 'heroicon-o-x-circle',
    })
    ->formatStateUsing(fn ($state) => match($state) {
        'pending'  => 'Pending',
        'active'   => 'Active',
        'inactive' => 'Inactive',
    }),

// ✅ After — enum handles everything, component just needs ->badge()
TextColumn::make('status')
    ->badge(),
```

With the old approach, adding a new status like `SUSPENDED` means hunting down every `match` across all your resources. With an enum, you add one `case`.

## Summary

- Use **backed enums** (`string` or `int`) to store state in the database via Eloquent cast
- Implement `HasLabel`, `HasColor`, `HasIcon` from `Filament\Support\Contracts`
- Filament automatically reads these interfaces in table columns, form selects, toggle buttons, and filters
- Logic lives in one place — easier to maintain, no duplication, new cases require a single edit

**References:**
- [PHP 8.1 Backed Enums — php.net](https://www.php.net/manual/en/language.enumerations.backed.php)
- [Filament — Enum column colors & icons](https://filamentphp.com/docs/4.x/tables/columns/text#adding-a-badge)
