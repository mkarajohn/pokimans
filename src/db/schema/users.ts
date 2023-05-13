import { InferModel } from 'drizzle-orm';
import { pgTable, serial, text, uniqueIndex } from 'drizzle-orm/pg-core';

export const usersTable = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
    externalID: text('external_id'),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(users.email),
    };
  }
);

export type User = InferModel<typeof usersTable>;
export type NewUser = InferModel<typeof usersTable, 'insert'>;
