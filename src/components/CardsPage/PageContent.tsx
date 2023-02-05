import styled from 'styled-components';
import SearchBar from './SearchBar';
import CardsBrowser from './CardsBrowser';

export default function PageContent() {
  return (
    <>
      <PageContentStyle>
        <SearchBar />
        <CardsBrowser />
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
