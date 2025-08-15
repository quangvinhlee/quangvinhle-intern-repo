# QuangVinhLe Internship Repository

Welcome to my internship repository! This repository contains various projects, documentation, and learning materials from my internship journey.

## 📁 Repository Structure

```
quangvinhle-intern-repo/
├── 📚 docs-initial-tasks/          # Initial internship tasks and reflections
├── 📚 docs-guides/                 # General development guides
├── 📚 docs-nestjs-tasks/           # NestJS-specific documentation
├── 📚 docs-git/                    # Git knowledge and practices
├── 📚 docs-tools/                  # Development tools documentation
├── 🚀 onboarding-nestjs/           # Complete NestJS learning project
├── 🧪 simple-react-app/            # React app with comprehensive testing
├── 🔧 onboarding-api-bruno/        # API testing with Bruno
└── 📄 LICENSE                      # MIT License
```

## 🧪 Simple React App - Testing Focus

The `simple-react-app` is a comprehensive React application that demonstrates various testing practices and patterns.

### 🎯 Testing Features

#### **Test Types Covered:**

- **Unit Tests**: Redux slice testing with Jest
- **Component Tests**: React component testing with Testing Library
- **Integration Tests**: API integration testing with mocks
- **Utility Tests**: Pure function testing

#### **Testing Technologies:**

- **Jest**: Test runner and assertion library
- **@testing-library/react**: React component testing utilities
- **@testing-library/jest-dom**: Custom Jest matchers for DOM testing
- **ts-jest**: TypeScript support for Jest

### 🧪 Running Tests

```bash
cd simple-react-app

# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### 📋 Test Examples

#### **1. Redux Slice Testing** (`counterSlice.test.ts`)

```typescript
// Tests Redux Toolkit slice with async thunks
describe("counter reducer", () => {
  it("should handle increment", () => {
    expect(counterReducer({ value: 0, status: "idle" }, increment(5))).toEqual({
      value: 5,
      status: "idle",
    });
  });
});
```

#### **2. Component Testing** (`Message.test.tsx`)

```typescript
// Tests React component interactions
test("changes message on button click", () => {
  render(<Message />);
  fireEvent.click(screen.getByText("Click Me"));
  expect(screen.getByTestId("message")).toHaveTextContent("Button Clicked!");
});
```

#### **3. API Integration Testing** (`DataFetcher.test.tsx`)

```typescript
// Tests API calls with mocking
test("displays data from mocked API call", async () => {
  render(<DataFetcher />);
  await waitFor(() => {
    expect(screen.getByTestId("api-data")).toHaveTextContent("Mocked API Data");
  });
});
```

#### **4. Utility Function Testing** (`math.test.js`)

```javascript
// Tests pure functions
test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});
```

### 🛠️ Testing Setup

The app uses a modern testing stack:

- **Jest Configuration**: `jest.config.js`
- **TypeScript Support**: `ts-jest` for `.ts` and `.tsx` files
- **DOM Testing**: `jest-environment-jsdom`
- **Testing Library**: React component testing utilities

## 🚀 NestJS Onboarding Project

A foundational NestJS learning project demonstrating basic concepts:

- **Authentication & Authorization**: JWT with role-based access
- **Database Integration**: PostgreSQL with TypeORM
- **Queue Processing**: Redis with BullMQ
- **Security**: Rate limiting, CORS, input validation
- **Testing**: Unit and E2E tests
- **Containerization**: Docker setup

**Quick Start:**

```bash
cd onboarding-nestjs
docker-compose up -d
# API available at http://localhost:3000
```

## 🔗 Applied Learning: DuoTime Project

This onboarding project demonstrates the **learning process**. The concepts and practices learned here were directly applied to build a real production application:

### **[DuoTime Backend](https://github.com/quangvinhlee/DuoTime/tree/main/apps/backend)**

DuoTime is the **actual project** where I applied everything learned from this onboarding process:

- **Advanced Authentication**: OAuth, social login, refresh tokens
- **Complex Database Models**: User relationships, activity tracking, notifications
- **Real-time Features**: WebSocket integration, live updates
- **Advanced Security**: Rate limiting, encryption, audit logging
- **Production Features**: Logging, monitoring, health checks
- **Comprehensive Testing**: Full test coverage, integration tests
- **CI/CD Pipeline**: Automated testing and deployment
- **API Documentation**: GraphQL schema, OpenAPI specs
- **Performance Optimization**: Caching, database optimization

**Learning Path**: This onboarding project (practice) → DuoTime Backend (real application)

## 📚 Documentation Collections

### **Initial Tasks** (`docs-initial-tasks/`)

- Company and competitive landscape analysis
- Learning goals and internship time plan
- Agile principles and ceremonies
- Professional development reflections
- Security and privacy guidelines

### **Development Guides** (`docs-guides/`)

- Clean code principles
- Code smells identification
- Unit testing best practices
- CI/CD reflections

### **NestJS Documentation** (`docs-nestjs-tasks/`)

- NestJS architecture and setup
- Authentication with Auth0
- Testing strategies and debugging
- Database integration with TypeORM
- Security implementations

### **Git Knowledge** (`docs-git/`)

- Git workflow and best practices
- Understanding Git internals
- Clean code with Git

### **Development Tools** (`docs-tools/`)

- Docker setup and debugging
- VS Code productivity tips
- AI tools and Chrome extensions
- Terminal knowledge

## 🔧 API Testing with Bruno

The `onboarding-api-bruno/` folder contains Bruno API testing collections for:

- User management (CRUD operations)
- Task management
- Authentication endpoints
- Admin functionality

## 🎯 Learning Objectives

This repository serves as a comprehensive learning platform covering:

### **Frontend Development**

- React with TypeScript
- Redux Toolkit for state management
- Comprehensive testing strategies
- Modern build tools (Vite)

### **Backend Development**

- NestJS framework
- RESTful API design
- Database integration
- Authentication and authorization
- Queue processing

### **DevOps & Tools**

- Docker containerization
- Git version control
- API testing tools
- Development environment setup

### **Professional Skills**

- Agile methodologies
- Clean code practices
- Security awareness
- Documentation writing

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd quangvinhle-intern-repo
   ```

2. **Explore projects**

   - Start with `simple-react-app` for frontend testing
   - Move to `onboarding-nestjs` for backend development
   - Review documentation in `docs-*` folders

3. **Run tests**

   ```bash
   # React app tests
   cd simple-react-app && npm test

   # NestJS tests
   cd onboarding-nestjs && npm test
   ```

## 📖 Contributing

This repository serves as a learning portfolio and documentation of my internship journey. Feel free to explore the code and documentation to understand various development practices and patterns.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Created by**: Quang Vinh Le  
**Purpose**: Internship learning portfolio and documentation  
**Technologies**: React, NestJS, TypeScript, Docker, Testing, and more
