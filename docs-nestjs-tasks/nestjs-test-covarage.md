# Understanding the Focus Bear Coverage Bar & Writing Meaningful Tests

🎯 **Goal**  
Learn how to measure and improve test coverage in Focus Bear’s NestJS backend using the coverage bar while ensuring tests have meaningful assertions.

---

## ✅ Why is this important?

Focus Bear maintains a high standard of test coverage, ensuring stability and reducing bugs. The coverage bar tracks how well code is tested, and all code is expected to meet at least **80% test coverage** before deployment.

However, high coverage alone isn’t enough—tests must have **good assertions** to ensure they verify actual behavior and catch real issues.

---

## ✅ Tasks

- Research how Jest generates test coverage reports in NestJS
- Run the test suite and view the test coverage report
- Identify untested areas and write additional tests to improve coverage
- Research the concept of "meaningful test assertions" and why high coverage can sometimes be misleading
- Refactor a weak test to ensure it has proper assertions

---

## 📝 Reflection

### 1. What does the coverage bar track, and why is it important?

The coverage bar tracks the percentage of code that runs during test execution. It typically includes:

- **Statements**: Total number of executed code statements
- **Branches**: Conditional logic branches (e.g., `if`, `else`)
- **Functions**: Function call coverage
- **Lines**: Specific lines of code that are run

It’s important because it gives a **quantifiable view of test completeness**, helping ensure that critical paths in the code are being exercised by tests.

---

### 2. Why does Focus Bear enforce a minimum test coverage threshold?

Focus Bear requires at least **80% coverage** to:

- Ensure key features are tested before merge
- Reduce production bugs
- Encourage developers to write tests as part of the development process
- Maintain quality and confidence in the codebase

It sets a practical standard for reliability while still allowing room for flexibility.

---

### 3. How can high test coverage still lead to untested functionality?

High coverage can be **deceptive** if the tests:

- Don't include **assertions** (e.g., tests that only run functions without checking outcomes)
- Miss **edge cases** and alternative paths
- Focus on superficial coverage, not meaningful behavior
- Pass regardless of whether logic is correct

A test can "touch" the code without **verifying** it works as intended, giving a false sense of security.

---

### 4. What are examples of weak vs. strong test assertions?

**Weak assertion:**

```ts
expect(service.getData()).toBeDefined();
This only confirms that something is returned, not that it's correct.
```

**Strong assertion:**

```ts
expect(service.getData()).toEqual({ id: 1, name: "Focus" });
```

This checks that the actual result matches the expected structure and values.

Other strong examples include:

Using **toThrow()** for error checks  
Asserting mock calls (e.g., expect(mockFn).toHaveBeenCalledWith(...))

Verifying side effects (like DB writes or event emits)

---

### 5. How can you balance increasing coverage with writing effective tests?

Use the coverage bar as a starting point, not a goal by itself

Focus on meaningful behavior, not just touching lines of code

Write unit tests for core logic and integration tests for interactions

Prioritize complex logic, decision branches, and failure cases

Avoid writing filler tests just to bump numbers

Effective testing is about confidence, not just metrics. High-quality tests protect the codebase better than shallow ones.
