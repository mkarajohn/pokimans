import PokidexActions from '@/components/PokidexActions';
import { ReactNode } from 'react';

async function Layout({ params, children }: { params: { id: string }; children: ReactNode }) {
  const resp = await fetch(`${process.env.HOST}/api/pokimans/${params.id}/extra-data`);
  const { id } = await resp.json();

  return (
    <div className="flex flex-col gap-4">
      {children}
      {/* @ts-expect-error Server Component */}
      <PokidexActions id={id} />
    </div>
  );
}

export default Layout;
