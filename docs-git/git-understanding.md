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

This is from issue #54

# Git: Staging vs Committing

## What is the difference between staging and committing?

- **Staging** (using `git add <file>`): Prepares changes to be included in the next commit. Staged files are tracked but not yet part of the repository history.
- **Committing** (using `git commit`): Records the staged changes in the repository history, creating a snapshot that can be referenced or reverted.

## Why does Git separate these two steps?

- It allows you to review and group changes before making a permanent record. You can stage multiple files, review them, and commit them together or separately, giving you control over your commit history.

## When would you want to stage changes without committing?

- When you want to:
  - Review changes before committing.
  - Group related changes into a single commit.
  - Stage only some changes in a file (using `git add -p`).
  - Prepare changes for a later commit, but not ready to finalize.

## Experiment Summary

- Modified a file, staged it (`git add <file>`), checked status (`git status`), unstaged it (`git reset HEAD <file>`), then committed and observed the difference.
- Staged changes are not part of history until committed.

---

//issue #55

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

// issue #56

## Merge Conflicts & Conflict Resolution

### What caused the conflict?

- The conflict was caused by editing the same lines in a file on two different branches (main and a feature branch). When merging, Git could not automatically decide which changes to keep.

### How did you resolve it?

- Used the Git desktop client (VS Code or GitHub Desktop) to view the conflict. The conflicting file showed both sets of changes, marked with conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`). I manually chose which changes to keep, removed the markers, and staged the resolved file. Then I committed the resolution.

### What did you learn?

- Merge conflicts happen when changes overlap in the same file and Git cannot auto-merge. Resolving conflicts requires careful review to ensure no work is lost. Tools like VS Code make it easier to see and resolve conflicts. Good communication and frequent pulls from main help avoid conflicts.

---

//issue #57

## Advanced Git Commands & Reflections

### git checkout main -- <file>

- **What it does:** Restores a specific file from the `main` branch, discarding local changes to that file but leaving other changes untouched.
- **When to use:** If you want to undo changes to a file and revert it to its state on `main` without affecting other work.
- **Surprise:** It's a quick way to fix accidental edits to a file without resetting the whole repo.

### git cherry-pick <commit>

- **What it does:** Applies a specific commit from another branch to your current branch, without merging the whole branch.
- **When to use:** If you need a bug fix or feature from another branch but don't want all its changes. Useful for hotfixes or selective updates.
- **Surprise:** Cherry-picking can create conflicts if the codebase has diverged, so review carefully.

### git log

- **What it does:** Shows the commit history, including messages, authors, and timestamps.
- **When to use:** To track changes, review history, or find specific commits. Essential for audits and debugging.
- **Surprise:** You can use options like `git log --oneline` or `git log --graph` for more readable output.

### git blame <file>

- **What it does:** Shows who last modified each line in a file and when.
- **When to use:** To find out who introduced a bug, understand code history, or ask questions about specific changes.
- **Surprise:** It's very useful for accountability and understanding the evolution of critical files.

---

//issue #58

## Debugging with git bisect

### What does git bisect do?

- `git bisect` is a tool that helps you find the exact commit that introduced a bug by performing a binary search through your commit history. You mark a known good commit and a known bad commit, and Git checks out commits in between so you can test and narrow down the culprit.

### When would you use it in a real-world debugging situation?

- Use `git bisect` when you know a bug exists but aren't sure which commit introduced it, especially in large projects with many commits. It's ideal for tracking down regressions or subtle issues that aren't immediately obvious.

### How does it compare to manually reviewing commits?

- `git bisect` is much faster and more systematic than manually checking each commit. Instead of reviewing every commit one by one, it uses binary search to minimize the number of tests needed, saving time and effort.

---

_Committed and pushed changes to GitHub._
