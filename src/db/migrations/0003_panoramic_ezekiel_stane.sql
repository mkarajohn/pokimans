ALTER TABLE "users" ALTER COLUMN "external_id" SET DATA TYPE text;
ALTER TABLE "users" ALTER COLUMN "external_id" DROP NOT NULL;