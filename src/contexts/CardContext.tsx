import { createContext, ReactNode, useState } from 'react';

export type CardDataType = {
  id: number;
  name: string;
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

type CardContextType = {
  cardData: CardDataType;
  setCardData: (value: any) => void;
};

const CardContext = createContext({} as CardContextType);
export default CardContext;

interface Props {
  children?: ReactNode;
}
export function CardProvider({ children }: Props) {
  const initialCardData = {
    id: 0,
    name: '',
    scryfallId: 0,
    oracleId: 0,
    scryfallUri: '',
    gathererUri: '',
    manaCost: '',
    typeLine: '',
    rarity: '',
    oracleText: '',
    colors: '',
    colorIdentity: '',
    cmc: 0,
    price: 0,
    imageUri: '',
    imageArtCrop: '',
    set: {
      id: 0,
      code: '',
      name: '',
      scryfallId: '',
      scryfallUri: '',
      setType: '',
      iconSvgUri: '',
    },
    releasedAt: new Date(),
  };

  const [cardData, setCardData] = useState<CardDataType>(initialCardData);

  return (
    <CardContext.Provider value={{ cardData, setCardData }}>
      {children}
    </CardContext.Provider>
  );
}
