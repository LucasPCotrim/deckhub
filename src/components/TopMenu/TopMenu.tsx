import styled from 'styled-components';
import Logo from './Logo';
import MenuOptions from './MenuButtons';
import { Link } from 'react-router-dom';

export default function TopMenu() {
  return (
    <>
      <TopMenuStyle className='prevent-link-decoration'>
        <Link to={'/'}>
          <Logo />
        </Link>
        <MenuOptions />
      </TopMenuStyle>
    </>
  );
}

const TopMenuStyle = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 50px;
  z-index: 1;
`;
