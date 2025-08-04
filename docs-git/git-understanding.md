## ✅ Reflections

### 1. Why is pushing directly to main problematic?

Pushing directly to the `main` branch can lead to several issues:

- **No peer review**: Code may be merged without anyone checking for bugs or improvements.
- **Broken code**: Direct pushes can introduce bugs that affect the entire project immediately.
- **No version control checkpoints**: It becomes difficult to track who made what change and why.
- **Reduced collaboration**: Skips the collaborative process where team members contribute feedback.

In short, it risks the stability and quality of the main codebase.

---

### 2. How do branches help with reviewing code?

Branches create a **safe workspace** to isolate changes. They allow developers to:

- Work on features or fixes independently
- Create Pull Requests for review before merging into `main`
- Run tests and CI pipelines on the branch before merging
- Make collaborative updates during code review without affecting the production code

This ensures quality, consistency, and teamwork.

---

### 3. What happens if two people edit the same file on different branches?

If two developers edit the same file on different branches:

- Git will detect a **merge conflict** when the branches are merged
- The conflict must be resolved manually by choosing which changes to keep or combining both
- Tools like VS Code or GitHub Desktop highlight conflicts and assist with resolution

Branching isolates work, but communication and frequent pulls from the main branch help avoid conflicts.

---
