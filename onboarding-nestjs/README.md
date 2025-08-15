# NestJS Onboarding Project

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## 🎯 Project Purpose

This is a **NestJS learning and onboarding project** designed to demonstrate essential NestJS concepts and best practices. It serves as a foundational resource for developers learning NestJS framework.

**Note**: This project contains basic implementations for learning purposes. Many advanced features, production-ready implementations, and comprehensive task solutions are implemented in the main project: **[DuoTime Backend](https://github.com/quangvinhlee/DuoTime/tree/main/apps/backend)**

### What You'll Learn (Basic Level)

- **Authentication & Authorization**: JWT-based auth with role-based access control
- **Database Integration**: PostgreSQL with TypeORM
- **Queue Processing**: Redis with BullMQ for background jobs
- **Security**: HTTP headers, rate limiting, CORS, input validation
- **Testing**: Unit tests, E2E tests, and test coverage
- **Containerization**: Docker and docker-compose setup
- **Modern HTTP Server**: Fastify integration
- **API Design**: RESTful endpoints with proper validation

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd onboarding-nestjs

# Install dependencies
npm install
```

### Running with Docker (Recommended)

```bash
# Start all services (app, PostgreSQL, Redis)
docker-compose up -d

# The API will be available at http://localhost:3000
```

### Running Locally

```bash
# Start PostgreSQL and Redis (if not using Docker)
# You'll need to have PostgreSQL and Redis running locally

# Install dependencies
npm install

# Start the development server
npm run start:dev
```

## 🧪 Testing

### Running Tests

```bash
# Unit tests
npm run test

# Unit tests in watch mode
npm run test:watch

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov

# Debug tests
npm run test:debug
```

### Test Structure

- **Unit Tests**: Located in `*.spec.ts` files alongside source code
- **E2E Tests**: Located in `test/` directory
- **Coverage**: Generated in `coverage/` directory

## 📚 API Documentation

### Authentication

#### Login

```bash
POST /auth/login
Content-Type: application/json

{
  "username": "test",
  "password": "test"
}
```

**Response:**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Available Users

- **Admin User**: `username: test, password: test` (has admin role)
- **Regular User**: `username: user, password: user` (has user role)

### Tasks API

All task endpoints require authentication. Include the JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

#### Get All Tasks

```bash
GET /tasks
Authorization: Bearer <jwt-token>
```

#### Get Task by ID

```bash
GET /tasks/:id
Authorization: Bearer <jwt-token>
```

#### Create Task

```bash
POST /tasks
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "title": "New Task",
  "description": "Task description"
}
```

#### Update Task

```bash
PUT /tasks/:id
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "title": "Updated Task",
  "description": "Updated description"
}
```

#### Delete Task

```bash
DELETE /tasks/:id
Authorization: Bearer <jwt-token>
```

#### Send Email (Rate Limited)

```bash
POST /tasks/email
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "email": "user@example.com"
}
```

### User Management

#### Get All Users

```bash
GET /users
Authorization: Bearer <jwt-token>
```

#### Create User

```bash
POST /users
Content-Type: application/json

{
  "username": "newuser",
  "email": "newuser@example.com",
  "password": "password123"
}
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3000

# Database Configuration
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres

# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379

# Security Configuration
RATE_LIMIT_MAX=10
RATE_LIMIT_TIME_WINDOW=60000
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001

# JWT Configuration
JWT_SECRET=your-secret-key
```

## 🏗️ Project Structure

```
src/
├── auth/                    # Authentication & authorization
│   ├── guards/             # JWT and role guards
│   ├── decorators/         # Custom decorators
│   ├── auth.controller.ts  # Auth endpoints
│   ├── auth.service.ts     # Auth business logic
│   └── auth.module.ts      # Auth module
├── tasks/                  # Task management
│   ├── tasks.controller.ts # Task endpoints
│   ├── tasks.service.ts    # Task business logic
│   ├── tasks.processor.ts  # Queue processor
│   ├── task.interface.ts   # Task type definitions
│   └── tasks.module.ts     # Tasks module
├── user/                   # User management
│   ├── dto/               # Data transfer objects
│   ├── user.entity.ts     # User database entity
│   ├── user.controller.ts # User endpoints
│   ├── user.service.ts    # User business logic
│   └── user.module.ts     # User module
├── admin/                  # Admin-specific endpoints
├── test/                   # Test module
├── app.module.ts          # Root module
├── main.ts                # Application bootstrap
└── data-source.ts         # Database configuration
```

## 🔒 Security Features

- **Helmet**: HTTP security headers
- **Rate Limiting**: API rate limiting with Fastify
- **CORS**: Configurable CORS policy
- **JWT Authentication**: Token-based authentication
- **Role-Based Access Control**: User roles and permissions
- **Input Validation**: Request validation with class-validator
- **Throttling**: Request throttling protection

## 🐳 Docker

### Services

- **App**: NestJS application (port 3000)
- **PostgreSQL**: Database (port 5432)
- **Redis**: Cache and queue (port 6379)

### Commands

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Rebuild and start
docker-compose up --build -d
```

## 📝 Development

### Available Scripts

```bash
# Development
npm run start:dev      # Start in watch mode
npm run start:debug    # Start with debugger

# Production
npm run build          # Build the application
npm run start:prod     # Start production server

# Code Quality
npm run lint           # Run ESLint
npm run format         # Format code with Prettier

# Testing
npm run test           # Run unit tests
npm run test:watch     # Run tests in watch mode
npm run test:e2e       # Run E2E tests
npm run test:cov       # Run tests with coverage
```

### Database Migrations

The project uses TypeORM with `synchronize: true` for development. For production, you should:

1. Disable synchronize
2. Use migrations
3. Set up proper database backup strategies

## 🚀 Deployment

### Production Considerations

1. **Environment Variables**: Set proper production environment variables
2. **Database**: Use production PostgreSQL instance
3. **Redis**: Use production Redis instance
4. **Security**: Change default secrets and passwords
5. **SSL/TLS**: Enable HTTPS
6. **Monitoring**: Set up application monitoring
7. **Logging**: Configure proper logging

### Docker Production Build

```bash
# Build production image
docker build -t onboarding-nestjs:prod .

# Run with production environment
docker run -p 3000:3000 --env-file .env.prod onboarding-nestjs:prod
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

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
- **Mobile Integration**: Push notifications, mobile-specific APIs

**Learning Path**: This onboarding project (practice) → DuoTime Backend (real application)

## 📖 Learning Resources

- [NestJS Official Documentation](https://docs.nestjs.com/)
- [TypeORM Documentation](https://typeorm.io/)
- [Fastify Documentation](https://www.fastify.io/docs/)
- [BullMQ Documentation](https://docs.bullmq.io/)

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

This project was created as part of the NestJS onboarding process to demonstrate best practices and common patterns in NestJS development.
