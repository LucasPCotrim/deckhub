import styled from 'styled-components';
import CoverImage from '../components/DecksPage/CoverImage';
import PageContent from '../components/DecksPage/PageContent';

export default function DecksPage() {
  return (
    <>
      <DecksPageStyle>
        <CoverImage />
        <PageContent />
      </DecksPageStyle>
    </>
  );
}

const DecksPageStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
