import styled from 'styled-components';
import SearchBar from './SearchBar';
import CardsBrowser from './CardsBrowser';
import { useContext } from 'react';
import CreateDeckContext from '../../contexts/CreateDeckContext';

export default function AddCardsSection() {
  const { deckData } = useContext(CreateDeckContext);

  if (!deckData.name) {
    return <></>;
  }
  return (
    <>
      <AddCardsSectionStyle>
        <h1>Add Cards</h1>
        <SearchBar />
        <CardsBrowser />
      </AddCardsSectionStyle>
    </>
  );
}

const AddCardsSectionStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  > h1 {
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 60px;
  }
`;
