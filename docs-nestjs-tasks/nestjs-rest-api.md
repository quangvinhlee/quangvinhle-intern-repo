# 📝 Reflection: Creating REST APIs with NestJS

## What is the role of a controller in NestJS?

A controller in NestJS is responsible for handling incoming HTTP requests, mapping them to route handlers, and returning responses. Controllers define the API endpoints and delegate business logic to services, acting as the interface between the client and the backend logic.

## How should business logic be separated from the controller?

Business logic should be placed in service classes, not in controllers. Controllers should only handle request validation, routing, and response formatting, while services encapsulate the core logic, data processing, and interactions with databases or other APIs. This separation keeps controllers simple and promotes code reuse and testability.

## Why is it important to use services instead of handling logic inside controllers?

Using services ensures that business logic is centralized, reusable, and easier to test. It prevents code duplication, keeps controllers focused on HTTP concerns, and makes the application more maintainable and scalable. Services can also be injected into multiple controllers or other services, supporting modular design.

## How does NestJS automatically map request methods (GET, POST, etc.) to handlers?

NestJS uses decorators like `@Get()`, `@Post()`, `@Put()`, and `@Delete()` on controller methods to map HTTP request methods and routes to specific handler functions. The framework automatically routes incoming requests to the correct method based on the HTTP verb and path, making endpoint definition clear and declarative.
