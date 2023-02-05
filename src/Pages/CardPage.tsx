import styled from 'styled-components';
import PageContent from '../components/CardPage/PageContent';
import { CardProvider } from '../contexts/CardContext';

export default function CardPage() {
  return (
    <>
      <CardPageStyle>
        <CardProvider>
          <PageContent />
        </CardProvider>
      </CardPageStyle>
    </>
  );
}

const CardPageStyle = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
