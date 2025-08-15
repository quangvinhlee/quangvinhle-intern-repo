import 'dotenv/config';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';

const key = process.env.ENCRYPTION_KEY
  ? Buffer.from(process.env.ENCRYPTION_KEY, 'base64').toString('hex')
  : '';
const iv = process.env.ENCRYPTION_IV
  ? Buffer.from(process.env.ENCRYPTION_IV, 'base64').toString('hex')
  : '';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({
    type: 'varchar',
    transformer: new EncryptionTransformer({
      key,
      algorithm: 'aes-256-cbc',
      ivLength: 16,
      iv,
    }),
  })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  profilePicture?: string;
}
