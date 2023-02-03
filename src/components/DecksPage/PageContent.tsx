import styled from 'styled-components';
import SearchBar from './SearchBar';
import DecksBrowser from './DecksBrowser';

export default function PageContent() {
  return (
    <>
      <PageContentStyle>
        <SearchBar />
        <DecksBrowser />
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
