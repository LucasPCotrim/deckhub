import styled from 'styled-components';
import PageContent from '../components/CreateDeckPage/PageContent';

export default function CreateDeckPage() {
  return (
    <>
      <CreateDeckPageStyle>
        <PageContent />
      </CreateDeckPageStyle>
    </>
  );
}

const CreateDeckPageStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
