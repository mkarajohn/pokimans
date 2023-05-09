'use client';

import { useCurrentPageParam } from '@/app/providers/CurrentPageParam';
import Link from 'next/link';

function BackLink() {
  const [previousPage] = useCurrentPageParam();

  return (
    <Link
      className="with-selection-arrow inline-flex self-start uppercase"
      href={{
        pathname: '/',
        query: previousPage ? { page: previousPage } : {},
      }}
    >
      Close
    </Link>
  );
}

export default BackLink;
