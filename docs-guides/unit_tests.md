## Reflection

### Why is automated testing important in software development?

Automated testing helps ensure code quality and reliability by catching bugs early. It allows developers to quickly verify that changes do not break existing functionality, supports refactoring, and improves confidence in deployments. Automated tests also save time compared to manual testing and can be integrated into CI/CD pipelines for continuous validation.

### What did you find challenging when writing your first Jest test?

One challenge was configuring Jest to work with the project's module system. Errors related to import/export syntax required switching to CommonJS or updating Jest's configuration. Understanding how to structure test files and write assertions also took some initial effort, but became easier with practice.

# ISUSE 74

# Unit Tests

This document contains the unit tests for the project, including tests for components, hooks, and other utilities. We use React Testing Library and Jest for testing our React components.

## Reflection

### What are the benefits of using React Testing Library instead of testing implementation details?

React Testing Library encourages testing components from the user's perspective, focusing on what is rendered and how users interact with the UI. This approach leads to more robust and maintainable tests, as it avoids coupling tests to internal component logic or structure, which may change over time. It helps ensure that tests break only when actual user-facing behavior changes.

### What challenges did you encounter when simulating user interaction?

Simulating user interaction can be challenging due to the need for proper event handling and state updates. Ensuring the correct elements are targeted and waiting for asynchronous updates can require additional setup. Sometimes, configuring the test environment to support features like JSX or TypeScript adds complexity, especially when integrating with tools like Jest and React Testing Library.

# ISSUE 75

# Reflection

## Why is it important to mock API calls in tests?

Mocking API calls ensures tests are fast, reliable, and do not depend on external services. It allows you to control the data returned by the API, test edge cases, and avoid network-related failures. This leads to more predictable and isolated unit tests.

## What are some common pitfalls when testing asynchronous code?

Common pitfalls include not waiting for asynchronous operations to complete, leading to false positives or negatives. Forgetting to use async/await or proper utilities like `waitFor` can cause tests to pass or fail incorrectly. Timing issues and race conditions may also occur if asynchronous code is not handled carefully.

# ISSUE 76

# Unit Tests

This document contains the unit tests for the application.

## Reflection

### What was the most challenging part of testing Redux?

The most challenging part was ensuring the correct state shape and types, especially when handling asynchronous actions and extra reducers. Setting up initial state and simulating dispatched actions accurately can also be tricky.

### How do Redux tests differ from React component tests?

Redux tests focus on state changes and reducer logic, often testing pure functions in isolation. React component tests, on the other hand, interact with the rendered UI and simulate user behavior. Redux tests validate state transitions, while component tests verify UI updates and user interactions.
