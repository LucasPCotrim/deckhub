import styled from 'styled-components';
import { useQuery } from 'react-query';
import { cardApi } from '../../services/cardApi';
import useToken from '../../hooks/useToken';
import LoadingScreen from '../utils/LoadingScreen';
import { Link } from 'react-router-dom';
import Card from './Card';

type cardType = {
  id: number;
  name: string;
  imageUri: string;
};
export default function CardsBrowser() {
  const token = useToken();
  const cardsQuery = useQuery('cards-data', () => cardApi.getCards(token));

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
        {cardsQuery?.data?.data.map((card: cardType, index: number) => (
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
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 100px;
`;
