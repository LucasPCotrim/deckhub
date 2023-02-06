import styled from 'styled-components';
import CoverImage from '../components/CreateDeckPage/CoverImage';
import PageContent from '../components/CreateDeckPage/PageContent';
import useLoggedIn from '../hooks/useLoggedIn';
import { Navigate } from 'react-router-dom';
import { CreateDeckProvider } from '../contexts/CreateDeckContext';

export default function CreateDeckPage() {
  const loggedIn = useLoggedIn();

  if (!loggedIn) return <Navigate to={'/'} />;
  return (
    <>
      <CreateDeckPageStyle>
        <CreateDeckProvider>
          <CoverImage />
          <PageContent />
        </CreateDeckProvider>
      </CreateDeckPageStyle>
    </>
  );
}

const CreateDeckPageStyle = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
