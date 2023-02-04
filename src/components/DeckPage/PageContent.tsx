import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { deckApi } from '../../services/deckApi';
import useToken from '../../hooks/useToken';
import LoadingScreen from '../utils/LoadingScreen';
import DeckHeader from './DeckHeader';
import { useContext } from 'react';
import DeckContext from '../../contexts/DeckContext';
import DeckVisualization from './DeckVisualization';

export default function PageContent() {
  const { setDeckData } = useContext(DeckContext);
  const { id } = useParams();
  const token = useToken();
  const deckInfoQuery = useQuery(
    `deckInfo-${id}`,
    () => deckApi.getDeckInfo(token, Number(id)),
    {
      onSuccess: (data) => {
        setDeckData(data.data);
      },
    }
  );

  if (deckInfoQuery.isLoading) {
    return (
      <>
        <LoadingScreen message={'Loading...'} />
      </>
    );
  }

  return (
    <>
      <PageContentStyle>
        <DeckHeader />
        <DeckVisualization />
      </PageContentStyle>
    </>
  );
}

const PageContentStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 100px;
`;
