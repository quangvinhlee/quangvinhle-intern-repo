# Reflection: Handling Environment Variables & Configuration in NestJS

## How does `@nestjs/config` help manage environment variables?

The `@nestjs/config` package provides a powerful way to load and manage environment variables in a NestJS application. It allows:

- Automatic loading of `.env` files into `process.env`.
- Easy access to config values via `ConfigService`.
- Support for configuration files, enabling structured and modular config loading.
- Validation of environment variables using third-party libraries like `Joi`.

It promotes clean, centralized configuration and keeps sensitive values out of the source code.

---

## Why should secrets (e.g., API keys, database passwords) never be stored in source code?

Storing secrets directly in code or committing them to version control (e.g., GitHub) is dangerous because:

- They could be exposed publicly, leading to unauthorized access.
- Anyone with access to the repo would gain access to production systems.
- It violates the principle of least privilege and weakens security posture.

Best practices include using `.env` files locally and a secret manager (e.g., AWS Secrets Manager, HashiCorp Vault) in production.

---

## How can you validate environment variables before the app starts?

You can use `Joi` or other schema validation libraries with `@nestjs/config` to define expected environment variables and types. This helps catch configuration errors early.

Example:

```ts
ConfigModule.forRoot({
  validationSchema: Joi.object({
    DATABASE_URL: Joi.string().required(),
    JWT_SECRET: Joi.string().min(32).required(),
    PORT: Joi.number().default(3000),
  }),
});
```
