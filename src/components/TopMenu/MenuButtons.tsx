import styled from 'styled-components';

export default function MenuButtons() {
  return (
    <>
      <MenuButtonsStyle>
        <div className='options-group prevent-select'>
          <MenuButton>Home</MenuButton>
          <MenuButton>Decks</MenuButton>
          <MenuButton>Cards</MenuButton>
        </div>
        <div className='options-group prevent-select'>
          <MenuButton>Login</MenuButton>
          <MenuButton>Register</MenuButton>
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
