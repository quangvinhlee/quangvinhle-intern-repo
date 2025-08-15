import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres', // or your database type
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
});
