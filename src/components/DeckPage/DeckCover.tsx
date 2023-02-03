import styled from 'styled-components';

export default function DeckCover() {
  return (
    <>
      <DeckCoverStyle></DeckCoverStyle>
    </>
  );
}

const DeckCoverStyle = styled.div`
  width: 100%;
  height: 300px;
  background-color: green;
`;
