import styled from 'styled-components';
import DeckCover from './DeckCover';
import { useContext } from 'react';
import DeckContext from '../../contexts/DeckContext';
import DeckInfo from './DeckInfo';

export default function DeckHeader() {
  const { deckData } = useContext(DeckContext);
  const stats = {
    numVisits: deckData.numVisits,
    numLikes: 0,
    numComments: 0,
  };
  return (
    <>
      <DeckHeaderStyle>
        <DeckCover img={deckData.image} />
        <DeckInfo author={deckData.user} stats={stats} />
      </DeckHeaderStyle>
    </>
  );
}

const DeckHeaderStyle = styled.div`
  position: relative;
  width: 100%;
  background-color: cyan;
`;
