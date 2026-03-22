---
title: "Laravel Migration Subfolders"
category: Laravel
date: 2026-03-22
description: Use glob and loadMigrationsFrom in your Service Provider to partition migrations into module subfolders — requiring no changes to Artisan or any configuration.
status: published
tags:
  - Laravel
  - Migration
  - Backend
  - PHP
---

By default, Laravel resolves all migrations from a single flat directory: `database/migrations/`. This is sufficient for small projects, but as the schema grows to 50–100 migration files, locating a specific file becomes inefficient.

`loadMigrationsFrom()` in your Service Provider accepts additional paths. Combined with `glob()` to auto-discover subdirectories, you can partition migrations by module with no changes to Artisan or framework configuration. This approach is available from Laravel 9+.

## Directory structure

Current flat layout:

```
database/migrations/
├── 2024_01_01_000000_create_users_table.php
├── 2024_01_15_000000_create_products_table.php
├── 2024_01_20_000000_add_slug_to_products_table.php
├── 2024_02_01_000000_create_orders_table.php
├── 2024_02_05_000000_create_order_items_table.php
├── 2024_02_10_000000_add_status_to_orders_table.php
...
```

Organized by module:

```
database/migrations/
├── users/
│   ├── 2024_01_01_000000_create_users_table.php
│   └── 2024_03_10_000000_add_avatar_to_users_table.php
├── products/
│   ├── 2024_01_15_000000_create_products_table.php
│   ├── 2024_01_20_000000_add_slug_to_products_table.php
│   └── 2024_03_01_000000_create_categories_table.php
└── orders/
    ├── 2024_02_01_000000_create_orders_table.php
    ├── 2024_02_05_000000_create_order_items_table.php
    └── 2024_02_10_000000_add_status_to_orders_table.php
```

## AppServiceProvider setup

```php
// app/Providers/AppServiceProvider.php

public function boot(): void
{
    $this->loadMigrationSubfolders();
}

private function loadMigrationSubfolders(): void
{
    $paths = glob(database_path('migrations/*'), GLOB_ONLYDIR);

    if (empty($paths)) {
        return;
    }

    $this->loadMigrationsFrom($paths);
}
```

`glob(..., GLOB_ONLYDIR)` returns only subdirectories, skipping files. `empty()` handles both cases: no subdirectories present (`[]`) and a system-level error such as a missing directory (`false`).

## Migration order

Laravel sorts migrations by the timestamp in the filename, regardless of which directory they reside in. Artisan commands (`migrate`, `migrate:rollback`, `migrate:fresh`, `migrate:status`) behave identically — no additional flags required.

## Incremental adoption

`loadMigrationsFrom()` appends to the registered migration paths — it does not override the default. Laravel continues to resolve migrations placed directly in `database/migrations/`, so modules can be migrated incrementally without affecting existing migration state.
