import { useState } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import CreateDeckContext, { CardType } from '../../contexts/CreateDeckContext';
import { BiImage } from 'react-icons/bi';
import { Tooltip as ReactTooltip } from 'react-tooltip';

type Props = {
  card: CardType;
};
export default function Card({ card }: Props) {
  const [amount, setAmount] = useState(0);
  const { deckData, setDeckData } = useContext(CreateDeckContext);

  const handleIncrease = () => {
    const newAmount = amount + 1;
    if (!isLand(card)) {
      setAmount(Math.min(4, newAmount));
    } else {
      setAmount(newAmount);
    }
  };
  const handleDecrease = () => {
    const newAmount = amount - 1;
    setAmount(Math.max(0, newAmount));
  };
  const handleSetDeckImage = () => {
    setDeckData({ ...deckData, image: card.imageArtCrop });
  };
  const handleSubmit = () => {
    const numberTotalCardsInDeck = deckData.cards.reduce(
      (prev, curr) => prev + curr.amount,
      0
    );
    const numberExistingOnDeck = deckData.cards.filter(
      (c) => c.id === card.id
    ).length;
    if (numberExistingOnDeck > 0) {
      alert('Card already added!');
      return;
    }
    if (numberTotalCardsInDeck + amount > 60) {
      alert('Invalid amount!');
      return;
    }
    setDeckData({
      ...deckData,
      cards: [...deckData.cards, { ...card, amount }],
    });
    setAmount(0);
  };

  return (
    <>
      <CardStyle>
        <ImageWrapper className='prevent-select'>
          <img src={card.imageUri} alt='card pic' />
        </ImageWrapper>
        <CardButtons className='prevent-select'>
          <div className='amount'>{`${amount}x`}</div>
          <div className='buttons'>
            <div className='add-button' onClick={handleIncrease}>
              +
            </div>
            <div className='subtract-button' onClick={handleDecrease}>
              -
            </div>
          </div>
          <div
            className='set-image'
            id={`set-image-${card.id}`}
            data-tooltip-content='Set Deck image'
            onClick={handleSetDeckImage}>
            <BiImage />
          </div>
          <ReactTooltip anchorId={`set-image-${card.id}`} />
          <div className='submit' onClick={handleSubmit}>
            Add to Deck
          </div>
        </CardButtons>
      </CardStyle>
    </>
  );
}

function isLand(card: CardType) {
  return card.typeLine.indexOf('Land') >= 0;
}

const CardStyle = styled.div`
  position: relative;
  width: 250px;
  aspect-ratio: 0.71428571428;
  border-radius: 14px;
  border: 1px solid black;

  &:hover {
    border: 1px solid var(--tertiary-color);
    box-shadow: 0px 0px 5px 2px var(--tertiary-color);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 14px;
  }
`;

const CardButtons = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 20px;
  .set-image {
    position: absolute;
    top: 50%;
    left: 10px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;

    background: rgba(25, 231, 231, 0.38);
    border-radius: 6px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.8px);
    -webkit-backdrop-filter: blur(10.8px);
    border: 1px solid rgba(25, 231, 231, 0.19);
  }
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  .add-button {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    cursor: pointer;

    background: rgba(70, 255, 55, 0.38);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.8px);
    -webkit-backdrop-filter: blur(10.8px);
    border: 1px solid rgba(70, 255, 55, 0.19);
  }
  .subtract-button {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    cursor: pointer;

    background: rgba(161, 34, 34, 0.38);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.8px);
    -webkit-backdrop-filter: blur(10.8px);
    border: 1px solid rgba(161, 34, 34, 0.19);
  }
  .submit {
    width: 120px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--secundary-color);

    background: rgba(25, 231, 231, 0.38);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.8px);
    -webkit-backdrop-filter: blur(10.8px);
    border: 1px solid rgba(25, 231, 231, 0.19);
  }
  .amount {
    position: absolute;
    top: calc(50% - 30px);
    left: calc(50% - 30px);
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;

    background: rgba(1, 9, 16, 0.22);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11.9px);
    -webkit-backdrop-filter: blur(11.9px);
    border: 1px solid rgba(1, 9, 16, 0.19);
  }

  .add-button,
  .subtract-button,
  .submit {
    &:hover {
      border: 1px solid var(--tertiary-color);
      box-shadow: 0px 0px 5px 2px var(--tertiary-color);
    }
  }
`;
