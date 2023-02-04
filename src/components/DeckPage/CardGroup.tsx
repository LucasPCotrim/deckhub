import styled from 'styled-components';
import Card from './Card';
import { CardType } from '../../contexts/DeckContext';

type Props = {
  title: string;
  cards: CardType[];
};
export default function CardTypeGroup({ title, cards }: Props) {
  const numberCardsInGroup = cards.reduce(
    (prev, curr) => prev + curr.amount,
    0
  );

  if (cards.length === 0) {
    return <></>;
  }
  return (
    <>
      <CardTypeGroupStyle>
        <GroupTitle>
          <h1>{`${title} (${numberCardsInGroup})`}</h1>
        </GroupTitle>
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </CardTypeGroupStyle>
    </>
  );
}

const CardTypeGroupStyle = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 7px;
  padding: 4px;
  margin-bottom: 50px;
  margin-right: 40px;
`;

const GroupTitle = styled.div`
  width: 100%;
  margin-bottom: 10px;
  h1 {
    font-size: 20px;
    font-weight: 300;
  }
`;
