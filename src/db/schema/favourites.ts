import { InferModel } from 'drizzle-orm';
import { pgTable, serial, text, uniqueIndex } from 'drizzle-orm/pg-core';
import { usersTable } from './users';

export const favouritesTable = pgTable(
  'favourites',
  {
    id: serial('id').primaryKey(),
    pokimanID: text('pokiman_id').notNull(),
    userEmail: text('user_email')
      .references(() => usersTable.email)
      .notNull(),
  },
  (favourites) => {
    return {
      unique_pokiman_user_id_combination: uniqueIndex('unique_pokiman_user_email_combination').on(
        favourites.pokimanID,
        favourites.userEmail
      ),
    };
  }
);

export type User = InferModel<typeof favouritesTable>;
export type NewUser = InferModel<typeof favouritesTable, 'insert'>;
