import { createContext, ReactNode, useState } from 'react';

type cardType = {
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
type deckDataType = {
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
  cards: cardType[];
  numVisits: number;
  createdAt: Date;
  updatedAt: Date;
};
type deckContextType = {
  deckData: deckDataType;
  setDeckData: (value: any) => void;
};

const DeckContext = createContext({} as deckContextType);
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

  const [deckData, setDeckData] = useState<deckDataType>(initialDeckData);

  return (
    <DeckContext.Provider value={{ deckData, setDeckData }}>
      {children}
    </DeckContext.Provider>
  );
}
