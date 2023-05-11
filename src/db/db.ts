import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Pool } from 'pg';

const pool = new Pool({
  host: '127.0.0.1',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'pokimansdb',
});

export const db = drizzle(pool);

export async function applyMigrations() {
  // this will automatically run needed migrations on the database
  return migrate(db, { migrationsFolder: 'src/db/migrations' });
}
