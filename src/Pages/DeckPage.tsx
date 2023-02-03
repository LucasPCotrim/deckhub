import styled from 'styled-components';

import PageContent from '../components/DeckPage/PageContent';

export default function DeckPage() {
  return (
    <>
      <DeckPageStyle>
        <PageContent />
      </DeckPageStyle>
    </>
  );
}

const DeckPageStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
