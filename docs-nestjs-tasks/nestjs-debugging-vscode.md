## 🔍 Reflections

### ❓ How do breakpoints help in debugging compared to console logs?

Breakpoints allow me to **pause code execution at exactly the right line** and inspect variables, the call stack, and even navigate back and forth through the flow. Unlike `console.log`, which only shows what I pre-print, breakpoints give me **live access to everything** from request payloads to local variables, return values, and exception contexts. This makes it easier to understand logic errors or unexpected behavior, especially when dealing with complex conditions or multiple function calls.

---

### ❓ What is the purpose of `launch.json`, and how does it configure debugging?

The `launch.json` file tells VS Code **how to run my app in debug mode**. For NestJS, I configured it to:

- Run the app using `ts-node` so it can debug TypeScript directly
- Attach a debugger to Node.js using `inspect`
- Define environment variables or set working directories

Here’s a basic example I used:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug NestJS App",
      "runtimeArgs": ["-r", "ts-node/register"],
      "args": ["src/main.ts"],
      "cwd": "${workspaceFolder}",
      "protocol": "inspector",
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}
```
