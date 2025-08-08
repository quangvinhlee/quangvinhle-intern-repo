# Reflection: NestJS + TypeORM + PostgreSQL

## How does @nestjs/typeorm simplify database interactions?

- It provides seamless integration between NestJS and TypeORM, allowing you to easily configure database connections, inject repositories, and use entities with dependency injection. This reduces boilerplate and makes working with databases in NestJS more consistent and maintainable.

## What is the difference between an entity and a repository in TypeORM?

- **Entity**: A class that maps to a database table. It defines the structure and fields of the data you store.
- **Repository**: A service that provides methods to interact with entities in the database (CRUD operations, queries, etc.). Repositories are injected and used to manage entity instances.

## How does TypeORM handle migrations in a NestJS project?

- TypeORM supports migrations to manage schema changes over time. You can generate, run, and revert migrations using CLI commands (`typeorm migration:generate`, `typeorm migration:run`, etc.). This helps keep your database schema in sync with your codebase and supports versioning and rollback.

## What are the advantages of using PostgreSQL over other databases in a NestJS app?

- PostgreSQL is open-source, robust, and supports advanced features like ACID compliance, JSON fields, full-text search, and complex queries. It scales well, is widely supported, and integrates smoothly with TypeORM and NestJS for relational data management.

---
