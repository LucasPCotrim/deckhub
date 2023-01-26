import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function MenuButtons() {
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
        <div className='options-group prevent-select'>
          <MenuButton>Login</MenuButton>
          <MenuButton>
            <Link to='/sign-up'>Register</Link>
          </MenuButton>
        </div>
      </MenuButtonsStyle>
    </>
  );
}

const MenuButtonsStyle = styled.div`
  width: 100%;
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
