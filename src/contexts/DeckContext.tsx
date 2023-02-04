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
  id: number;
  name: string;
  image: string;
  format: {
    id: number;
    name: string;
  };
  user: {
    id: number;
    name: string;
    profilePic: string;
  };
  cards: CardType[];
  numVisits: number;
  createdAt: Date;
  updatedAt: Date;
};
type DeckContextType = {
  deckData: DeckDataType;
  setDeckData: (value: any) => void;
};

const DeckContext = createContext({} as DeckContextType);
export default DeckContext;

interface Props {
  children?: ReactNode;
}
export function DeckProvider({ children }: Props) {
  const initialDeckData = {
    id: 0,
    name: '',
    image: '',
    format: {
      id: 0,
      name: '',
    },
    user: {
      id: 0,
      name: '',
      profilePic: '',
    },
    cards: [],
    numVisits: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const [deckData, setDeckData] = useState<DeckDataType>(initialDeckData);

  return (
    <DeckContext.Provider value={{ deckData, setDeckData }}>
      {children}
    </DeckContext.Provider>
  );
}
