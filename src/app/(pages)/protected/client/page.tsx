'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

function Page() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin?callbackUrl=/protected/client');
    },
  });

  if (!session) {
    return null;
  }

  return <div>This is a protected page on the client</div>;
}

export default Page;
