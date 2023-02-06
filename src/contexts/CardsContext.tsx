import { createContext, ReactNode, useState } from 'react';

export type CardDataType = {
  id: number;
  name: string;
  imageUri: string;
};

type CardsContextType = {
  cardsData: CardDataType[];
  setCardsData: (value: any) => void;
};

const CardsContext = createContext({} as CardsContextType);
export default CardsContext;

interface Props {
  children?: ReactNode;
}
export function CardsProvider({ children }: Props) {
  const initialCardsData = [] as CardDataType[];

  const [cardsData, setCardsData] = useState<CardDataType[]>(initialCardsData);

  return (
    <CardsContext.Provider value={{ cardsData, setCardsData }}>
      {children}
    </CardsContext.Provider>
  );
}
