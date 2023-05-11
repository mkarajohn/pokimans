import Box from '@/components/Box';
import Link from 'next/link';

function Navigation(props: { currentPage: string | null; next: boolean; previous: boolean }) {
  const currentPage = props.currentPage ?? '1';
  const nextPage = parseInt(currentPage) + 1;
  const prevPage = parseInt(currentPage) - 1;

  return (
    <div className="flex gap-x-16">
      <Box padded>
        {props.next ? (
          <Link className="action" href={{ query: { page: nextPage } }}>
            Next page
          </Link>
        ) : null}
        {props.previous ? (
          <Link className="action" href={{ query: { page: prevPage } }}>
            Previous page
          </Link>
        ) : null}
        {currentPage !== '1' ? (
          <Link className="action" href="/">
            First page
          </Link>
        ) : null}
      </Box>
    </div>
  );
}

export default Navigation;
