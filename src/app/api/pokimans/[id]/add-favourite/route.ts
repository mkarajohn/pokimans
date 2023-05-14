import { db } from '@/db/db';
import { favouritesTable } from '@/db/schema/favourites';
import { NextResponse } from 'next/server';

export async function POST(request: Request, context: { params: { id: string } }) {
  const req = await request.json();

  try {
    const insertedFavourite = await db
      .insert(favouritesTable)
      .values({ userEmail: req.email, pokimanID: context.params.id })
      .returning({
        pokiman: favouritesTable.pokimanID,
      });

    return NextResponse.json({ status: 200, pokiman: insertedFavourite });
  } catch (err: unknown) {
    // @ts-ignore
    if (err?.constraint === 'unique_pokiman_user_email_combination') {
      return NextResponse.json({ error: 'Already in favourites' });
    }

    return null;
  }
}
