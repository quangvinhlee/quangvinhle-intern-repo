## 📝 Reflection

### 1. How does Docker differ from a virtual machine?

- **Docker containers** are lightweight, sharing the host OS kernel, while virtual machines (VMs) include a full guest OS with their own kernel.
- Containers start much faster and use fewer resources than VMs.
- Docker isolates applications and their dependencies at the process level, whereas VMs provide full hardware virtualization.
- This makes Docker more efficient and portable across environments.

---

### 2. Why is containerization useful for a backend like Focus Bear’s?

- Ensures that the application runs consistently regardless of the environment (development, staging, production).
- Simplifies setup by packaging all dependencies inside containers.
- Enables easy scaling and deployment across different infrastructure.
- Helps isolate services in microservice architectures, improving reliability and maintainability.

---

### 3. How do containers help with dependency management?

- Containers package the application together with its exact runtime environment, libraries, and dependencies.
- This avoids "it works on my machine" issues caused by differences in system setups.
- Developers don’t need to install or configure dependencies locally, they run inside the container.
- Ensures consistent behavior across team members and deployment targets.

---

### 4. What are the potential downsides of using Docker?

- Learning curve for setting up and managing containers effectively.
- Containers add complexity to debugging, especially for beginners.
- Performance overhead compared to running directly on the host OS (though typically small).
- Managing persistent storage and networking between containers requires additional configuration.
- Misconfigured containers or images can lead to security risks.

---
