'use client';

import Box from '@/components/Box';
import AddToFavourites from '@/components/client/AddToFavourites';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ReactNode, useCallback, useEffect, useRef } from 'react';

export default function Modal({ children, id }: { children: ReactNode; id: number }) {
  const overlay = useRef(null);
  const router = useRouter();
  const { data: session } = useSession();

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') router.back();
    },
    [router]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed inset-0 z-50 mx-auto flex items-center justify-center bg-black/60"
      onClick={(e) => {
        if (e.target === overlay.current) {
          router.back();
        }
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-4">
          {children}
          <div className="max-w-sm">
            <Box padded>
              <div>
                This modal is using{' '}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes"
                >
                  <strong>route interception</strong>
                </a>
                ! <br /> Reload the page and see what happens!
              </div>
            </Box>
          </div>
        </div>
        {/*<div className="fixed bottom-8 right-8">{actions}</div>*/}
        <div className="fixed bottom-8 right-8">
          <Box padded>
            {session ? <AddToFavourites session={session} id={id} /> : null}
            <button className="action" onClick={router.back}>
              Close
            </button>
          </Box>
        </div>
      </div>
    </div>
  );
}
