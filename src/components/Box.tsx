import { ReactNode } from 'react';

function Box(props: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative border-[5px] border-double border-black bg-gray-100 ${
        props.className || ''
      }`}
    >
      {props.children}
      <span
        className="pokiball-decoration absolute -left-[.4rem] -top-[.4rem]"
        role="presentation"
      />
      <span
        className="pokiball-decoration absolute -bottom-[.4rem] -left-[.4rem]"
        role="presentation"
      />
      <span
        className="pokiball-decoration absolute -right-[.4rem] -top-[.4rem]"
        role="presentation"
      />
      <span
        className="pokiball-decoration absolute -bottom-[.4rem] -right-[.4rem]"
        role="presentation"
      />
    </div>
  );
}

export default Box;
