import styled, { keyframes } from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { authApi } from '../../services/authApi';
import useToken from '../../hooks/useToken';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';
import { useMutation } from 'react-query';

type Props = {
  handleToggleProfileSubMenu: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export default function ProfileSubMenu({ handleToggleProfileSubMenu }: Props) {
  const { setUserData } = useContext(UserContext);
  const token = useToken();

  const logoutState = useMutation(
    (token: string) => {
      return authApi.logout(token);
    },
    {
      onSuccess: async (data) => {
        setUserData({});
      },
    }
  );

  const handleLogout = (event: React.MouseEvent<HTMLDivElement>) => {
    logoutState.mutate(token);
  };
  return (
    <ProfileSubMenuStyle>
      <div
        className='background-mask'
        onClick={handleToggleProfileSubMenu}></div>
      <SubMenuPopUp>
        <div className='close-icon' onClick={handleToggleProfileSubMenu}>
          <IoMdClose className='icon' />
        </div>
        <div className='options-container'>
          <div className='option'>Profile</div>
          <div className='option' onClick={handleLogout}>
            Log out
          </div>
        </div>
      </SubMenuPopUp>
    </ProfileSubMenuStyle>
  );
}

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(-80%, -20%);
  }

  to {
    transform: translate(-80%, 0);
    opacity: 1;
  }
`;

const ProfileSubMenuStyle = styled.div`
  .background-mask {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #00000048;
    z-index: 0;
  }
`;

const SubMenuPopUp = styled.div`
  position: relative;
  bottom: -10px;
  right: 0;
  width: 150px;
  background-color: var(--primary-color);
  border-radius: 8px;
  transform: translate(-80%, 0);
  opacity: 0;
  animation-name: ${fadeInAnimation};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 0;
  overflow: hidden;
  z-index: 1;
  .close-icon {
    color: var(--quaternary-color);
    position: absolute;
    top: 0px;
    right: 0px;
    width: 30px;
    height: 30px;
    padding: 2px;
    display: flex;
    align-items: center;
    flex-direction: center;
    font-size: 20px;
    cursor: pointer;
  }

  .options-container {
    display: flex;
    flex-direction: column;

    .option {
      padding: 12px;
      font-size: 14px;
      width: 100%;
      cursor: pointer;
      &:hover {
        background-color: var(--secundary-color);
      }
    }
  }
`;
