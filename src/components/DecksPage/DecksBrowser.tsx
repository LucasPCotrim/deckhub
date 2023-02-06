import styled from 'styled-components';
import Deck from './Deck';
import { useQuery } from 'react-query';
import { deckApi } from '../../services/deckApi';
import useToken from '../../hooks/useToken';
import LoadingScreen from '../utils/LoadingScreen';
import { Link } from 'react-router-dom';
import DecksContext, { DeckDataType } from '../../contexts/DecksContext';
import { useContext } from 'react';

export default function DecksBrowser() {
  const token = useToken();
  const { decksData, setDecksData } = useContext(DecksContext);
  const decksQuery = useQuery('decks-data', () => deckApi.getDecks(token), {
    onSuccess: (data) => {
      setDecksData(data.data);
    },
  });

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
        {decksData.map((deck: DeckDataType, index: number) => (
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
