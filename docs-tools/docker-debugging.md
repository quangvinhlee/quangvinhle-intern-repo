# Debugging & Managing Docker Containers

## Reflection

### 1. How can you check logs from a running container?

Use:

```
docker logs <container_name_or_id>
```

This displays the output (stdout/stderr) from the container, helping you monitor and debug your application.

### 2. What is the difference between docker exec and docker attach?

- **docker exec**: Runs a new command in a running container (e.g., `docker exec -it <container> bash`). It opens a new shell session without affecting the main process.
- **docker attach**: Connects your terminal to the main process of the container. Exiting can stop the main process and the container itself.

**Summary:** Use `exec` for safe, interactive debugging. Use `attach` only if you need to interact with the main process directly.

### 3. How do you restart a container without losing data?

If the data is stored in Docker volumes or bind mounts, we can safely restart a container using:

```
docker restart <container_name_or_id>
```

Or with Docker Compose:

```
docker-compose restart <service>
```

Data in volumes/mounts persists across restarts and even container removal, as long as the volume is not deleted.

### 4. How can you troubleshoot database connection issues inside a containerized NestJS app?

- **Check logs:** `docker logs <nestjs_container>` and `docker logs <db_container>` for errors.
- **Enter the container:** `docker exec -it <nestjs_container> bash` and try connecting to the database using tools like `psql` or `mysql`.
- **Inspect environment variables:** Ensure DB connection strings are set correctly (`docker inspect <container>` or check your `.env` files).
- **Check network:** Make sure both containers are on the same Docker network and the correct ports are exposed.
- **Restart services:** Sometimes, restarting the database or app container can resolve transient issues.
