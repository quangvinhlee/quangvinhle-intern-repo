# 🛠️ Reflection: Inspecting API Requests & Responses in NestJS

## How can logging request payloads help with debugging?

Logging request payloads allows developers to:

- Verify that the client is sending the expected data.
- Identify issues with data formatting, missing fields, or incorrect types.
- Trace specific user actions or API calls in complex flows.
- Reproduce bugs based on real request data.
- Understand edge cases where APIs behave unexpectedly.

## What tools can you use to inspect API requests and responses?

- **Postman**: GUI tool for sending HTTP requests and viewing responses; supports authentication, headers, and scripting.
- **Bruno**: Open-source alternative to Postman with a file-based workflow, suitable for teams using Git.
- **curl / httpie**: Command-line tools for testing and debugging HTTP requests.
- **Browser DevTools**: Useful for front-end APIs to inspect network requests.
- **NestJS logging**: Built-in or `nestjs-pino` for logging request/response metadata in the server logs.

## How would you debug an issue where an API returns the wrong status code?

1. **Check controller logic**: Verify what status is returned by the controller or service.
2. **Inspect interceptors/filters**: Ensure that global exception filters or response interceptors aren’t modifying the status unintentionally.
3. **Log intermediate values**: Add logs before the response is sent to trace logic branches.
4. **Use Postman/curl**: Reproduce the issue and check the exact response status and payload.
5. **Review DTOs and validation pipes**: Validation errors might cause unexpected 400 or 422 errors.

## What are some security concerns when logging request data?

- **Sensitive data exposure**: Logging passwords, access tokens, or personal data can leak information if logs are accessed by unauthorized users.
- **Regulatory compliance**: Logging personal identifiable information (PII) can violate privacy laws like GDPR if not handled properly.
- **Log injection attacks**: Malicious payloads can be crafted to manipulate log content or formatting.
- **Data retention**: Long-term storage of sensitive request logs can become a security liability.
