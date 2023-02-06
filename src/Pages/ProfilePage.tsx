import styled from 'styled-components';
import CoverImage from '../components/UserPage/CoverImage';
import PageContent from '../components/UserPage/PageContent';
import { ProfileProvider } from '../contexts/ProfileContext';

export default function UserPage() {
  return (
    <>
      <ProfilePageStyle>
        <ProfileProvider>
          <CoverImage />
          <PageContent />
        </ProfileProvider>
      </ProfilePageStyle>
    </>
  );
}

const ProfilePageStyle = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
