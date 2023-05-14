import PokidexEntryPage from '@/app/(pages)/entry/[id]/page';
import Modal from '@/components/client/Modal';

async function Page(props: { params: { id: string }; searchParams: Record<string, string> }) {
  const resp = await fetch(`${process.env.HOST}/api/pokimans/${props.params.id}/extra-data`);
  const { id } = await resp.json();

  return (
    // <Modal actions={<PokidexActions />}>
    <Modal id={id}>
      {/* @ts-expect-error Server Component */}
      <PokidexEntryPage {...props} />
    </Modal>
  );
}

export default Page;
