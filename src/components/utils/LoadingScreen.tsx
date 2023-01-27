import styled from 'styled-components';
import { Audio } from 'react-loader-spinner';

type LoadingScreenPropsType = { message: string };
export default function LoadingScreen({ message }: LoadingScreenPropsType) {
  return (
    <>
      <LoadingPageStyle>
        <Audio
          wrapperClass={'loader'}
          height={'80'}
          width={'80'}
          color={'#c0dde1'}
        />
        <MessageWrapper>{message}</MessageWrapper>
      </LoadingPageStyle>
    </>
  );
}

const LoadingPageStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000000ac;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

const MessageWrapper = styled.div`
  font-size: 30px;
  margin-top: 30px;
`;
