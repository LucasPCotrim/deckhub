import styled from 'styled-components';
import DeckCover from './DeckCover';

export default function DeckHeader() {
  return (
    <>
      <DeckHeaderStyle>
        <DeckCover />
      </DeckHeaderStyle>
    </>
  );
}

const DeckHeaderStyle = styled.div`
  width: 100%;
  height: 200px;
  background-color: cyan;
`;
