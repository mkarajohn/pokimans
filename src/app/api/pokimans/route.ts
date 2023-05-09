const LIMIT = '20';
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');

  const params = {
    limit: LIMIT,
    offset: page ? (parseInt(LIMIT) * (parseInt(page) - 1)).toString() : '0',
  };

  return fetch('https://pokeapi.co/api/v2/pokemon/?' + new URLSearchParams(params).toString(), {
    cache: 'no-cache',
  });
}
