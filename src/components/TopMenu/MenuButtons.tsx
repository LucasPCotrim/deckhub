import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProfilePic from './ProfilePic';
import useLoggedIn from '../../hooks/useLoggedIn';

function AuthenticationButtons() {
  return (
    <>
      <div className='options-group prevent-select'>
        <MenuButton>
          <Link to='/login'>Login</Link>
        </MenuButton>
        <MenuButton>
          <Link to='/sign-up'>Register</Link>
        </MenuButton>
      </div>
    </>
  );
}

export default function MenuButtons() {
  const loggedIn = useLoggedIn();
  return (
    <>
      <MenuButtonsStyle className='prevent-link-decoration'>
        <div className='options-group prevent-select'>
          <MenuButton>
            <Link to='/'>Home</Link>
          </MenuButton>
          <MenuButton>Decks</MenuButton>
          <MenuButton>Cards</MenuButton>
        </div>
        {loggedIn ? <ProfilePic /> : <AuthenticationButtons />}
      </MenuButtonsStyle>
    </>
  );
}

const MenuButtonsStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .options-group {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 25px;
  }
`;

const MenuButton = styled.div`
  font-size: 16px;
  cursor: pointer;
`;
