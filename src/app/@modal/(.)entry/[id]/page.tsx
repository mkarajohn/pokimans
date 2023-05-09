import PokidexEntryPage from '@/app/entry/[id]/page';
import Modal from '@/components/client/Modal';

async function Page(props: { params: { id: string }; searchParams: Record<string, string> }) {
  return (
    <Modal>
      {/* @ts-expect-error Server Component */}
      <PokidexEntryPage {...props} />
    </Modal>
  );
}

export default Page;
