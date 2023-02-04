import styled from 'styled-components';
import { FaComments, FaHeart, FaEye } from 'react-icons/fa';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

type Props = {
  author: {
    id: number;
    name: string;
    profilePic: string;
  };
  deckName: string;
  format: string;
  stats: {
    numVisits: number;
    numComments: number;
    numLikes: number;
  };
};
export default function DeckInfo({ author, deckName, format, stats }: Props) {
  const navigate = useNavigate();

  return (
    <>
      <DeckInfoStyle>
        <SideButtons>
          <div className='return-button' onClick={() => navigate(-1)}>
            <RiArrowGoBackLine />
          </div>
        </SideButtons>

        <HeaderInfo>
          <AuthorInfo>
            <img src={author.profilePic} alt='author profile pic' />
            <div className='author-name'>{author.name}</div>
          </AuthorInfo>
          <DeckName>
            <div className='name'>{deckName}</div>
            <div className='format'>{format}</div>
          </DeckName>
        </HeaderInfo>
        <FooterInfo className='prevent-select'>
          <DeckStats>
            <div className='deck-stats-wrapper'>
              <FaComments />
              <p>0</p>
            </div>
            <div className='deck-stats-wrapper'>
              <FaHeart />
              <p>0</p>
            </div>
            <div className='deck-stats-wrapper'>
              <FaEye />
              <p>{stats.numVisits}</p>
            </div>
          </DeckStats>
        </FooterInfo>
      </DeckInfoStyle>
    </>
  );
}

const DeckInfoStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 60px 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const SideButtons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 60px;
  .return-button {
    font-size: 24px;
    cursor: pointer;
  }
`;

const HeaderInfo = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const AuthorInfo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
  img {
    width: 60px;
    height: 60px;
    border: 2px solid var(--tertiary-color);
    border-radius: 50%;
    cursor: pointer;
  }
  .author-name {
    height: 100%;
    font-size: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const DeckName = styled.div`
  .name {
    font-size: 40px;
    margin-bottom: 12px;
  }
  .format {
    font-size: 24px;
    font-weight: 100;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const DeckStats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
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
`;
