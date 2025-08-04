# 📘 Reflection: Logging in NestJS with `nestjs-pino`

## What are the benefits of using `nestjs-pino` for logging?

- **Performance**: `nestjs-pino` uses the Pino logger under the hood, which is one of the fastest Node.js loggers available.
- **Structured Logs**: It outputs logs in JSON format, making them easier to parse, search, and integrate with log monitoring tools like Datadog or ELK stack.
- **Consistency**: It provides a consistent logging format across the application, including HTTP request/response logs.
- **Built-in Integration**: Seamlessly integrates with NestJS lifecycle, including context-aware logging in services and interceptors.

## How does global exception handling improve API consistency?

- It ensures all unhandled errors are caught and transformed into a consistent API response format.
- Reduces boilerplate by centralizing error transformation logic.
- Prevents internal error details from leaking to clients.
- Improves developer experience by logging errors uniformly and predictably.

## What is the difference between a logging interceptor and an exception filter?

| Feature              | Logging Interceptor                               | Exception Filter                                 |
| -------------------- | ------------------------------------------------- | ------------------------------------------------ |
| **Purpose**          | Logs lifecycle events like requests and responses | Handles and transforms thrown exceptions         |
| **When it runs**     | Around method execution (before & after)          | When an exception is thrown                      |
| **Use Case**         | Tracking performance, input/output                | Formatting error responses, logging stack traces |
| **Can log success?** | Yes                                               | No (only on failure)                             |

## How can logs be structured to provide useful debugging information?

- **Include context**: e.g., `requestId`, `userId`, `endpoint`, `method`
- **Structured format**: Use JSON for machine parsing (e.g., `{ level, message, timestamp, context }`)
- **Separation of levels**: Use appropriate log levels (`debug`, `info`, `warn`, `error`, `fatal`)
- **Correlation ID**: Track a request across services using a shared ID
- **Avoid clutter**: Don’t log sensitive data or overly verbose output in production
- **Tag with service/module**: Helps identify source when reading logs from microservices
