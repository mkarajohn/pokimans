import { db } from '@/db/db';
import { usersTable } from '@/db/schema/users';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const req = await request.json();

  const insertedUser = await db.insert(usersTable).values(req).returning({
    id: usersTable.id,
    email: usersTable.email,
  });

  return NextResponse.json({ status: 200, user: insertedUser });
}
