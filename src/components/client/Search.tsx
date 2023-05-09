'use client';

import Box from '@/components/Box';
import { sanitizeForURL } from '@/utils/sanitise-for-url';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function Search() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(params.id ?? '');
  const currentPage = searchParams.get('page');

  useEffect(() => {
    setValue(params.id ?? '');
  }, [params.id]);

  return (
    <Box>
      <input
        className="p-4"
        type="search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            router.push(
              `/entry/${sanitizeForURL(value)}${currentPage ? '?' + searchParams.toString() : ''}`
            );
          }
        }}
      />
    </Box>
  );
}

export default Search;
