import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProfilePic from './ProfilePic';
import useLoggedIn from '../../hooks/useLoggedIn';
import { BiBell, BiMessageRounded } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';

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
          <MenuButton>
            <Link to='/decks'>Decks</Link>
          </MenuButton>
          <MenuButton>
            <Link to='/cards'>Cards</Link>
          </MenuButton>
        </div>
        {loggedIn ? (
          <div className='options-group prevent-select'>
            <MenuButton>
              <BiBell className='icon' />
            </MenuButton>
            <MenuButton>
              <BiMessageRounded className='icon' />
            </MenuButton>
            <MenuButton>
              <BsPeople className='icon' />
            </MenuButton>
            <ProfilePic />
          </div>
        ) : (
          <AuthenticationButtons />
        )}
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
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 25px;
  }
`;

const MenuButton = styled.div`
  font-size: 16px;
  cursor: pointer;
  .icon {
    font-size: 22px;
  }
`;
