'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

function SignInForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || undefined;

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        signIn('credentials', {
          email: formData.get('email'),
          password: formData.get('password'),
          callbackUrl,
        });
      }}
    >
      <div>Sign in with your email and password</div>
      <input
        className="grow-1 mx-4 p-4"
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        autoComplete="email"
        required
      />
      <input
        placeholder="Password"
        className="grow-1 mx-4 p-4"
        id="password"
        name="password"
        type="password"
        required
      />
      <button type="submit" className="action mx-4 mt-3 w-full">
        Sign in
      </button>
    </form>
  );
}

export default SignInForm;
