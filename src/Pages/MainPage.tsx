import TopMenu from '../components/TopMenu/TopMenu';
import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};
export default function MainPage({ children }: Props) {
  return (
    <>
      <MainPageStyle>
        <TopMenu />
        {children}
      </MainPageStyle>
    </>
  );
}

const MainPageStyle = styled.div`
  position: relative;
`;
