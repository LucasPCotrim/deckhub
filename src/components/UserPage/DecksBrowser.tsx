import styled from 'styled-components';
import { useContext } from 'react';
import ProfileContext from '../../contexts/ProfileContext';
import { Link } from 'react-router-dom';
import { DeckType } from '../../contexts/ProfileContext';
import Deck from './Deck';

export default function DecksBrowser() {
  const { profileData } = useContext(ProfileContext);

  return (
    <>
      <DecksBrowserStyle>
        <h1>{`${profileData.name}'s decks`}</h1>
        <div className='browser prevent-link-decoration'>
          {profileData.decks.map((deck: DeckType, index: number) => (
            <Link key={index} to={`/deck/${deck.id}`}>
              <Deck
                image={deck.image}
                name={deck.name}
                format={deck.format.name}
                stats={{
                  numComments: 0,
                  numLikes: 0,
                  numVisits: deck.numVisits,
                }}
              />
            </Link>
          ))}
        </div>
      </DecksBrowserStyle>
    </>
  );
}

const DecksBrowserStyle = styled.div`
  width: 100%;
  margin-bottom: 200px;

  h1 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 28px;
  }
  .browser {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    align-items: flex-start;
    justify-content: center;
  }
`;
