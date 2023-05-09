import BackLink from '@/components/client/BackLink';
import { ReactNode } from 'react';

function Layout({ params, children }: { params: { id: string }; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <BackLink />
      {children}
    </div>
  );
}

export default Layout;
