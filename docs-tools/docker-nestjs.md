# Reflection: Dockerizing a NestJS Application

## How does a Dockerfile define a containerized NestJS application?

A Dockerfile provides step-by-step instructions to build a container image for a NestJS app. It specifies the base image (like Node.js), copies the source code, installs dependencies, builds the app, and defines how the app should run. This ensures the application runs in a consistent environment, regardless of the host machine.

## What is the purpose of a multi-stage build in Docker?

A multi-stage build allows you to use multiple `FROM` statements in a Dockerfile. The first stage installs dependencies and builds the app, while the final stage copies only the necessary build artifacts into a clean, minimal image. This results in smaller, more secure, and production-ready images by excluding development dependencies and build tools.

## How does Docker Compose simplify running multiple services together?

Docker Compose uses a `docker-compose.yml` file to define and manage multi-container applications. It allows you to start, stop, and configure services (like NestJS and PostgreSQL) with a single command. Compose handles networking, environment variables, and service dependencies, making local development and testing much easier.

## How can you expose API logs and debug a running container?

You can view logs from a running container using `docker logs <container_name>` or `docker-compose logs`. For real-time logs, use `docker-compose logs -f`. To debug, you can attach a shell to the container with `docker exec -it <container_name> sh` (or `bash`), inspect environment variables, and check running processes. Exposing ports in the Dockerfile and `docker-compose.yml` allows you to connect debuggers or view the API in your browser.
