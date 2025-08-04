# 📌 Reflection: Setting Up a NestJS Project

## What files are included in a default NestJS project?

A default NestJS project includes:

- `main.ts`: Entry point that bootstraps the app
- `app.module.ts`: Root module
- `app.controller.ts`: Example controller
- `app.service.ts`: Example service
- `tsconfig.json`: TypeScript config
- `package.json`: Project dependencies and scripts
- `test/`: Example test files
- `node_modules/`: Installed dependencies

## How does main.ts bootstrap a NestJS application?

`main.ts` uses `NestFactory.create(AppModule)` to create the app, sets up global middleware (like validation or CORS), and calls `app.listen(port)` to start the server. This file is the starting point for the application lifecycle.

## What is the role of AppModule in the project?

`AppModule` is the root module that organizes the app's structure. It imports other modules, declares controllers and providers, and acts as the main configuration hub for dependency injection and feature organization.

## How does NestJS structure help with scalability?

NestJS uses a modular architecture, separating features into modules, controllers, and services. This makes it easy to add new features, maintain code, and scale the app as the team or requirements grow. Each module can be developed and tested independently, supporting large and complex projects.
