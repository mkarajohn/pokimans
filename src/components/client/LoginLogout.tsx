'use client';

import SignInButton from '@/components/client/SignInButton';
import UserMenu from '@/components/client/UserMenu';
import { useSession } from 'next-auth/react';

function LoginLogout() {
  const { data: session } = useSession();

  return (
    <div className="shrink-0">{session ? <UserMenu session={session} /> : <SignInButton />}</div>
  );
}

export default LoginLogout;
