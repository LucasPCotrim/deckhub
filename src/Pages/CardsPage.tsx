import styled from 'styled-components';
import CoverImage from '../components/CardsPage/CoverImage';
import PageContent from '../components/CardsPage/PageContent';

export default function DecksPage() {
  return (
    <>
      <CardsPageStyle>
        <CoverImage />
        <PageContent />
      </CardsPageStyle>
    </>
  );
}

const CardsPageStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
