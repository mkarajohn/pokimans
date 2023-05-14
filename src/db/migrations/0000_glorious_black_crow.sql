CREATE TABLE IF NOT EXISTS "favourites" (
	"id" serial PRIMARY KEY NOT NULL,
	"pokiman_id" text NOT NULL,
	"user_email" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"external_id" text
);

DO $$ BEGIN
 ALTER TABLE "favourites" ADD CONSTRAINT "favourites_user_email_users_email_fk" FOREIGN KEY ("user_email") REFERENCES "users"("email") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE UNIQUE INDEX IF NOT EXISTS "unique_pokiman_user_email_combination" ON "favourites" ("pokiman_id","user_email");
CREATE UNIQUE INDEX IF NOT EXISTS "unique_idx" ON "users" ("email");