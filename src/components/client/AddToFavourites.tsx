import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';

async function AddToFavourites() {
  const session = await getServerSession(authOptions);

  return session ? (
    <button className="action" type="button">
      Add to favourites
    </button>
  ) : null;
}

export default AddToFavourites;
