# Reflection: Using Bruno for NestJS API Testing

## 1. How does Bruno help with API testing compared to Postman or cURL?

Bruno provides a developer-friendly, lightweight alternative to Postman and a more intuitive interface than cURL. Unlike Postman, Bruno stores API requests as plain text files in a local folder, making them easy to version control with Git. It’s also offline-first and minimal in design, helping reduce distractions and bloated features. Compared to cURL, Bruno doesn't require memorizing syntax and makes it easier to organize, run, and document API calls.

## 2. How do you send an authenticated request in Bruno?

To send an authenticated request in Bruno:

- Open the request file in the app
- Go to the **Headers** section
- Add a new header with:
  - **Key**: `Authorization`
  - **Value**: `Bearer <your_token_here>`
- Then click **Send**

This attaches the bearer token to the request for endpoints that require authentication.

## 3. What are the advantages of organizing API requests in collections?

Organizing requests in collections helps developers:

- Group related endpoints (e.g., Auth, Users, Admin)
- Share a consistent testing setup across team members
- Store documentation for how endpoints are used
- Quickly rerun requests while debugging or during development

Since Bruno collections are just folders and files, they’re easy to track in version control and review in pull requests.

## 4. How would you structure a Bruno collection for a NestJS backend project?

A good structure would mirror the modules in the NestJS app:

```
nestjs-api-tests/
├── auth/
│ ├── login.bru
│ ├── signup.bru
├── users/
│ ├── get-profile.bru
│ ├── update-profile.bru
├── health/
│ └── health-check.bru
├── reminders/
│ ├── create-reminder.bru
│ ├── get-reminders.bru
```

This makes it easy to navigate, maintain, and extend the test collection as the app grows.
