'use client';

import { useCurrentPageParam } from '@/providers/CurrentPageParam';
import { ReactNode, useEffect } from 'react';

function LinksWrapper(props: { children: ReactNode; fromPage: string | null }) {
  const { children, fromPage } = props;
  const [currentPage, setCurrentPageParam] = useCurrentPageParam();

  useEffect(() => {
    if (currentPage !== fromPage) {
      setCurrentPageParam(fromPage);
    }
  }, [currentPage, fromPage, setCurrentPageParam]);

  return children;
}

export default LinksWrapper;
