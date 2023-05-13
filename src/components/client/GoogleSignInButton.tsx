'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const GoogleSignInButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || undefined;

  return (
    <button
      className="action mx-4 mt-3 flex w-full items-center"
      onClick={() => signIn('google', { callbackUrl })}
    >
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleSignInButton;
