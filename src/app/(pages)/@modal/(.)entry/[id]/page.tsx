import PokidexEntryPage from '@/app/(pages)/entry/[id]/page';
import Modal from '@/components/client/Modal';

async function Page(props: { params: { id: string }; searchParams: Record<string, string> }) {
  return (
    // <Modal actions={<PokidexActions />}>
    <Modal>
      {/* @ts-expect-error Server Component */}
      <PokidexEntryPage {...props} />
    </Modal>
  );
}

export default Page;
