import styled from 'styled-components';
import ProfileHeader from './ProfileHeader';
import DecksBrowser from './DecksBrowser';

export default function PageContent() {
  return (
    <>
      <PageContentStyle>
        <ProfileHeader />
        <DecksBrowser />
      </PageContentStyle>
    </>
  );
}

const PageContentStyle = styled.div`
  width: min(90%, 1200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 70px;
`;
