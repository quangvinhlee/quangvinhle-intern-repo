# Simple React App - Testing Focus

A comprehensive React application demonstrating various testing practices and patterns using modern testing tools and libraries.

## 🎯 Project Overview

This project showcases different types of testing in a React application:

- **Unit Testing**: Redux slices and utility functions
- **Component Testing**: React components with user interactions
- **Integration Testing**: API calls with mocking
- **Test-Driven Development**: Examples of TDD practices

## 🧪 Testing Stack

- **Jest**: Test runner and assertion library
- **@testing-library/react**: React component testing utilities
- **@testing-library/jest-dom**: Custom Jest matchers for DOM testing
- **ts-jest**: TypeScript support for Jest
- **jest-environment-jsdom**: DOM environment for testing

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Build for production
npm run build
```

## 📋 Test Examples

### 1. Redux Slice Testing (`counterSlice.test.ts`)

Tests Redux Toolkit slice with async thunks:

```typescript
describe("counter reducer", () => {
  it("should handle increment", () => {
    expect(counterReducer({ value: 0, status: "idle" }, increment(5))).toEqual({
      value: 5,
      status: "idle",
    });
  });

  it("should handle decrement", () => {
    expect(counterReducer({ value: 5, status: "idle" }, decrement(2))).toEqual({
      value: 3,
      status: "idle",
    });
  });
});

describe("counter async thunk", () => {
  it("should handle incrementAsync fulfilled", () => {
    const state = { value: 0, status: "idle" as "idle" };
    const action = { type: incrementAsync.fulfilled.type, payload: 7 };
    expect(counterReducer(state, action)).toEqual({
      value: 7,
      status: "succeeded" as "succeeded",
    });
  });
});
```

### 2. Component Testing (`Message.test.tsx`)

Tests React component interactions:

```typescript
test("renders the message", () => {
  render(<Message />);
  expect(screen.getByTestId("message")).toHaveTextContent("Hello, World!");
});

test("changes message on button click", () => {
  render(<Message />);
  fireEvent.click(screen.getByText("Click Me"));
  expect(screen.getByTestId("message")).toHaveTextContent("Button Clicked!");
});
```

### 3. API Integration Testing (`DataFetcher.test.tsx`)

Tests API calls with mocking:

```typescript
// Mock the fetchData module
jest.mock("./api", () => ({
  fetchData: jest.fn(() => Promise.resolve("Mocked API Data")),
}));

test("displays data from mocked API call", async () => {
  render(<DataFetcher />);
  expect(screen.getByTestId("api-data")).toHaveTextContent("Loading...");
  await waitFor(() => {
    expect(screen.getByTestId("api-data")).toHaveTextContent("Mocked API Data");
  });
});
```

### 4. Utility Function Testing (`math.test.js`)

Tests pure functions:

```javascript
const { add } = require("./math");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});
```

## 🛠️ Testing Configuration

### Jest Configuration (`jest.config.js`)

```javascript
export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapping: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts", "!src/main.tsx"],
};
```

### TypeScript Configuration

The project uses separate TypeScript configs:

- `tsconfig.json`: Base configuration
- `tsconfig.app.json`: Application-specific settings
- `tsconfig.node.json`: Node.js environment settings

## 📁 Project Structure

```
src/
├── components/
│   ├── Message.tsx          # Simple component with state
│   └── Message.test.tsx     # Component tests
├── store/
│   ├── counterSlice.ts      # Redux Toolkit slice
│   └── counterSlice.test.ts # Redux tests
├── utils/
│   ├── math.js              # Utility functions
│   └── math.test.js         # Utility tests
├── api/
│   └── api.ts               # API functions
├── DataFetcher.tsx          # API integration component
├── DataFetcher.test.tsx     # Integration tests
├── App.tsx                  # Main application component
└── main.tsx                 # Application entry point
```

## 🧪 Testing Best Practices Demonstrated

### 1. **Test Organization**

- Tests co-located with source files
- Descriptive test names
- Proper test grouping with `describe` blocks

### 2. **Component Testing**

- Testing user interactions (clicks, form submissions)
- Using `data-testid` attributes for reliable element selection
- Testing component state changes

### 3. **Redux Testing**

- Testing reducer functions
- Testing async thunks
- Testing different action types (pending, fulfilled, rejected)

### 4. **API Testing**

- Mocking external dependencies
- Testing loading states
- Testing async operations with `waitFor`

### 5. **Utility Testing**

- Testing pure functions
- Testing edge cases
- Simple and focused test cases

## 🎯 Learning Objectives

This project demonstrates:

- **Modern Testing Tools**: Jest, Testing Library, TypeScript
- **Testing Patterns**: Unit, integration, and component testing
- **Best Practices**: Test organization, mocking, async testing
- **Real-world Scenarios**: Redux state management, API integration

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Testing
npm test             # Run all tests
npm test -- --watch  # Run tests in watch mode
npm test -- --coverage # Run tests with coverage

# Code Quality
npm run lint         # Run ESLint
```

## 📚 Testing Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Redux Toolkit Testing](https://redux-toolkit.js.org/usage/writing-tests)
- [React Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

---

**Purpose**: Learning and demonstrating React testing practices  
**Technologies**: React, TypeScript, Jest, Testing Library, Redux Toolkit
