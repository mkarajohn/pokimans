import { ReactNode } from 'react';

function Box({
  children,
  className,
  padded = false,
}: {
  children: ReactNode;
  className?: string;
  padded?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col gap-4 border-[5px] border-double border-black bg-gray-100 ${
        padded ? 'p-4' : ''
      } ${className || ''}`}
    >
      {children}
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
