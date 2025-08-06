# Using NestJS CLI for Scaffolding

## 🎯 Goal

Learn how to use the NestJS CLI to scaffold different parts of the application such as controllers, services, and modules.

## ✅ Why is this important?

Focus Bear uses the NestJS CLI for rapid development and to ensure consistency in the codebase. Mastering the CLI will help you work faster and maintain project structure.

---

## ✅ Tasks

### 1. Research how to use the NestJS CLI

- The NestJS CLI (`nest`) is a tool for generating and managing NestJS application components.
- Install globally:  
  `npm i -g @nestjs/cli`

### 2. Generate a new controller, service, and module using the CLI

- Generate a controller:  
  `nest generate controller <name>`
- Generate a service:  
  `nest generate service <name>`
- Generate a module:  
  `nest generate module <name>`

### 3. Explore additional CLI commands

- `nest generate <schematic>` (alias: `nest g`): Scaffold files (controller, service, module, etc.)
- `nest build`: Compile the project.
- `nest new <project-name>`: Create a new NestJS project.

### 4. Understand how the CLI helps with the modular architecture of NestJS

- The CLI generates modules, which encapsulate related functionality, supporting a scalable and maintainable architecture.

---

## ✅ Reflection (nestjs-cli.md)

- **How does the NestJS CLI help streamline development?**  
  Automates file creation, reduces manual setup, and enforces best practices.

- **What is the purpose of nest generate?**  
  Quickly scaffolds new components (controllers, services, modules, etc.) with boilerplate code.

- **How does using the CLI ensure consistency across the codebase?**  
  All generated files follow the same structure and naming conventions, making the codebase uniform.

- **What types of files and templates does the CLI create by default?**  
  Controller, service, module, gateway, interceptor, middleware, filter, and more, each with standard template code.

---

Let me know if you need example outputs or further details!
