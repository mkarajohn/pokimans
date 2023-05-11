ALTER TABLE "users" ADD COLUMN "password" text NOT NULL;
ALTER TABLE "users" DROP COLUMN IF EXISTS "createdAt";