import styled from 'styled-components';
import { useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import ProfileSubMenu from './ProfileSubMenu';

export default function ProfilePic() {
  const { userData } = useContext(UserContext);
  const [subMenuSelected, setSubMenuSelected] = useState(false);

  const handleToggleProfileSubMenu = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    setSubMenuSelected(!subMenuSelected);
  };

  return (
    <>
      <ProfilePicStyle>
        <img
          src={userData.profilePic}
          alt='profile pic'
          onClick={handleToggleProfileSubMenu}
        />
        {subMenuSelected && (
          <ProfileSubMenu
            handleToggleProfileSubMenu={handleToggleProfileSubMenu}
          />
        )}
      </ProfilePicStyle>
    </>
  );
}

const ProfilePicStyle = styled.div`
  height: 70%;
  aspect-ratio: 1 / 1;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid var(--quaternary-color);
    cursor: pointer;
  }
`;
