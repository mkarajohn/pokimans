'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

function SignUpForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || undefined;

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        const resp = await fetch('/api/signup', {
          method: 'POST',
          // headers: { 'Content-Type': 'multipart/form-data' },
          body: JSON.stringify(Object.fromEntries(formData)),
        });

        if (resp.ok) {
          signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            callbackUrl,
          });
        } else {
          console.log('something went wrong');
        }
      }}
    >
      <div>Sign up for an account</div>
      <input
        className="grow-1 mx-4 p-4"
        id="name"
        name="name"
        type="text"
        placeholder="Your name"
        required
      />
      <input
        className="grow-1 mx-4 p-4"
        id="email"
        name="email"
        type="email"
        placeholder="Your email"
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
        Sign up
      </button>
    </form>
  );
}

export default SignUpForm;
