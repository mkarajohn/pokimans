'use client';

import Box from '@/components/Box';
import { Menu, Transition } from '@headlessui/react';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

function UserMenu({ session }: { session: Session }) {
  return (
    <Menu>
      <Menu.Button>
        {session.user?.image ? (
          <div className="relative h-10 w-10">
            <Image
              src={session.user.image}
              alt={session.user.name || ''}
              className="inline-block rounded-full"
              fill
            />
          </div>
        ) : (
          <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-stone-100">
            <svg className="h-full w-full text-stone-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
        )}
      </Menu.Button>
      <Transition
        enter="transition duration-150 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-150 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="!absolute right-0 z-30 mt-1 flex origin-top-right shadow-lg focus:outline-none">
          <Box padded>
            <div className="mb-4 flex gap-4 px-4 text-sm">
              {session.user?.image ? (
                <div className="relative h-10 w-10">
                  <Image
                    src={session.user.image}
                    alt={session.user.name || ''}
                    className="inline-block rounded-full"
                    fill
                  />
                </div>
              ) : (
                <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-stone-100">
                  <svg
                    className="h-full w-full text-stone-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
              )}
              <div>
                <p className="font-medium text-stone-600">{session.user?.name || 'User name'}</p>
                <p className="text-stone-400">{session.user?.email}</p>
              </div>
            </div>
            <Menu.Item>
              <Link href="/account/favourites" className="action mx-4">
                Favourites
              </Link>
            </Menu.Item>
            <Menu.Item>
              <button
                type="button"
                className="action relative mx-4"
                onClick={() => {
                  signOut({ redirect: true });
                }}
              >
                Sign out
              </button>
            </Menu.Item>
          </Box>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default UserMenu;
