# 📝 Reflection: Running PostgreSQL in Docker

## What are the benefits of running PostgreSQL in a Docker container?

- Provides a consistent, isolated environment for the database across all development machines.
- No need to install PostgreSQL directly on your host OS—just run the container.
- Easy to start, stop, and reset the database for testing or development.
- Simplifies onboarding for new developers and ensures everyone uses the same database version and configuration.

## How do Docker volumes help persist PostgreSQL data?

- Docker volumes map a directory on the host to the container's data directory (e.g., `/var/lib/postgresql/data`).
- This ensures that database data is not lost when the container stops, restarts, or is removed.
- Data persists independently of the container lifecycle, making it safe to upgrade or rebuild containers without losing information.

## How can you connect to a running PostgreSQL container?

- Use a database client like **pgAdmin**, **DBeaver**, or the command-line tool **psql**.
- Connect using the host (`localhost` or the Docker network name), port (default `5432`), and credentials set in `docker-compose.yml` (e.g., `POSTGRES_USER`, `POSTGRES_PASSWORD`).
- Example connection string: `postgresql://postgres:postgres@localhost:5432/postgres`
- You can also use `docker exec -it <container_name> psql -U <user> <db>` to connect directly inside the container.
