import styled from 'styled-components';
import whiteManaSymbol from '../../assets/SymbolMana_W.svg';
import { CardType } from '../../contexts/DeckContext';

type Props = {
  card: CardType;
};
export default function Card({ card }: Props) {
  const color = getCardColor(card);

  return (
    <>
      <CardStyle>
        <div className='amount'>{`${card.amount}x`}</div>
        <CardInfo color={color}>
          <div className='name'>{`${card.name}`}</div>
          <div className='mana-cost'>
            <img src={whiteManaSymbol} alt='mana symbol' />
          </div>
        </CardInfo>
      </CardStyle>
    </>
  );
}

function getCardColor(card: CardType) {
  if (card.colors.length === 0) return 'Colorless';
  if (card.colors.length > 1) return 'Multicolor';
  if (card.colors === 'W') return 'White';
  if (card.colors === 'U') return 'Blue';
  if (card.colors === 'B') return 'Black';
  if (card.colors === 'R') return 'Red';
  if (card.colors === 'G') return 'Green';
  throw new Error('Card color could not be determined!');
}

function handleBackgroundColor(color: string) {
  if (color === 'Colorless') return '#CDC3C1';
  if (color === 'Multicolor') return '#D1B972';
  if (color === 'White') return '#FAFBFD';
  if (color === 'Blue') return '#6c95d8';
  if (color === 'Black') return '#8c8c8e';
  if (color === 'Red') return '#d66144';
  if (color === 'Green') return '#3ea967';
}

const CardStyle = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;

  .amount {
    font-size: 16px;
    margin-right: 10px;
  }
`;

interface CardInfoProps {
  color: string;
}

const CardInfo = styled.div<CardInfoProps>`
  width: 90%;
  height: 100%;
  background-color: ${(p) => handleBackgroundColor(p.color)};
  border-radius: 10px;
  border: 2px solid #828282;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  cursor: pointer;
  .name {
    color: black;
    font-size: 14px;
    font-weight: 600;
  }
  .mana-cost {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    img {
      width: 15px;
      height: 15px;
    }
  }
`;
