import styled from 'styled-components';

export default function PageContent() {
  return (
    <>
      <PageContentStyle></PageContentStyle>
    </>
  );
}

const PageContentStyle = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 70px;
`;
