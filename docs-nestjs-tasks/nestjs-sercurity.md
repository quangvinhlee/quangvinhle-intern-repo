# 🔐 Reflection: Security Best Practices in NestJS

## What are the most common security vulnerabilities in a NestJS backend?

1. **Injection Attacks**  
   - SQL Injection: Malicious input that modifies database queries.
   - NoSQL Injection: Manipulating MongoDB-style queries through input.

2. **Cross-Site Scripting (XSS)**  
   - Inserting scripts into data that are rendered on the client side.

3. **Cross-Site Request Forgery (CSRF)**  
   - Forcing authenticated users to perform unintended actions.

4. **Insecure CORS Configurations**  
   - Allowing requests from untrusted origins.

5. **Broken Authentication or Authorization**  
   - Missing guards or improper role checks.

6. **Sensitive Data Exposure**  
   - Logging passwords, exposing tokens, or misconfigured TLS.

---

## How does `@fastify/helmet` improve application security?

`@fastify/helmet` adds important HTTP headers that:

- Prevent XSS (`X-XSS-Protection`, `Content-Security-Policy`)
- Disable browser sniffing (`X-Content-Type-Options`)
- Enforce HTTPS (`Strict-Transport-Security`)
- Prevent iframe embedding (`X-Frame-Options`)
- Help control referrer info (`Referrer-Policy`)

It’s a simple and effective way to mitigate many front-end attack vectors with minimal configuration.

---

## Why is rate limiting important for preventing abuse?

Rate limiting:

- Prevents brute-force login attempts and credential stuffing.
- Protects the server from denial-of-service (DoS) attacks.
- Controls abusive API usage from bots or poorly written clients.
- Helps ensure fair access for all users.

Using `@fastify/rate-limit` lets you define how many requests an IP can make per interval, reducing risk from malicious traffic.

---

## How can sensitive configuration values be protected in a production environment?

- **Environment Variables**: Use `.env` files locally and secret managers (e.g., AWS Secrets Manager, Vault) in production.
- **Never commit secrets**: Add `.env` and config files to `.gitignore`.
- **Access control**: Limit who can read production secrets.
- **Use validation**: Validate config values using libraries like `@nestjs/config` with `Joi` schemas.
- **Logging caution**: Never log secrets, tokens, or passwords.
- **Scoped access**: Minimize permissions for API keys and database users.

---


