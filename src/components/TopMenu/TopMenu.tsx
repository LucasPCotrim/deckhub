import styled from 'styled-components';
import Logo from './Logo';

export default function TopMenu() {
  return (
    <>
      <TopMenuStyle>
        <Logo />
      </TopMenuStyle>
    </>
  );
}

const TopMenuStyle = styled.div`
  width: 100%;
  height: 70px;
  background-color: var(--tertiary-color);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 60px;
`;
