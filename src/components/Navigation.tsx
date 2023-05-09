import Link from 'next/link';

function Navigation(props: { currentPage: string | null; next: boolean; previous: boolean }) {
  const currentPage = props.currentPage ?? '1';
  const nextPage = parseInt(currentPage) + 1;
  const prevPage = parseInt(currentPage) - 1;

  return (
    <div className="flex gap-x-16">
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
    </div>
  );
}

export default Navigation;
