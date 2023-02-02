import styled from 'styled-components';
import TopMenu from '../components/TopMenu/TopMenu';
import CoverImage from '../components/HomePage/CoverImage';
import HomeCarousel from '../components/HomePage/HomeCarousel';

export default function HomePage() {
  return (
    <>
      <HomePageStyle>
        <TopMenu />
        <CoverImage />
        <HomeCarousel />
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
`;
