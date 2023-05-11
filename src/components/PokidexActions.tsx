import Box from '@/components/Box';
import AddToFavourites from '@/components/client/AddToFavourites';
import BackLink from '@/components/client/BackLink';

function PokidexActions() {
  return (
    <Box padded>
      {/* @ts-expect-error Server Component */}
      <AddToFavourites />
      <BackLink />
    </Box>
  );
}

export default PokidexActions;
