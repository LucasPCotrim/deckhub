import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Img1 from '../../assets/imgs/SetPhyrexiaAllWillBeOne.png';
import Img2 from '../../assets/imgs/MagicLogo.jpg';
import Img3 from '../../assets/imgs/MtgColors.jpg';

export default function HomeCarousel() {
  return (
    <>
      <HomeCarouselStyle className='prevent-select'>
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showArrows={true}
          showThumbs={false}
          showStatus={false}>
          <Item>
            <img src={Img1} alt='carousel1' />
            <div className='info'>
              <p>Start building decks with the most recent set</p>
            </div>
          </Item>
          <Item>
            <img src={Img2} alt='carousel2' />
            <div className='info'>
              <p>Download Magic Arena</p>
            </div>
          </Item>
          <Item>
            <img src={Img3} alt='carousel3' />
            <div className='info'>
              <p>Learn how to play Magic: the Gathering</p>
            </div>
          </Item>
        </Carousel>
      </HomeCarouselStyle>
    </>
  );
}

const HomeCarouselStyle = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  width: min(80%, 1000px);
  height: 300px;
`;

const Item = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  .info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: #000000b3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      font-size: 26px;
    }
  }
  img {
    height: 300px;
  }
  &:hover {
    .info {
      opacity: 1;
    }
  }
`;
