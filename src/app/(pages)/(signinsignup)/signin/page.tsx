import Box from '@/components/Box';
import SignInForm from '@/components/client/SignInForm';
import SignInWithGoogleButton from '@/components/client/SignInWithGoogleButton';
import Link from 'next/link';

function Page({ searchParams }: { searchParams: Record<string, string> }) {
  return (
    <>
      <Box padded className="bg-white">
        <div className="mx-auto flex w-full max-w-2xl flex-col">
          <h1 className="mb-8 text-center text-2xl font-medium tracking-tight text-gray-900">
            Sign in to your account
          </h1>
          <p className="mb-6">Signing in will allow you to save Pokimans in your favourites list</p>
          <div className="flex-auto text-center sm:flex-none">
            <SignInForm />
            <div className="mx-auto my-10 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
              or
            </div>
            <SignInWithGoogleButton />
          </div>
        </div>
      </Box>
      <Box padded className="bg-white">
        <span>
          Don't have an account?{' '}
          <Link href={{ pathname: '/signup', query: searchParams }}>
            <strong>Sign up</strong>
          </Link>
        </span>
      </Box>
    </>
  );
}

export default Page;
