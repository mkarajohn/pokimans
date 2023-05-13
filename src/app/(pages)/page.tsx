import LinksWrapper from '@/components/client/LinksWrapper';
import Navigation from '@/components/Navigation';
import PokidexEntry from '@/components/PokidexEntry';
import { sanitizeForURL } from '@/utils/sanitise-for-url';
import Link from 'next/link';

export default async function RootPage({ searchParams }: { searchParams: Record<string, string> }) {
  const urlSearchParams = new URLSearchParams(searchParams);
  const currentPage = urlSearchParams.get('page');

  const resp = await fetch(`${process.env.HOST}/api/pokimans?${urlSearchParams.toString()}`);
  const { results, next, previous } = await resp.json();

  return (
    /* @ts-expect-error Server Component */
    <LinksWrapper fromPage={currentPage}>
      <div className="flex gap-8 sm:flex-col md:flex-row">
        <div className="shrink-0">
          <Navigation currentPage={currentPage} next={!!next} previous={!!previous} />
        </div>
        <div className="flex flex-wrap gap-6">
          {results.map((pokiman: { name: string; url: string }) => {
            const id = pokiman.url.match(/\/(\d+)\/$/)?.[1];

            return (
              <Link
                className="with-selection-arrow"
                key={pokiman.name}
                href={{
                  pathname: `/entry/${sanitizeForURL(pokiman.name)}`,
                  query: searchParams,
                }}
              >
                {/* @ts-expect-error Server Component */}
                <PokidexEntry id={id} />
              </Link>
            );
          })}
        </div>
      </div>
    </LinksWrapper>
  );
}
