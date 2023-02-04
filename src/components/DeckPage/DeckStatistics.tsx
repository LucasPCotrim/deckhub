import styled from 'styled-components';
import { useContext } from 'react';
import DeckContext, { DeckDataType } from '../../contexts/DeckContext';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip } from 'recharts';
import { TooltipProps } from 'recharts';

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>): JSX.Element => {
  if (active) {
    return (
      <div className='custom-tooltip'>
        <p className='label'>{`${label}`}</p>
        <p className='label'>{`${payload?.[0].value} cards`}</p>
      </div>
    );
  }

  return <></>;
};

export default function DeckStatistics() {
  const { deckData } = useContext(DeckContext);
  const cmcsObject = getCMCsFromDeck(deckData);
  const objKeys = Object.keys(cmcsObject);
  const data = [
    {
      cmc: 'CMC 0',
      amount: cmcsObject[0] || 0,
    },
    {
      cmc: 'CMC 1',
      amount: cmcsObject[1] || 0,
    },
    {
      cmc: 'CMC 2',
      amount: cmcsObject[2] || 0,
    },
    {
      cmc: 'CMC 3',
      amount: cmcsObject[3] || 0,
    },
    {
      cmc: 'CMC 4',
      amount: cmcsObject[4] || 0,
    },
    {
      cmc: 'CMC 5',
      amount: cmcsObject[5] || 0,
    },
    {
      cmc: 'CMC 6+',
      amount: objKeys
        .filter((key) => Number(key) >= 6)
        .reduce((prev: number, curr: string) => prev + cmcsObject[curr], 0),
    },
  ];

  return (
    <>
      <DeckStatisticsStyle>
        <div className='top-blur-cover'></div>
        <SectionTitle>
          <h1>Mana Value Distribution</h1>
        </SectionTitle>
        <BarChart
          className='cmc-bar-chart'
          width={700}
          height={300}
          data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='cmc' />
          <YAxis />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: 'var(--tertiary-color)' }}
          />
          <Bar label={true} dataKey='amount' fill='var(--quaternary-color)' />
        </BarChart>
      </DeckStatisticsStyle>
    </>
  );
}

function getCMCsFromDeck(deck: DeckDataType) {
  const cmcs: { [index: string]: any } = {};
  const nonLandCards = deck.cards.filter(
    (card) => card.typeLine.indexOf('Land') < 0
  );
  for (const card of nonLandCards) {
    if (!cmcs[card.cmc]) {
      cmcs[card.cmc] = card.amount;
    } else {
      cmcs[card.cmc] += card.amount;
    }
  }
  return cmcs;
}

const DeckStatisticsStyle = styled.div`
  position: relative;
  width: 100%;
  height: 900px;
  background-color: var(--tertiary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .top-blur-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 600px;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0) 0%,
      var(--primary-color) 100%
    );
  }
  .cmc-bar-chart {
    .custom-tooltip {
      background-color: #04293a;
      border-radius: 10px;
      border: 1px solid var(--tertiary-color);
      box-shadow: 0px 0px 3px 1px cyan;
      padding: 10px;
      p {
        color: var(--quaternary-color);
        margin-bottom: 9px;
      }
    }
  }
`;

const SectionTitle = styled.div`
  z-index: 1;
  margin-bottom: 20px;
  h1 {
    font-size: 30px;
    color: var(--quaternary-color);
  }
`;
