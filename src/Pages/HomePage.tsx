import styled from 'styled-components';
import TopMenu from '../components/TopMenu/TopMenu';

export default function HomePage() {
  return (
    <>
      <HomePageStyle>
        <TopMenu />
        <div className='cover-image'>
          <div className='top-blur-cover'></div>
          <img
            src='https://draftsim.com/wp-content/uploads/2020/05/Gift-of-Orzhova-MTG-card-art-by-Johannes-Voss-1024x748.jpg'
            alt='homepage cover'
            draggable='false'
          />
          <div className='bottom-blur-cover'></div>
        </div>
      </HomePageStyle>
    </>
  );
}

const HomePageStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .cover-image {
    position: relative;
    width: 100%;
    height: 700px;
    background-image: linear-gradient(
      to bottom,
      rgb(0, 0, 0),
      rgba(0, 0, 0, 1)
    );
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
      height: 150px;
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
  }
`;
