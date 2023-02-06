import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

export default function CoverImage() {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);

  return (
    <>
      <CoverImageStyle className='prevent-select'>
        <div className='top-blur-cover'></div>
        <img
          src={userData.profilePic}
          alt='deckspage cover'
          draggable='false'
        />
        <div className='bottom-blur-cover'></div>
        <SideButtons>
          <div className='return-button' onClick={() => navigate(-1)}>
            <RiArrowGoBackLine />
          </div>
        </SideButtons>
      </CoverImageStyle>
    </>
  );
}

const CoverImageStyle = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  .top-blur-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 250px;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0) 0%,
      var(--primary-color) 100%
    );
  }
  .bottom-blur-cover {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 250px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      var(--primary-color) 100%
    );
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
