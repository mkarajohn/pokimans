'use client';
import { signIn } from 'next-auth/react';

const SignInButton = () => {
  return (
    <button
      type="button"
      className="rounded-md border-none px-3 py-1 text-sm"
      onClick={() => signIn()}
    >
      Sign In
    </button>
  );
};

export default SignInButton;
