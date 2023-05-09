import Box from '@/components/Box';
import Link from 'next/link';

function Navigation(props: { currentPage: string | null; next: boolean; previous: boolean }) {
  const currentPage = props.currentPage ?? '1';
  const nextPage = parseInt(currentPage) + 1;
  const prevPage = parseInt(currentPage) - 1;

  return (
    <div className="flex gap-x-16">
      <Box className="flex flex-col gap-4 p-4 uppercase">
        <Link className="with-selection-arrow" href="/">
          First page
        </Link>
        {props.previous ? (
          <Link className="with-selection-arrow" href={{ query: { page: prevPage } }}>
            Previous page
          </Link>
        ) : null}
        {props.next ? (
          <Link className="with-selection-arrow" href={{ query: { page: nextPage } }}>
            Next page
          </Link>
        ) : null}
      </Box>
    </div>
  );
}

export default Navigation;
