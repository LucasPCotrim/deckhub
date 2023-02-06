import styled from 'styled-components';
import { useContext } from 'react';
import ProfileContext from '../../contexts/ProfileContext';
import { useQuery } from 'react-query';
import { userApi } from '../../services/userApi';
import LoadingScreen from '../utils/LoadingScreen';
import { useParams } from 'react-router-dom';

export default function ProfileHeader() {
  const { id } = useParams();
  const { profileData, setProfileData } = useContext(ProfileContext);
  const userQuery = useQuery(
    `user-data-${id}`,
    () => userApi.getUserInfo(Number(id)),
    {
      onSuccess: (data) => {
        setProfileData(data.data);
      },
    }
  );
  if (userQuery.isLoading) {
    return (
      <>
        <LoadingScreen message={'Loading...'} />
      </>
    );
  }

  return (
    <>
      <ProfileHeaderStyle>
        <ProfilePic>
          <img src={profileData.profilePic} alt='' />
        </ProfilePic>
        <ProfileInfo>
          <div className='profile-name'>{profileData.name}</div>
          <div className='member-since'>{`Member since ${new Date(
            profileData.createdAt
          ).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}`}</div>
        </ProfileInfo>
      </ProfileHeaderStyle>
    </>
  );
}

const ProfileHeaderStyle = styled.div`
  transform: translateY(-200px);
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: -50px;
`;

const ProfilePic = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid var(--quaternary-color);
  overflow: hidden;
  margin-bottom: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ProfileInfo = styled.div`
  .profile-name {
    font-size: 46px;
    font-weight: 700;
    margin-bottom: 18px;
  }
  > h2 {
    font-size: 24px;
  }
`;
