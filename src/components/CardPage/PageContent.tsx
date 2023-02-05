import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { cardApi } from '../../services/cardApi';
import useToken from '../../hooks/useToken';
import LoadingScreen from '../utils/LoadingScreen';
import { useContext } from 'react';
import CardContext from '../../contexts/CardContext';
import CardHeader from './CardHeader';
import CardVisualization from './CardVisualization';

export default function PageContent() {
  const { setCardData } = useContext(CardContext);
  const { id } = useParams();
  const token = useToken();
  const cardInfoQuery = useQuery(
    `cardInfo-${id}`,
    () => cardApi.getCardInfo(token, Number(id)),
    {
      onSuccess: (data) => {
        setCardData(data.data);
      },
    }
  );

  if (cardInfoQuery.isLoading) {
    return (
      <>
        <LoadingScreen message={'Loading...'} />
      </>
    );
  }

  return (
    <>
      <PageContentStyle>
        <CardHeader />
        <CardVisualization />
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
