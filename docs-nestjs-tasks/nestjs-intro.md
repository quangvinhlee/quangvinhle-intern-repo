## ✅ Reflections

### 1. What are the key differences between NestJS and Express.js?

| Aspect                   | NestJS                                     | Express.js                            |
| ------------------------ | ------------------------------------------ | ------------------------------------- |
| **Architecture**         | Opinionated, modular (inspired by Angular) | Minimalist, unopinionated             |
| **Structure**            | Built-in support for modules, services     | Developers define their own structure |
| **TypeScript**           | Built with TypeScript in mind              | TypeScript support is optional        |
| **Dependency Injection** | Built-in via underlying IoC container      | Manual or third-party libraries       |
| **Decorators**           | Uses decorators for metadata & routing     | No native decorator usage             |
| **Testing**              | Designed with testability in mind          | Requires manual setup for DI/mocking  |

NestJS provides a scalable structure out of the box, whereas Express gives more flexibility with minimal abstraction.

---

### 2. Why does NestJS use decorators extensively?

Decorators in NestJS provide metadata that the framework uses to understand and connect components. For example:

- `@Controller()` defines a class as a request handler
- `@Get()`, `@Post()` map methods to HTTP routes
- `@Injectable()` marks a class as a provider (injectable service)
- `@Module()` organizes related components into cohesive units

This leads to cleaner, more declarative code and aligns well with TypeScript's metadata capabilities.

---

### 3. How does NestJS handle dependency injection?

NestJS uses a built-in **Inversion of Control (IoC)** container. When a class is marked with `@Injectable()`, it becomes a **provider** that can be automatically injected into other classes (e.g., services into controllers). NestJS resolves dependencies by:

- Registering providers in modules
- Injecting them via the constructor
- Managing their lifecycle automatically

This simplifies testing, decouples components, and supports scalability.

---

### 4. What benefits does modular architecture provide in a large-scale app?

Modular architecture in NestJS helps by:

- **Separation of concerns**: Code is grouped by feature (e.g., `UsersModule`, `AuthModule`)
- **Reusability**: Modules can be shared across apps or libraries
- **Scalability**: Teams can develop different modules in parallel
- **Maintainability**: Bugs and updates are easier to isolate
- **Lazy loading**: Modules can be loaded only when needed

In large codebases, this structure prevents the app from becoming tangled or monolithic.

---
