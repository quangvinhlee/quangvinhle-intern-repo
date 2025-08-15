# ISSUE #70

# Identifying & Fixing Code Smells

## Common Code Smells & Refactoring Examples

### 1. Magic Numbers & Strings

**Smelly:**

```typescript
function calculateDiscount(price: number) {
  return price * 0.15; // 0.15 is a magic number
}
```

**Refactored:**

```typescript
const DISCOUNT_RATE = 0.15;
function calculateDiscount(price: number) {
  return price * DISCOUNT_RATE;
}
```

---

### 2. Long Functions

**Smelly:**

```typescript
function processOrder(order) {
  // ...lots of logic for validation, payment, shipping, notifications...
}
```

**Refactored:**

```typescript
function processOrder(order) {
  validateOrder(order);
  processPayment(order);
  shipOrder(order);
  notifyCustomer(order);
}
```

---

### 3. Duplicate Code

**Smelly:**

```typescript
function getUserFullName(user) {
  return user.firstName + " " + user.lastName;
}
function getAdminFullName(admin) {
  return admin.firstName + " " + admin.lastName;
}
```

**Refactored:**

```typescript
function getFullName(person) {
  return person.firstName + " " + person.lastName;
}
```

---

### 4. Large Classes (God Objects)

**Smelly:**

```typescript
class UserManager {
  // Handles user creation, authentication, profile, notifications, reporting, etc.
}
```

**Refactored:**

```typescript
class UserService {
  /* user creation, profile */
}
class AuthService {
  /* authentication */
}
class NotificationService {
  /* notifications */
}
class ReportService {
  /* reporting */
}
```

---

### 5. Deeply Nested Conditionals

**Smelly:**

```typescript
if (a) {
  if (b) {
    if (c) {
      // do something
    }
  }
}
```

**Refactored:**

```typescript
if (!a || !b || !c) return;
// do something
```

---

### 6. Commented-Out Code

**Smelly:**

```typescript
// function oldLogic() { ... }
// let unused = true;
```

**Refactored:**

- Remove commented-out code from the codebase.

---

### 7. Inconsistent Naming

**Smelly:**

```typescript
let x = 5;
let userName = "Alice";
let usr = "Bob";
```

**Refactored:**

```typescript
let userCount = 5;
let userName = "Alice";
let anotherUserName = "Bob";
```

---

## Reflection

### What code smells did you find in your code?

- Magic numbers, long functions, duplicate code, large classes, deeply nested conditionals, commented-out code, and inconsistent naming.

### How did refactoring improve the readability and maintainability of the code?

- Refactoring made the code easier to read, understand, and update. Each function and variable now has a clear purpose, and logic is separated into manageable pieces.

### How can avoiding code smells make future debugging easier?

- Clean code is easier to test and debug. Avoiding code smells reduces confusion, prevents bugs, and makes it faster to find and fix issues in the future.

---
