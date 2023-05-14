import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Box from '@/components/Box';
import AddToFavourites from '@/components/client/AddToFavourites';
import BackLink from '@/components/client/BackLink';
import { getServerSession } from 'next-auth/next';

async function PokidexActions({ id }: { id: number }) {
  const session = await getServerSession(authOptions);

  return (
    <Box padded>
      {session ? <AddToFavourites id={id} session={session} /> : null}
      <BackLink />
    </Box>
  );
}

export default PokidexActions;
