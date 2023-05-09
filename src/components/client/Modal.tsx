'use client';

import Box from '@/components/Box';
import { useRouter } from 'next/navigation';
import { ReactNode, useCallback, useEffect, useRef } from 'react';

export default function Modal({ children }: { children: ReactNode }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

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
      className="fixed inset-0 z-10 mx-auto flex items-center justify-center bg-black/60"
      onClick={(e) => {
        if (e.target === overlay.current || e.target === wrapper.current) {
          router.back();
        }
      }}
    >
      <div ref={wrapper} className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-4">
          {children}
          <div className="max-w-sm">
            <Box>
              <div className="p-4">
                !Try reloading the page and see the route interception in action!
              </div>
            </Box>
          </div>
        </div>
        <div className="fixed bottom-8 right-8">
          <Box>
            <div className="p-4">
              <button className="with-selection-arrow uppercase" onClick={router.back}>
                Close
              </button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}
