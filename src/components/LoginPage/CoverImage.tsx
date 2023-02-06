import styled from 'styled-components';
import coverImage from '../../assets/imgs/nicol-bolas.jpg';

export default function CoverImage() {
  return (
    <>
      <CoverImageStyle>
        <img src={coverImage} alt='login page cover' />
        <div className='right-blur-cover'></div>
      </CoverImageStyle>
    </>
  );
}

const CoverImageStyle = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
  .right-blur-cover {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      var(--primary-color) 100%
    );
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
