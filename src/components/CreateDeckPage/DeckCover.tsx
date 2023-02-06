import styled from 'styled-components';
import { useContext } from 'react';
import CreateDeckContext from '../../contexts/CreateDeckContext';
import { deckApi } from '../../services/deckApi';
import { DeckDataType } from '../../contexts/CreateDeckContext';
import useToken from '../../hooks/useToken';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

export default function DeckCover() {
  const navigate = useNavigate();
  const token = useToken();
  const { deckData, setDeckData } = useContext(CreateDeckContext);
  const submitState = useMutation(
    (deckData: DeckDataType) => {
      return deckApi.createDeck(token, {
        name: deckData.name,
        image: deckData.image,
        format: deckData.format,
        cards: deckData.cards.map((c) => ({
          id: c.id,
          name: c.name,
          amount: c.amount,
        })),
      });
    },
    {
      onSuccess: (data) => {
        setDeckData({});
        navigate('/decks');
      },
    }
  );

  const handleSubmit = () => {
    submitState.mutate(deckData);
  };

  if (!deckData.name) return <></>;
  return (
    <>
      <DeckCoverStyle>
        <div className='deck-cover'>
          <ImageWrapper className='prevent-select'>
            <img src={deckData.image} alt='deck pic' />
            <div className='shadow-overlay'></div>
          </ImageWrapper>
          <DeckInfo>
            <header>
              <h1 className='title'>{deckData.name}</h1>
              <h2 className='format'>{deckData.format}</h2>
            </header>
          </DeckInfo>
        </div>
        <button onClick={handleSubmit}>
          <h2>Submit Deck</h2>
        </button>
      </DeckCoverStyle>
    </>
  );
}

const DeckCoverStyle = styled.div`
  width: 100%;
  align-self: flex-start;
  > h1 {
    align-self: flex-start;
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 30px;
  }
  .deck-cover {
    position: relative;
    width: 350px;
    height: 200px;
    background-color: var(--secundary-color);
    border-radius: 16px;
    border: 1px solid black;
    overflow: hidden;
    margin-bottom: 20px;
  }
  button {
    width: 170px;
    cursor: pointer;
    background-color: var(--quaternary-color);
    border: none;
    border-radius: 8px;
    padding: 8px;
    font-size: 20px;
    color: var(--primary-color);
  }
`;

const ImageWrapper = styled.div`
  .shadow-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 0px 80px 40px rgb(2, 2, 2);
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
`;

const DeckInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  header {
    position: absolute;
    top: 12px;
    left: 12px;
    width: 92%;
    .title {
      width: 92%;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .format {
      font-size: 18px;
      font-weight: 200;
    }
  }

  footer {
    position: absolute;
    bottom: 12px;
    left: 12px;
    width: 92%;
    height: 14px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;
  }
`;
