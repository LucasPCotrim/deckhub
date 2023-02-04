import styled from 'styled-components';
import CardTypeGroup from './CardGroup';
import { useContext } from 'react';
import DeckContext, { CardType } from '../../contexts/DeckContext';

export default function DeckVisualization() {
  const { deckData } = useContext(DeckContext);
  console.log(deckData);
  const cards = deckData.cards;
  const cardTypeGroups = getCardTypeGroups(cards);

  return (
    <>
      <DeckVisualizationStyle>
        {cardTypeGroups.map((cardTypeGroup, index) => (
          <CardTypeGroup
            key={index}
            title={cardTypeGroup.title}
            cards={cardTypeGroup.cards}
          />
        ))}
      </DeckVisualizationStyle>
    </>
  );
}

function getCardTypeGroups(cards: CardType[]) {
  const creatureCards = [];
  const artifactCards = [];
  const instantCards = [];
  const sorceryCards = [];
  const enchantmentCards = [];
  const planeswalkerCards = [];
  const landCards = [];

  for (const card of cards) {
    const cardType = card.typeLine
      .split('—')[0]
      .replace('Legendary', '')
      .trim();
    card.typeLine = cardType;
    if (cardType.indexOf('Creature') >= 0) {
      creatureCards.push(card);
      continue;
    }
    if (cardType.indexOf('Artifact') >= 0) {
      artifactCards.push(card);
      continue;
    }
    if (cardType.indexOf('Instant') >= 0) {
      instantCards.push(card);
      continue;
    }
    if (cardType.indexOf('Sorcery') >= 0) {
      sorceryCards.push(card);
      continue;
    }
    if (cardType.indexOf('Enchantment') >= 0) {
      enchantmentCards.push(card);
      continue;
    }
    if (cardType.indexOf('Planeswalker') >= 0) {
      planeswalkerCards.push(card);
      continue;
    }
    if (cardType.indexOf('Land') >= 0) {
      landCards.push(card);
      continue;
    }
    throw new Error('Card type not found!');
  }

  const numberCardsInGroup = (cardGroup: CardType[]) =>
    cardGroup.reduce((prev, curr) => prev + curr.amount, 0);

  return [
    {
      title: 'Creatures',
      cards: creatureCards,
      amount: numberCardsInGroup(creatureCards),
    },
    {
      title: 'Artifacts',
      cards: artifactCards,
      amount: numberCardsInGroup(artifactCards),
    },
    {
      title: 'Instants',
      cards: instantCards,
      amount: numberCardsInGroup(instantCards),
    },
    {
      title: 'Sorceries',
      cards: sorceryCards,
      amount: numberCardsInGroup(sorceryCards),
    },
    {
      title: 'Enchantments',
      cards: enchantmentCards,
      amount: numberCardsInGroup(enchantmentCards),
    },
    {
      title: 'Planeswalkers',
      cards: planeswalkerCards,
      amount: numberCardsInGroup(planeswalkerCards),
    },
    {
      title: 'Lands',
      cards: landCards,
      amount: numberCardsInGroup(landCards),
    },
  ].sort((a, b) => b.cards.length - a.cards.length);
}

const DeckVisualizationStyle = styled.div`
  width: 100%;
  padding: 20px 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  flex-wrap: wrap;
`;
