import styled from 'styled-components';

type Props = {
  id: number;
  name: string;
  image: string;
};
export default function Card({ id, name, image }: Props) {
  return (
    <>
      <CardStyle>
        <ImageWrapper className='prevent-select'>
          <img src={image} alt='card pic' />
        </ImageWrapper>
      </CardStyle>
    </>
  );
}

const CardStyle = styled.div`
  position: relative;
  width: 250px;
  aspect-ratio: 0.71428571428;
  border-radius: 14px;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    border: 1px solid var(--tertiary-color);
    box-shadow: 0px 0px 5px 2px var(--tertiary-color);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 14px;
  }
`;
