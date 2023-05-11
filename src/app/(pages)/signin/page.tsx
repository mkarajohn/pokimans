import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Box from '@/components/Box';
import GoogleSignInButton from '@/components/client/GoogleSignInButton';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  return (
    <section className="flex min-h-full">
      <Box padded className="bg-white">
        <div className="mx-auto flex w-full max-w-2xl flex-col">
          <h1 className="mb-8 text-center text-2xl font-medium tracking-tight text-gray-900">
            Sign in to your account
          </h1>
          <div className="sm:rounded-5xl  flex-auto text-center sm:flex-none">
            <form className="flex flex-col gap-4">
              <div>Sign in with your email</div>
              <input
                className="grow-1 mx-4 p-4"
                id="email"
                name="email"
                type="email"
                placeholder="hello@me.com"
                autoComplete="email"
                required
              />
              <button type="submit" className="action mx-4 mt-3 w-full text-gray-400" disabled>
                Continue with email
              </button>
            </form>
            <div className="mx-auto my-10 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
              or
            </div>
            <GoogleSignInButton />
          </div>
        </div>
      </Box>
    </section>
  );
}
