import styled from 'styled-components';
import Deck from './Deck';
import { useQuery } from 'react-query';
import { deckApi } from '../../services/deckApi';
import useToken from '../../hooks/useToken';
import LoadingScreen from '../utils/LoadingScreen';
import { Link } from 'react-router-dom';

type deckType = {
  id: number;
  name: string;
  image: string;
  numVisits: number;
  format: { id: number; name: string };
};
export default function DecksBrowser() {
  const token = useToken();
  const decksQuery = useQuery('decks-data', () => deckApi.getDecks(token));

  if (decksQuery.isLoading) {
    return (
      <>
        <LoadingScreen message={'Loading...'} />
      </>
    );
  }

  return (
    <>
      <DecksBrowserStyle className='prevent-link-decoration'>
        {decksQuery?.data?.data.map((deck: deckType, index: number) => (
          <Link key={index} to={`/deck/${deck.id}`}>
            <Deck
              image={deck.image}
              name={deck.name}
              format={deck.format.name}
              stats={{ numComments: 0, numLikes: 0, numVisits: deck.numVisits }}
            />
          </Link>
        ))}
      </DecksBrowserStyle>
    </>
  );
}

const DecksBrowserStyle = styled.div`
  width: min(1200px, 100%);
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 100px;
`;
