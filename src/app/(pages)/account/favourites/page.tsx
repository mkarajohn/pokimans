import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import PokidexEntry from '@/components/PokidexEntry';
import { sanitizeForURL } from '@/utils/sanitise-for-url';
import { getServerSession } from 'next-auth/next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/signin?callbackUrl=/account');
  }

  try {
    // hack since getServerSession is not working properly
    const resp = await fetch(
      `${process.env.HOST}/api/user/favourites?email=${session.user?.email}`
    );
    const { results } = await resp.json();

    return (
      <div className="flex flex-col gap-8">
        <h2 className="text-center text-2xl">Your favourite Pokimans</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {results.map(({ pokimanID }: { pokimanID: string }) => {
            return (
              <Link
                className="with-selection-arrow"
                key={pokimanID}
                href={{
                  pathname: `/entry/${sanitizeForURL(pokimanID)}`,
                }}
              >
                {/* @ts-expect-error Server Component */}
                <PokidexEntry id={pokimanID.toString()} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  } catch (err) {
    throw err;
  }
}

export default Page;
