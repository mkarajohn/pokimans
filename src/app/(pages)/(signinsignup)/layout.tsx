import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

async function Layout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  return <section className="flex min-h-full flex-col gap-8">{children}</section>;
}

export default Layout;
