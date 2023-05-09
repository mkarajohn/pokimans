import BackLink from '@/components/client/BackLink';
import PokidexListItem from '@/components/PokidexListItem';

export default async function Home({
  searchParams,
  params,
}: {
  params: { id: string };
  searchParams: Record<string, string>;
}) {
  const resp = await fetch(`http://localhost:3000/api/pokimans/${params.id}/extra-data`);
  const { flavourText, id } = await resp.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-4">
        <BackLink />

        {/* @ts-expect-error Server Component */}
        <PokidexListItem key={params.id} id={id} flavourText={flavourText} />
      </div>
    </main>
  );
}
