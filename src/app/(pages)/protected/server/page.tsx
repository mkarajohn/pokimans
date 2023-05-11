import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/signin?callbackUrl=/protected/server');
  }

  return <div>This is a protected page on the server</div>;
}

export default Page;
