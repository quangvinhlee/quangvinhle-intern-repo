## 📝 Reflection

### 1. How does Supertest help test API endpoints?

Supertest is a library that allows you to:

- **Simulate HTTP requests** to your NestJS server during tests
- Test full **request/response cycles** without starting an external server
- Make assertions on status codes, headers, and response bodies

It provides a way to validate the entire API flow from request input to response output, ensuring that routing, middleware, validation, and service interactions work as intended.

---

### 2. What is the difference between unit tests and API tests?

| Feature      | Unit Tests                        | API (Integration) Tests                  |
| ------------ | --------------------------------- | ---------------------------------------- |
| Scope        | Single unit (function/service)    | End-to-end behavior of an API route      |
| Dependencies | Mocked                            | Real or semi-real (may use test modules) |
| Speed        | Fast                              | Slower due to bootstrapping app          |
| Goal         | Validate logic in isolation       | Validate interaction of multiple layers  |
| Example      | Test a `UserService.createUser()` | Test `POST /users` route                 |

Unit tests focus on internal logic, while API tests ensure that multiple components (controllers, services, pipes, guards) integrate correctly.

---

### 3. Why should authentication be mocked in integration tests?

Authentication is mocked to:

- **Isolate the feature being tested**, instead of testing auth flows repeatedly
- Avoid reliance on real tokens or login flows in every test
- Speed up tests and reduce flakiness
- Focus on whether routes behave correctly _when the user is authenticated_

Example: Instead of generating real JWTs, you can inject mock guards or bypass authentication middleware using custom test modules or mock guards.

---

### 4. How can you structure API tests to cover both success and failure cases?

A good API test suite should include:

#### ✅ **Success Cases**

- Correct status codes (`200`, `201`)
- Valid response body structure
- Expected side effects (e.g., database writes, events emitted)

```ts
it("should return user profile", async () => {
  const res = await request(app.getHttpServer())
    .get("/users/profile")
    .set("Authorization", `Bearer ${mockToken}`)
    .expect(200);

  expect(res.body).toHaveProperty("id");
});
```

**❌ Failure Cases**

Missing or invalid data (e.g., 400 Bad Request)

Unauthorized access (e.g., 401, 403)

Unexpected input (e.g., wrong data types)

```ts
it("should return 400 for invalid email", async () => {
  await request(app.getHttpServer())
    .post("/users")
    .send({ email: "not-an-email" })
    .expect(400);
});
```

Use describe() blocks to group related tests and write beforeEach() setups to configure common behaviors.
