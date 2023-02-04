import styled from 'styled-components';
import { CardType } from '../../contexts/DeckContext';
import ManaSymbols from './ManaSymbols';

type Props = {
  card: CardType;
};
export default function Card({ card }: Props) {
  const color = getCardColor(card);
  const manaCost = card.manaCost;
  const manaCostArray = manaCost.match(/{.+?}/g) as string[];

  return (
    <>
      <CardStyle>
        <div className='amount'>{`${card.amount}x`}</div>
        <CardInfo color={color}>
          <div className='name'>{`${card.name}`}</div>
          <ManaSymbols manaCostArray={manaCostArray} />
          <div className='card-tooltip prevent-select'>
            <img src={card.imageUri} alt='' />
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
  if (color === 'Colorless') return '#a09f9e';
  if (color === 'Multicolor') return '#D1B972';
  if (color === 'White') return '#FAFBFD';
  if (color === 'Blue') return '#769bd5';
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
  position: relative;
  width: 92%;
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
  .card-tooltip {
    position: absolute;
    top: -200px;
    right: -300px;
    height: 400px;
    background-color: cyan;
    display: none;
    z-index: 1;
    border-radius: 13.5px;
    overflow: hidden;
    img {
      width: 300px;
    }
  }
  &:hover {
    border: 2px solid var(--tertiary-color);
    box-shadow: 0px 0px 5px 2px var(--tertiary-color);
    .card-tooltip {
      display: initial;
    }
  }
`;
