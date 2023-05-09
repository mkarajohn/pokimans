'use client';

import PokiballDecorators from '@/components/PokiballDecorators';
import { sanitizeForURL } from '@/utils/sanitise-for-url';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function Search() {
  const params = useParams();
  const router = useRouter();
  const [value, setValue] = useState(params.id);

  useEffect(() => {
    setValue(params.id || '');
  }, [params.id]);

  return (
    <div className="relative border-[5px] border-double border-black ">
      <input
        className="p-4"
        type="search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            router.push(`/${sanitizeForURL(value)}`);
          }
        }}
      />
      <PokiballDecorators />
    </div>
  );
}

export default Search;
