import styled from 'styled-components';

export default function CoverImage() {
  return (
    <>
      <CoverImageStyle className='prevent-select'>
        <div className='top-blur-cover'></div>
        <img
          src='https://images.alphacoders.com/265/265693.png'
          alt='deckspage cover'
          draggable='false'
        />
        <div className='bottom-blur-cover'></div>
        <DecksPageHeader>
          <h1>What will you create?</h1>
        </DecksPageHeader>
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

const DecksPageHeader = styled.div`
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
