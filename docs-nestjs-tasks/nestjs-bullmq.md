# 📌 Reflection: Background Jobs with BullMQ & Redis in NestJS

## Why is BullMQ used instead of handling tasks directly in API requests?

BullMQ allows long-running or resource-intensive tasks (like sending emails or processing analytics) to be offloaded from the main API request/response cycle. This ensures the API stays responsive and fast, improving performance and user experience. Instead of waiting for the task to complete, the API can return immediately while the job runs in the background.

## How does Redis help manage job queues in BullMQ?

Redis acts as the in-memory data store that powers BullMQ's queue system. It keeps track of pending, active, completed, and failed jobs. Redis ensures the state of each job is persisted and can be queried or retried. It also provides pub/sub capabilities for workers to listen for job events in real-time.

## What happens if a job fails? How can failed jobs be retried?

If a job fails, BullMQ tracks the failure and stores it in the failed job queue. By default, BullMQ supports automatic retries, you can configure retry attempts and delay policies. Developers can also set up custom error handling, alerts, or fallback logic for robust failure recovery.

## How does Focus Bear use BullMQ for background tasks?

Focus Bear uses BullMQ to manage non-blocking operations like:

- Sending push or email notifications
- Syncing data with external services
- Running analytics or background computations
- Scheduling reminders or time-based tasks

These tasks are decoupled from the main API logic, improving system reliability and scalability.
