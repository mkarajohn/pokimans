'use client';

import React, { Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

const CurrentPageParamContext = React.createContext<
  [string | null, Dispatch<SetStateAction<string | null>>]
>([null, () => {}]);

export function CurrentPageParam(props: { children: ReactNode }) {
  const state = useState<string | null>(null);

  return (
    <CurrentPageParamContext.Provider value={state}>
      {props.children}
    </CurrentPageParamContext.Provider>
  );
}

export function useCurrentPageParam() {
  return useContext(CurrentPageParamContext);
}
