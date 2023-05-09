import { sanitizeForURL } from '@/utils/sanitise-for-endpoint';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${sanitizeForURL(params.id)}`);
  const data = await resp.json();

  return NextResponse.json({
    name: data.name,
    id: data.id,
    weight: data.weight,
    height: data.height,
    sprites: {
      front: data.sprites.front_default,
      back: data.sprites.back_default,
    },
  });
}
