import styled from 'styled-components';
import DeckInfoForm from './DeckInfoForm';
import AddCardsSection from './AddCardsSection';
import DeckVisualization from './DeckVisualization';

export default function PageContent() {
  return (
    <>
      <PageContentStyle>
        <DeckInfoForm />
        <AddCardsSection />
        <DeckVisualization />
      </PageContentStyle>
    </>
  );
}

const PageContentStyle = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 70px;
`;
