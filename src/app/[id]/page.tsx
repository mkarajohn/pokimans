import PokidexListItem from '@/components/PokidexListItem';

export default async function Page({
  params,
}: {
  params: { id: string };
  searchParams: Record<string, string>;
}) {
  const resp = await fetch(`http://localhost:3000/api/pokimans/${params.id}/extra-data`);
  const { flavourText, id } = await resp.json();

  return (
    /* @ts-expect-error Server Component */
    <PokidexListItem key={params.id} id={id} flavourText={flavourText} />
  );
}
