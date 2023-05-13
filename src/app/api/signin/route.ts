import { db } from '@/db/db';
import { usersTable } from '@/db/schema/users';
import { and, eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const req: { email: string; password: string } = await request.json();

  try {
    const user = await db
      .select()
      .from(usersTable)
      .where(and(eq(usersTable.email, req.email), eq(usersTable.password, req.password)));

    return NextResponse.json(user[0]);
  } catch (err) {
    return null;
  }
}
