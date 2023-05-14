'use client';

import { Session } from 'next-auth';
import { useParams, useRouter } from 'next/navigation';

function AddToFavourites({ session, id }: { session: Session; id: number }) {
  const params = useParams();
  const router = useRouter();

  return session ? (
    <button
      className="action"
      type="button"
      onClick={async () => {
        const resp = await fetch(`/api/pokimans/${params.id}/add-favourite`, {
          method: 'post',
          body: JSON.stringify({ email: session.user?.email, id }),
        });

        if (resp.ok) {
          router.back();
          setTimeout(router.refresh, 0);
        } else {
          console.log('Something went wrong');
        }
      }}
    >
      Add to favourites
    </button>
  ) : null;
}

export default AddToFavourites;
