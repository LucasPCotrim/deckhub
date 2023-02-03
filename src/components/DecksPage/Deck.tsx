import styled from 'styled-components';
import { FaComments, FaHeart, FaEye } from 'react-icons/fa';

type props = {
  image: string;
  name: string;
  format: string;
  stats: { numComments: number; numLikes: number; numVisits: number };
};
export default function Deck({ image, name, format, stats }: props) {
  return (
    <>
      <DeckStyle>
        <ImageWrapper className='prevent-select'>
          <img src={image} alt='deck pic' />
          <div className='shadow-overlay'></div>
        </ImageWrapper>
        <DeckInfo>
          <header>
            <h1 className='title'>{name}</h1>
            <h2 className='format'>{format}</h2>
          </header>
          <footer>
            <div className='deck-stats-wrapper'>
              <FaComments />
              <p>{stats.numComments}</p>
            </div>
            <div className='deck-stats-wrapper'>
              <FaHeart />
              <p>{stats.numLikes}</p>
            </div>
            <div className='deck-stats-wrapper'>
              <FaEye />
              <p>{stats.numVisits}</p>
            </div>
          </footer>
        </DeckInfo>
      </DeckStyle>
    </>
  );
}

const DeckStyle = styled.div`
  position: relative;
  width: 350px;
  height: 200px;
  background-color: var(--secundary-color);
  border-radius: 16px;
  border: 1px solid black;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    border: 1px solid var(--tertiary-color);
    box-shadow: 0px 0px 5px 2px var(--tertiary-color);
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

    .deck-stats-wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 7px;
      p {
        font-size: 14px;
        font-weight: 100;
      }
    }
  }
`;
