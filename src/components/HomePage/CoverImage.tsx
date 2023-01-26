import styled from 'styled-components';

export default function CoverImage() {
  return (
    <>
      <CoverImageStyle className='prevent-select'>
        <div className='top-blur-cover'></div>
        <img
          src='https://wallpaperset.com/w/full/c/a/a/483573.jpg'
          alt='homepage cover'
          draggable='false'
        />
        <div className='bottom-blur-cover'></div>
        <HomePageHeader>
          <h1>Build, Share and Discover decks</h1>
          <h2>A social network for Magic: the Gathering</h2>
        </HomePageHeader>
      </CoverImageStyle>
    </>
  );
}

const CoverImageStyle = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  .top-blur-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 400px;
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

const HomePageHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 700px;
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
