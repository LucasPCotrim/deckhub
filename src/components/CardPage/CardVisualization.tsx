import styled from 'styled-components';
import { useContext } from 'react';
import CardContext from '../../contexts/CardContext';
import ManaSymbols from '../DeckPage/ManaSymbols';

export default function CardVisualization() {
  const { cardData } = useContext(CardContext);
  const manaCostArray = cardData.manaCost.match(/{.+?}/g) as string[];

  return (
    <>
      <CardVisualizationStyle>
        <img src={cardData.imageUri} alt='' />
        <CardInformation>
          <div className='card-name-cost'>
            <div className='card-name'>{cardData.name}</div>
            <ManaSymbols manaCostArray={manaCostArray} imgSize={25} />
          </div>

          <div className='card-type'>{cardData.typeLine}</div>
          <div className='card-text'>{cardData.oracleText}</div>
        </CardInformation>
      </CardVisualizationStyle>
    </>
  );
}

const CardVisualizationStyle = styled.div`
  width: min(1400px, 100%);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0 50px;
  margin-bottom: 200px;
  gap: 50px;

  > img {
    width: 450px;
    border-radius: 21px;
  }
`;

const CardInformation = styled.div`
  height: 100%;
  .card-name-cost {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
    .card-name {
      font-size: 40px;
      margin-right: 60px;
    }
  }

  .card-type {
    font-size: 24px;
    margin-bottom: 40px;
  }
  .card-text {
    font-size: 20px;
    line-height: 35px;
  }
`;
