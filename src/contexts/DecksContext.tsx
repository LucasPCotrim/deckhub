import { createContext, ReactNode, useState } from 'react';

export type DeckDataType = {
  id: number;
  name: string;
  image: string;
  numVisits: number;
  format: { id: number; name: string };
};

type DecksContextType = {
  decksData: DeckDataType[];
  setDecksData: (value: any) => void;
};

const DecksContext = createContext({} as DecksContextType);
export default DecksContext;

interface Props {
  children?: ReactNode;
}
export function DecksProvider({ children }: Props) {
  const initialDecksData = [] as DeckDataType[];

  const [decksData, setDecksData] = useState<DeckDataType[]>(initialDecksData);

  return (
    <DecksContext.Provider value={{ decksData, setDecksData }}>
      {children}
    </DecksContext.Provider>
  );
}
