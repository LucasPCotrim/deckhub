import { createContext, ReactNode, useState } from 'react';

export type CardType = {
  id: number;
  name: string;
  amount: number;
  scryfallId: number;
  oracleId: number;
  scryfallUri: string;
  gathererUri: string;
  manaCost: string;
  typeLine: string;
  rarity: string;
  oracleText: string;
  colors: string;
  colorIdentity: string;
  cmc: number;
  price: number;
  imageUri: string;
  imageArtCrop: string;
  set: {
    id: number;
    code: string;
    name: string;
    scryfallId: string;
    scryfallUri: string;
    setType: string;
    iconSvgUri: string;
  };
  releasedAt: Date;
};

export type DeckDataType = {
  name: string;
  image: string;
  format: string;
  cards: CardType[];
  cardsSearched: CardType[];
};
type CreateDeckContextType = {
  deckData: DeckDataType;
  setDeckData: (value: any) => void;
};

const CreateDeckContext = createContext({} as CreateDeckContextType);
export default CreateDeckContext;

interface Props {
  children?: ReactNode;
}
export function CreateDeckProvider({ children }: Props) {
  const initialDeckData = {
    id: 0,
    name: '',
    image: '',
    format: '',
    cards: [],
    cardsSearched: [],
  };

  const [deckData, setDeckData] = useState<DeckDataType>(initialDeckData);

  return (
    <CreateDeckContext.Provider value={{ deckData, setDeckData }}>
      {children}
    </CreateDeckContext.Provider>
  );
}
