import styled from 'styled-components';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { FaComments, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

type Props = {
  name: string;
};
export default function CardInfo({ name }: Props) {
  const navigate = useNavigate();

  return (
    <>
      <CardInfoStyle>
        <SideButtons>
          <div className='return-button' onClick={() => navigate(-1)}>
            <RiArrowGoBackLine />
          </div>
        </SideButtons>
        <HeaderInfo>
          <CardName>
            <div className='name'>{name}</div>
          </CardName>
        </HeaderInfo>
        <FooterInfo className='prevent-select'>
          <CardStats>
            <div className='card-stats-wrapper'>
              <FaComments />
              <p>0</p>
            </div>
            <div className='card-stats-wrapper'>
              <FaHeart />
              <p>0</p>
            </div>
          </CardStats>
        </FooterInfo>
      </CardInfoStyle>
    </>
  );
}

const CardInfoStyle = styled.div`
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

const CardName = styled.div`
  .name {
    font-size: 40px;
    margin-bottom: 12px;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const CardStats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  .card-stats-wrapper {
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
