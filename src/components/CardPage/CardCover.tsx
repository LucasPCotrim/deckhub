import styled from 'styled-components';

type Props = { image: string };
export default function CardCover({ image }: Props) {
  return (
    <>
      <CardCoverStyle>
        <img src={image} alt='card cover' />
        <div className='left-shadow-overlay'></div>
        <div className='top-blur-cover'></div>
        <div className='bottom-blur-cover'></div>
      </CardCoverStyle>
    </>
  );
}

const CardCoverStyle = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-color: var(--secundary-color);
  .left-shadow-overlay {
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 0%,
      var(--secundary-color) 100%
    );
  }
  .top-blur-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
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
    height: 40px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      var(--primary-color) 100%
    );
  }
  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    height: 100%;
    object-fit: cover;
  }
`;
