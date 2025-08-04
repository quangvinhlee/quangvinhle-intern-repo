## 📝 Reflection

### 1. How does Auth0 handle authentication compared to traditional username/password auth?

Auth0 is an identity-as-a-service platform that abstracts and manages authentication flows. Unlike traditional username/password auth, where you directly manage user credentials and sessions, Auth0:

- Supports multiple identity providers (social logins, enterprise, databases)
- Offloads credential storage, hashing, and verification securely
- Manages sessions through tokens (like JWT) rather than server-side sessions
- Provides built-in features like multifactor authentication, password reset, and account linking

This reduces development overhead and improves security by relying on a trusted third-party service.

---

### 2. What is the role of JWT in API authentication?

JWT (JSON Web Token) is a compact, URL-safe token format used to represent claims between parties. In API authentication:

- JWTs are issued after a successful login by Auth0
- The client includes the JWT in the Authorization header of API requests
- The backend verifies the JWT’s signature and claims to authenticate the user
- JWT enables stateless authentication, eliminating the need for server-side sessions

This allows scalable, efficient authentication across distributed systems.

---

### 3. How do jwks-rsa and public/private key verification work in Auth0?

- Auth0 signs JWTs using a private key (asymmetric cryptography)
- The backend fetches the **public keys** from Auth0’s JWKS (JSON Web Key Set) endpoint using the `jwks-rsa` library
- When a JWT is received, the backend uses the public key to verify the signature and ensure the token is valid and unaltered
- This process secures the token validation without exposing the private signing key

`jwks-rsa` automates fetching and caching public keys, handling key rotation transparently.

---

### 4. How would you protect an API route so that only authenticated users can access it?

In NestJS, you can protect routes by:

- Using the `@UseGuards(AuthGuard('jwt'))` decorator on controllers or methods
- Implementing a JWT strategy that verifies tokens using the public keys from Auth0 (via `jwks-rsa`)
- Configuring the `passport-jwt` strategy to extract and validate JWTs from the Authorization header
- Optionally applying roles or scopes guards to enforce authorization beyond authentication

This ensures that only requests with valid JWTs can access the protected endpoints.

---
