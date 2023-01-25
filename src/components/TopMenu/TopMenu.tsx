import styled from 'styled-components';
import Logo from './Logo';
import MenuOptions from './MenuButtons';

export default function TopMenu() {
  return (
    <>
      <TopMenuStyle>
        <Logo />
        <MenuOptions />
      </TopMenuStyle>
    </>
  );
}

const TopMenuStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 50px;
  z-index: 1;
`;
