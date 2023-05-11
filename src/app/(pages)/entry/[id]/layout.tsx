import PokidexActions from '@/components/PokidexActions';
import { ReactNode } from 'react';

async function Layout({ params, children }: { params: { id: string }; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      {children}
      <PokidexActions />
    </div>
  );
}

export default Layout;
