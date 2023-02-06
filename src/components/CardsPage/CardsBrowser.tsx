import styled from 'styled-components';
import { useQuery } from 'react-query';
import { cardApi } from '../../services/cardApi';
import useToken from '../../hooks/useToken';
import LoadingScreen from '../utils/LoadingScreen';
import { Link } from 'react-router-dom';
import Card from './Card';
import { CardDataType } from '../../contexts/CardsContext';
import { useContext } from 'react';
import CardsContext from '../../contexts/CardsContext';

export default function CardsBrowser() {
  const { cardsData, setCardsData } = useContext(CardsContext);
  const token = useToken();
  const cardsQuery = useQuery('cards-data', () => cardApi.getCards(token), {
    onSuccess: (data) => {
      setCardsData(data.data);
    },
  });

  if (cardsQuery.isLoading) {
    return (
      <>
        <LoadingScreen message={'Loading...'} />
      </>
    );
  }

  return (
    <>
      <CardsBrowserStyle className='prevent-link-decoration'>
        {cardsData.map((card: CardDataType, index: number) => (
          <Link key={index} to={`/card/${card.id}`}>
            <Card id={card.id} name={card.name} image={card.imageUri} />
          </Link>
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
