import styled from 'styled-components';
import Card from '../CreateDeckPage/Card';
import { CardType } from '../../contexts/CreateDeckContext';
import { useContext } from 'react';
import CreateDeckContext from '../../contexts/CreateDeckContext';

export default function CardsBrowser() {
  const { deckData } = useContext(CreateDeckContext);

  return (
    <>
      <CardsBrowserStyle className='prevent-link-decoration'>
        {deckData.cardsSearched.map((card: CardType, index: number) => (
          <Card key={index} card={card} />
        ))}
      </CardsBrowserStyle>
    </>
  );
}

const CardsBrowserStyle = styled.div`
  width: min(1600px, 100%);
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 100px;
`;
