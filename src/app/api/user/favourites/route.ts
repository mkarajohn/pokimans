import { db } from '@/db/db';
import { favouritesTable } from '@/db/schema/favourites';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function GET(request: Request, context: { params: { id: string } }) {
  // console.log({ request });
  // const session = await getServerSession(authOptions);

  // if (!session?.user?.email) {
  //   console.log('NO SESSION');
  //   console.log({ session });
  //
  //   return new NextResponse('Unauthorized access detected', {
  //     status: 401,
  //   });
  // }

  // hack since getServerSession is not working properly
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email') as string;

  try {
    const favourites = await db
      .select()
      .from(favouritesTable)
      // .where(eq(favouritesTable.userEmail, session.user.email));
      .where(eq(favouritesTable.userEmail, email));

    return NextResponse.json({ results: favourites });
  } catch (err) {
    return new NextResponse('Something went wrong', {
      status: 500,
    });
  }
}
