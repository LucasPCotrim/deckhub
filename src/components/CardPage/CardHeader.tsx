import styled from 'styled-components';
import CardCover from './CardCover';
import CardInfo from './CardInfo';
import { useContext } from 'react';
import CardContext from '../../contexts/CardContext';

export default function CardHeader() {
  const { cardData } = useContext(CardContext);
  return (
    <>
      <CardHeaderStyle>
        <CardCover image={cardData.imageArtCrop} />
        <CardInfo name={cardData.name} />
      </CardHeaderStyle>
    </>
  );
}

const CardHeaderStyle = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 50px;
`;
