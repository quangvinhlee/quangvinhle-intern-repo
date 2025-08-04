## 📝 Reflection

### 1. What is the difference between `docker run` and `docker-compose up`?

- `docker run` is a command used to start a single container from an image. It requires manual specification of ports, volumes, environment variables, and networking for each container.
- `docker-compose up` uses a `docker-compose.yml` file to start and manage multiple related containers and their configurations together, simplifying orchestration of multi-container applications.

---

### 2. How does Docker Compose help when working with multiple services?

- It allows defining all services, networks, and volumes in a single YAML file.
- Enables starting, stopping, and managing multiple containers as a single application stack.
- Simplifies configuration sharing and environment consistency.
- Supports service dependencies, making sure containers start in the right order.

---

### 3. What commands can you use to check logs from a running container?

- `docker logs <container_id or name>` View the logs of a specific container.
- `docker-compose logs` View logs for all services defined in a Compose file.
- You can also use `docker-compose logs -f` or `docker logs -f <container>` to follow logs in real-time.

---

### 4. What happens when you restart a container? Does data persist?

- By default, restarting a container restarts the running instance but **does not persist data** stored inside the container’s writable layer.
- To persist data across restarts, volumes or bind mounts must be used to store data outside the container filesystem.
- Docker volumes ensure database files, configurations, and other important data remain intact even if the container is removed or recreated.

---
