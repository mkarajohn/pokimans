'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function BackLink() {
  // const [previousPage] = useCurrentPageParam();
  const urlSearchParams = useSearchParams();
  const searchParams = Object.fromEntries(urlSearchParams);

  return (
    <Link
      className="with-selection-arrow inline-flex self-start uppercase"
      href={{
        pathname: '/',
        // query: previousPage ? { page: previousPage } : {},
        query: searchParams,
      }}
    >
      Close
    </Link>
  );
}

export default BackLink;
