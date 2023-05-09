import LinksWrapper from '@/components/client/LinksWrapper';
import Navigation from '@/components/Navigation';
import PokidexListItem from '@/components/PokidexListItem';
import { sanitizeForURL } from '@/utils/sanitise-for-url';
import Link from 'next/link';

export default async function Home({ searchParams }: { searchParams: Record<string, string> }) {
  const urlSearchParams = new URLSearchParams(searchParams);
  const currentPage = urlSearchParams.get('page');

  const resp = await fetch('http://localhost:3000/api/pokimans?' + urlSearchParams.toString());
  const { results, next, previous } = await resp.json();

  return (
    <main className="flex flex-col items-center justify-between gap-4">
      {/* @ts-expect-error Server Component */}
      <LinksWrapper fromPage={currentPage}>
        <Navigation currentPage={currentPage} next={!!next} previous={!!previous} />
        <div className="flex flex-wrap gap-6">
          {results.map((pokiman: { name: string; url: string }) => {
            const id = pokiman.url.match(/\/(\d+)\/$/)?.[1];

            return (
              <Link
                className="with-selection-arrow"
                key={pokiman.name}
                href={{
                  pathname: `/${sanitizeForURL(pokiman.name)}`,
                }}
              >
                {/* @ts-expect-error Server Component */}
                <PokidexListItem id={id} />
              </Link>
            );
          })}
        </div>
        <Navigation currentPage={currentPage} next={!!next} previous={!!previous} />
      </LinksWrapper>
    </main>
  );
}
