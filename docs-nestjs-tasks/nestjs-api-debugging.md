# 🕵️ Inspecting API Requests & Responses in NestJS

## 🎯 Goal

Learn how to inspect incoming API requests and outgoing responses to debug NestJS applications effectively.

---

## ✅ Why is this important?

When debugging Focus Bear’s backend, it’s crucial to verify that API requests contain the expected data and that responses return the correct structure. Debugging at the request/response level helps catch issues like incorrect payloads, missing headers, and invalid authentication.

---

## ✅ Tasks

1. **Research tools for inspecting API requests**

   - Explore tools like [Bruno](https://www.usebruno.com/), [Postman](https://www.postman.com/), or command-line utilities like `curl` for sending and inspecting HTTP requests.

2. **Log request payloads and headers in a NestJS controller**

   - Use NestJS's built-in logging or `console.log` to print incoming request bodies and headers for debugging.
   - Example:
     ```typescript
     @Post('example')
     async example(@Req() req) {
       console.log('Headers:', req.headers);
       console.log('Body:', req.body);
       // ...existing logic...
     }
     ```

3. **Inspect API responses and verify HTTP status codes**

   - Use your API client (Bruno, Postman, curl) to check the response body and status code.
   - Ensure the API returns the expected status (e.g., 200, 201, 400, 401, 500).

4. **Use middleware or interceptors to modify and analyze API responses**
   - Implement NestJS middleware or interceptors to log, modify, or analyze outgoing responses.
   - Example (interceptor):
     ```typescript
     @Injectable()
     export class LoggingInterceptor implements NestInterceptor {
       intercept(
         context: ExecutionContext,
         next: CallHandler
       ): Observable<any> {
         const response = context.switchToHttp().getResponse();
         return next.handle().pipe(
           tap((data) => {
             console.log("Response:", data);
             console.log("Status:", response.statusCode);
           })
         );
       }
     }
     ```

---

## ✅ Reflection

- **How can logging request payloads help with debugging?**

  - Lets you see exactly what data your API receives, making it easier to spot malformed, missing, or unexpected fields.

- **What tools can you use to inspect API requests and responses?**

  - GUI tools: Bruno, Postman
  - CLI tools: curl, httpie
  - Browser DevTools (for frontend APIs)

- **How would you debug an issue where an API returns the wrong status code?**

  - Check controller/service logic for correct status code handling.
  - Log the response status and payload.
  - Use an API client to reproduce the issue and inspect the full response.

- **What are some security concerns when logging request data?**
  - Avoid logging sensitive information (passwords, tokens, PII).
  - Use environment-based logging (more verbose in development, minimal in production).
  - Sanitize logs to prevent leaking confidential data.
