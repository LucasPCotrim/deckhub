import styled from 'styled-components';
import CoverImage from '../components/CardsPage/CoverImage';
import PageContent from '../components/CardsPage/PageContent';
import { CardsProvider } from '../contexts/CardsContext';

export default function DecksPage() {
  return (
    <>
      <CardsPageStyle>
        <CardsProvider>
          <CoverImage />
          <PageContent />
        </CardsProvider>
      </CardsPageStyle>
    </>
  );
}

const CardsPageStyle = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
