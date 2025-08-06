## ✅ Reflection

- **How does dependency injection improve maintainability?**
  - Decouples classes, making code easier to test, refactor, and maintain.
- **What is the purpose of the @Injectable() decorator?**
  - Marks a class as a provider, allowing NestJS to inject it where needed.
- **What are the different types of provider scopes, and when would you use each?**
  - Singleton: For shared state/services.
  - Request: For request-specific data (e.g., user context).
  - Transient: For stateless, short-lived operations.
- **How does NestJS automatically resolve dependencies?**
  - By scanning modules for providers and injecting them based on constructor types and metadata.

---
