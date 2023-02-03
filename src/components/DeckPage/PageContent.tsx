import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { deckApi } from '../../services/deckApi';
import useToken from '../../hooks/useToken';
import LoadingScreen from '../utils/LoadingScreen';

export default function PageContent() {
  const { id } = useParams();
  const token = useToken();
  const deckInfoQuery = useQuery(`deckInfo-${id}`, () =>
    deckApi.getDeckInfo(token, Number(id))
  );
  console.log(deckInfoQuery);

  if (deckInfoQuery.isLoading) {
    return (
      <>
        <LoadingScreen message={'Loading...'} />
      </>
    );
  }

  return (
    <>
      <PageContentStyle></PageContentStyle>
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
