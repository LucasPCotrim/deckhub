import styled from 'styled-components';
import PageContent from '../components/DeckPage/PageContent';
import { DeckProvider } from '../contexts/DeckContext';

export default function DeckPage() {
  return (
    <>
      <DeckPageStyle>
        <DeckProvider>
          <PageContent />
        </DeckProvider>
      </DeckPageStyle>
    </>
  );
}

const DeckPageStyle = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-x: hidden;
`;
