# Reflection: typeorm-encrypted & Data Security

## Why does Focus Bear double encrypt sensitive data instead of relying on database encryption alone?

Focus Bear double encrypts sensitive data to provide defense in depth. Application-level encryption ensures that even if the database is compromised (e.g., via a backup leak or direct DB access), the data remains protected. Database encryption (like TDE) only secures data at rest and is transparent to users with DB access, while app-level encryption restricts access to those with the encryption key.

## How does typeorm-encrypted integrate with TypeORM entities?

`typeorm-encrypted` provides a transformer that can be attached to entity columns. When saving or retrieving data, the transformer automatically encrypts and decrypts the column value using the specified algorithm and key. This is done by passing an `EncryptionTransformer` instance to the column's `transformer` property in the entity definition.

## What are the best practices for securely managing encryption keys?

- Store keys outside of source code (e.g., environment variables, secret managers).
- Rotate keys periodically and have a process for key revocation.
- Restrict access to keys using strict permissions.
- Never log or expose keys in error messages.
- Use strong, randomly generated keys (e.g., via `openssl rand`).

## What are the trade-offs between encrypting at the database level vs. the application level?

- **Database-level encryption** (e.g., TDE):
  - Transparent to applications.
  - Protects data at rest (disk, backups).
  - Does not protect against privileged DB users or app-level breaches.
- **Application-level encryption**:
  - Protects data before it reaches the database.
  - Data is unreadable even to DB admins without the key.
  - Requires key management and changes to application logic.
  - May limit querying/filtering on encrypted fields.

Best practice is to use both for layered security.
