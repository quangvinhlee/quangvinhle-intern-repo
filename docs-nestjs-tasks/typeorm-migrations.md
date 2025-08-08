## ✅ Reflection

- **What is the purpose of database migrations in TypeORM?**
  - To safely and version-control schema changes, ensuring all environments are consistent.
- **How do migrations differ from seeding?**
  - Migrations change the schema; seeding inserts initial or test data.
- **Why is it important to version-control database schema changes?**
  - It prevents conflicts, supports collaboration, and allows rollback if issues occur.
- **How can you roll back a migration if an issue occurs?**
  - Use `npx typeorm migration:revert` to undo the last migration.

---
