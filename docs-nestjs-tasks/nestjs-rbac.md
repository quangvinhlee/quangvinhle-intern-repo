# Reflection: Role-Based Authorization (RBAC) in NestJS with Auth0

## How does Auth0 store and manage user roles?

Auth0 manages user roles through its Authorization Core feature. Roles are assigned to users and stored in Auth0's database. When a user authenticates, Auth0 can include their roles in the access token (usually as a custom claim, e.g., `https://your-domain/roles`). Roles can be managed via the Auth0 dashboard or Management API, allowing for flexible assignment and updates.

## What is the purpose of a guard in NestJS?

A guard in NestJS is a class that determines whether a request should be handled by a route handler. Guards are used for authorization and authentication logic. For RBAC, a guard checks if the authenticated user has the required role(s) to access a specific endpoint, enforcing access control at the route or controller level.

## How would you restrict access to an API endpoint based on user roles?

You restrict access by:

1. Including user roles in the JWT access token (from Auth0).
2. Creating a custom `RolesGuard` in NestJS that reads the required roles from route metadata and compares them to the user's roles from the token.
3. Using a `@Roles('admin')` decorator on endpoints and applying the guard with `@UseGuards(JwtAuthGuard, RolesGuard)`.

## What are the security risks of improper authorization, and how can they be mitigated?

- **Risks:**
  - Unauthorized access to sensitive data or admin features.
  - Privilege escalation if role checks are missing or weak.
  - Relying only on client-side role checks (never trust the client).
- **Mitigations:**
  - Always enforce role checks on the server using guards.
  - Validate and parse roles from trusted JWTs (signed by Auth0).
  - Use least privilege: only grant roles necessary for each user.
  - Regularly audit roles and permissions.
