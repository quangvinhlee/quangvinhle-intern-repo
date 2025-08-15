# ISSUE #71

# CI/CD Reflection

## What is the purpose of CI/CD?

CI/CD stands for Continuous Integration and Continuous Delivery/Deployment.  
Its purpose is to automate building, testing, and deploying code changes, ensuring software is always in a deployable state and reducing manual errors.

## How does automating style checks improve project quality?

Automated style checks (like Markdown linting and spell checks) catch formatting and spelling issues early, keep documentation consistent, and help maintain code quality.  
They save time for reviewers and prevent small mistakes from reaching production.

## What are some challenges with enforcing checks in CI/CD?

- Initial setup and configuration can be complex.
- False positives or overly strict rules may block valid changes.
- Developers may need to adjust workflows to pass checks.
- Keeping CI/CD fast and reliable as the project grows.

## How do CI/CD pipelines differ between small projects and large teams?

- Small projects may use simple workflows with basic checks and manual deployments.
- Large teams require more complex pipelines: multiple environments, parallel jobs, security scans, and automated deployments.
- Large teams benefit more from automation to coordinate many contributors and maintain quality at scale.

---
