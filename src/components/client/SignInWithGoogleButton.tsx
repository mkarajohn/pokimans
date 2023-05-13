'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const SignInWithGoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || undefined;

  return (
    <button
      className="action mx-4 mt-3 flex w-full items-center"
      onClick={() => {
        signIn('google', { callbackUrl });
      }}
    >
      <span>Sign in with Google</span>
    </button>
  );
};

export default SignInWithGoogleButton;
