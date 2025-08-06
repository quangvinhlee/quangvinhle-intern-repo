# Reflection: Using Interceptors & Middleware in NestJS

## 1. What is the difference between an interceptor and middleware in NestJS?

- **Middleware** runs before the route handler, during the request phase. It can modify the request or response, perform authentication, logging, or other preprocessing tasks. Middleware cannot access the response body.
- **Interceptors** run before and after the route handler. They can transform the result returned by a handler, extend basic method behavior, handle logging, caching, error handling, and more. Interceptors have access to both the request and the response data.

## 2. When would you use an interceptor instead of middleware?

Use an interceptor when you need to:

- Transform or manipulate the response data
- Implement cross-cutting concerns like logging, caching, or error handling that require access to both the request and the response
- Apply logic after the route handler has executed

Use middleware for tasks that only need to process the request before it reaches the route handler, such as authentication, request validation, or adding properties to the request object.

## 3. How does LoggerErrorInterceptor help?

LoggerErrorInterceptor is a built-in or custom interceptor that catches and logs errors thrown by route handlers. It helps by:

- Automatically logging unhandled exceptions
- Providing consistent error logging across the application
- Making it easier to debug and monitor errors in production
