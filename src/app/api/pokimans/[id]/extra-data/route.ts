import { sanitizeForURL } from '@/utils/sanitise-for-endpoint';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const resp = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${sanitizeForURL(params.id)}`
  );
  const data = await resp.json();

  return NextResponse.json({
    id: data.id.toString(),
    flavourText: data.flavor_text_entries
      .filter((entry: { language: { name: string } }) => {
        return entry.language.name === 'en';
      })[0]
      .flavor_text.replaceAll(/[\n\f]/g, ' '),
  });
}
