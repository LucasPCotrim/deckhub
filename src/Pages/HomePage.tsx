import styled from 'styled-components';
import CoverImage from '../components/HomePage/CoverImage';
import HomeCarousel from '../components/HomePage/HomeCarousel';

export default function HomePage() {
  return (
    <>
      <HomePageStyle>
        <CoverImage />
        <HomeCarousel />
      </HomePageStyle>
    </>
  );
}

const HomePageStyle = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
