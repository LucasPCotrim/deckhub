import styled from 'styled-components';

export default function CoverImage() {
  return (
    <>
      <CoverImageStyle className='prevent-select'>
        <div className='top-blur-cover'></div>
        <img
          src='https://wallpaperaccess.com/full/1671590.jpg'
          alt='cardspage cover'
          draggable='false'
        />
        <div className='bottom-blur-cover'></div>
        <CardsPageHeader>
          <h1>Search for any Card</h1>
        </CardsPageHeader>
      </CoverImageStyle>
    </>
  );
}

const CoverImageStyle = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  .top-blur-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
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
    height: 300px;
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

const CardsPageHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h1 {
    font-size: 46px;
    font-weight: 700;
    margin-bottom: 18px;
  }
  > h2 {
    font-size: 24px;
  }
`;
