## ✅ Reflection

- **Why is it important to test services separately from controllers?**

  - Services contain business logic; controllers handle routing. Testing separately ensures each works in isolation and errors are easier to trace.

- **How does mocking dependencies improve unit testing?**

  - Mocking isolates the unit under test, preventing side effects and making tests deterministic.

- **Common pitfalls when writing unit tests in NestJS?**

  - Not isolating dependencies, testing implementation instead of behavior, missing edge cases, and not cleaning up mocks.

- **How can you ensure that unit tests cover all edge cases?**
  - Analyze possible inputs/outputs, use parameterized tests, and review code for branches and error handling.
