import PokiballDecorators from '@/components/PokiballDecorators';
import { capitalizeFirstLetter } from '@/utils/capitalize-first-letter';
import Image from 'next/image';

export default async function PokidexListItem({
  id,
  flavourText,
}: {
  id: string;
  flavourText?: string;
}) {
  const resp = await fetch(`http://localhost:3000/api/pokimans/${id}`);

  const pokiman = await resp.json();

  return (
    <div
      className={`relative border-[5px] border-double border-black ${
        flavourText ? 'max-w-sm' : 'w-80'
      }`}
    >
      <div className="flex bg-gray-100 p-4">
        <div className={`mr-8 flex flex-col items-center ${flavourText ? '' : 'justify-end'}`}>
          <Image
            priority
            src={pokiman.sprites.front}
            alt={`${id} sprite`}
            width={flavourText ? 120 : 60}
            height={flavourText ? 120 : 60}
          />
          <div>
            <span className="text-xs">No.</span>
            {id.padStart(3, '0')}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-md uppercase">{capitalizeFirstLetter(pokiman.name)}</h2>
          <div>
            <span>HT</span> <span>{Number(pokiman.height) / 10}m</span>
          </div>
          <div>
            <span>WT</span> <span>{Number(pokiman.weight) / 100}kg</span>
          </div>
        </div>
      </div>
      {flavourText ? (
        <p className="relative border-t-2 border-solid border-t-black bg-gray-200 p-4 text-sm leading-10 text-black">
          <span className="absolute -top-[.35rem] left-0 mx-7 flex gap-7">
            <span className="rect-decoration" role="presentation" />
            <span className="rect-decoration" role="presentation" />
            <span className="rect-decoration" role="presentation" />
            <span className="rect-decoration" role="presentation" />
          </span>
          <span className="absolute -top-[.35rem] right-0 mx-7 flex gap-7">
            <span className="rect-decoration" role="presentation" />
            <span className="rect-decoration" role="presentation" />
            <span className="rect-decoration" role="presentation" />
            <span className="rect-decoration" role="presentation" />
          </span>
          {flavourText}
        </p>
      ) : null}
      <PokiballDecorators />
    </div>
  );
}
