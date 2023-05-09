import Box from '@/components/Box';
import BackLink from '@/components/client/BackLink';
import { ReactNode } from 'react';

function Layout({ params, children }: { params: { id: string }; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      {children}
      <Box>
        <div className="p-4">
          <BackLink />
        </div>
      </Box>
    </div>
  );
}

export default Layout;
