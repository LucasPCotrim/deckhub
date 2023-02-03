import styled from 'styled-components';
import Deck from './Deck';

export default function DecksBrowser() {
  return (
    <>
      <DecksBrowserStyle>
        <Deck
          image={'https://wallpaperaccess.com/full/288129.jpg'}
          name={'My First Deck'}
          format={'Teste'}
          stats={{ numComments: 14, numLikes: 40, numVisits: 179 }}
        />
        <Deck
          image={'https://wallpaperaccess.com/full/288129.jpg'}
          name={'My First Deck'}
          format={'Teste'}
          stats={{ numComments: 14, numLikes: 40, numVisits: 179 }}
        />
        <Deck
          image={'https://wallpaperaccess.com/full/288129.jpg'}
          name={'My First Deck'}
          format={'Teste'}
          stats={{ numComments: 14, numLikes: 40, numVisits: 179 }}
        />
        <Deck
          image={'https://wallpaperaccess.com/full/288129.jpg'}
          name={'My First Deck'}
          format={'Teste'}
          stats={{ numComments: 14, numLikes: 40, numVisits: 179 }}
        />
        <Deck
          image={'https://wallpaperaccess.com/full/288129.jpg'}
          name={'My First Deck'}
          format={'Teste'}
          stats={{ numComments: 14, numLikes: 40, numVisits: 179 }}
        />
        <Deck
          image={'https://wallpaperaccess.com/full/288129.jpg'}
          name={'My First Deck'}
          format={'Teste'}
          stats={{ numComments: 14, numLikes: 40, numVisits: 179 }}
        />
        <Deck
          image={'https://wallpaperaccess.com/full/288129.jpg'}
          name={'My First Deck'}
          format={'Teste'}
          stats={{ numComments: 14, numLikes: 40, numVisits: 179 }}
        />
        <Deck
          image={'https://wallpaperaccess.com/full/288129.jpg'}
          name={'My First Deck'}
          format={'Teste'}
          stats={{ numComments: 14, numLikes: 40, numVisits: 179 }}
        />
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
