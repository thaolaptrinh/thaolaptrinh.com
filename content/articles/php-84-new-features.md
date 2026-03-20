---
title: "PHP 8.4: The Features That Actually Matter"
category: PHP
date: 2025-03-20
description: Property hooks, new array functions, and a performance bump — PHP 8.4 brings practical improvements that change how you write everyday code.
status: published
tags:
  - PHP
  - PHP 8.4
  - Backend
---

PHP 8.4 isn't a revolution. It's a refinement — the kind that quietly makes you a faster developer. No paradigm shifts, no breaking changes. Just cleaner code and less boilerplate.

Here's what actually matters.

## Property Hooks

This is the headline feature, and it earns it.

Before 8.4, adding logic to a property meant writing getters and setters:

```php
class User
{
    private string $firstName;
    private string $lastName;

    public function getFullName(): string
    {
        return $this->firstName . ' ' . $this->lastName;
    }

    public function setFirstName(string $firstName): void
    {
        $this->firstName = trim($firstName);
    }
}
```

Property hooks let you attach `get` and `set` logic directly to the property:

```php
class User
{
    public string $fullName {
        get => $this->firstName . ' ' . $this->lastName;
    }

    public string $firstName {
        set => $this->firstName = trim($value);
    }
}
```

A more practical example — storing prices in cents, exposing a formatted string:

```php
class Product
{
    public function __construct(
        public int $priceCents,
    ) {}

    public string $price {
        get => '$' . number_format($this->priceCents / 100, 2);
        set => $this->priceCents = (int) (preg_replace('/[^0-9]/', '', $value) * 100);
    }
}

$product = new Product(9999);
echo $product->price;       // "$99.99"

$product->price = '$49.99';
echo $product->priceCents;  // 4999
```

The property behaves like a regular public property from the outside. No getter calls, no method names to remember.

Hooks also work in interfaces, which means you can define the contract without specifying the implementation:

```php
interface HasFullName
{
    public string $fullName { get; }
}
```

## Lazy Objects

PHP 8.4 adds native lazy object support via `ReflectionClass`. An object is created only when it's first accessed — not when it's declared.

```php
$reflector = new ReflectionClass(User::class);

$user = $reflector->newLazyGhost(function (User $user) {
    // Called only when $user is first accessed
    $user->__construct(id: 1);
});

// At this point, $user exists but __construct hasn't run
$user->name; // Now it initializes
```

There's also `newLazyProxy()` for wrapping an existing instance:

```php
$proxy = $reflector->newLazyProxy(function () {
    return new User(id: 1); // Full initialization
});
```

Where this matters in practice: service containers, ORMs, and any code that builds object graphs you might not fully traverse. Less memory, faster boot.

## New Array Functions

Four functions that should have existed years ago:

```php
$numbers = [3, 7, 1, 9, 2];

// Find first element matching a condition
$found = array_find($numbers, fn($n) => $n > 5);        // 7

// Find the key of the first match
$key = array_find_key($numbers, fn($n) => $n > 5);      // 1

// True if any element matches
$hasAny = array_any($numbers, fn($n) => $n > 8);        // true

// True if all elements match
$allPositive = array_all($numbers, fn($n) => $n > 0);   // true
```

Before 8.4, `array_find` required either a custom helper or a combination of `array_filter` + `reset`. `array_any` meant writing `count(array_filter(...)) > 0`. Small wins, but they add up over a codebase.

## Asymmetric Visibility

You can now set different visibility for reading and writing a property:

```php
class Order
{
    public private(set) string $status = 'pending';

    public function confirm(): void
    {
        $this->status = 'confirmed'; // Works — inside the class
    }
}

$order = new Order();
echo $order->status;    // Works — public read
$order->status = 'x';  // Error — private write
```

`public private(set)` means: anyone can read it, only the class can write it. No more `readonly` workarounds for properties that need internal mutation.

## `#[\Deprecated]` Attribute

You can now mark your own code as deprecated using a native attribute:

```php
class PaymentService
{
    #[\Deprecated(
        message: 'Use processPayment() instead',
        since: '2.4.0',
    )]
    public function pay(int $amount): void
    {
        $this->processPayment($amount);
    }
}
```

Calling a deprecated method triggers an `E_USER_DEPRECATED` error — the same notice PHP uses for its own deprecations. IDEs pick it up too.

## `new` in Initializers

A small but welcome quality of life change:

```php
// Before 8.4
class Logger
{
    private Formatter $formatter;

    public function __construct(?Formatter $formatter = null)
    {
        $this->formatter = $formatter ?? new JsonFormatter();
    }
}

// PHP 8.4
class Logger
{
    public function __construct(
        private Formatter $formatter = new JsonFormatter(),
    ) {}
}
```

Default parameter values can now be object instances. Works in function signatures, property declarations, and constant expressions.

## Should You Upgrade?

PHP 8.4 requires PHP 8.2+ as your starting point, and `composer` will flag any incompatible dependencies before you upgrade.

```bash
# Check what will break
composer require phpstan/phpstan --dev
vendor/bin/phpstan analyse --level=8

# Update the requirement
# In composer.json: "php": "^8.4"
composer update

# Run your test suite
vendor/bin/phpunit
```

If you're on 8.3, the upgrade is straightforward. If you're below 8.2, upgrade incrementally — 8.2 first, then 8.3, then 8.4.

The headline reason to upgrade: property hooks. If you write domain-heavy PHP with value objects and entities, they will clean up your code noticeably. Everything else is a bonus.
