import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { useState, useContext } from 'react';
import useToken from '../../hooks/useToken';
import DecksContext from '../../contexts/DecksContext';
import { useMutation } from 'react-query';
import { deckApi } from '../../services/deckApi';

export default function SearchBar() {
  const [inputText, setInputText] = useState('');
  const { setDecksData } = useContext(DecksContext);
  const token = useToken();
  const cardsState = useMutation(
    (name: string) => deckApi.getDecks(token, { name: inputText }),
    {
      onSuccess: (data) => {
        setDecksData(data.data);
      },
    }
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
    cardsState.mutate(inputText);
  };
  const executeSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    cardsState.mutate(inputText);
    setInputText('');
  };

  return (
    <>
      <SearchBarStyle>
        <form onSubmit={executeSearch}>
          <div className='advanced-search'>Advanced Search</div>
          <input
            type='text'
            value={inputText}
            placeholder={'Enter Deck name'}
            onChange={handleChange}
          />
          <button>
            <MdSearch className='icon' />
          </button>
        </form>
      </SearchBarStyle>
    </>
  );
}

const SearchBarStyle = styled.div`
  position: relative;
  height: 48px;
  width: min(600px, 100%);
  background-color: var(--quaternary-color);
  border-radius: 12px;
  padding-left: 6px;
  padding-right: 4px;
  margin-bottom: 80px;
  border: 1px solid var(--tertiary-color);
  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  &:focus-within {
    -webkit-box-shadow: 0px 0px 10px 1px var(--tertiary-color);
    box-shadow: 0px 0px 10px 1px var(--tertiary-color);
    border: 1px solid cyan;
  }

  .advanced-search {
    position: absolute;
    top: -25px;
    right: 4px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  input {
    width: 100%;
    height: 90%;
    padding: 0 8px;
    font-size: 25px;
    background-color: var(--quaternary-color);
  }
  button {
    color: black;
    height: 85%;
    aspect-ratio: 1/1;
    background-color: var(--quaternary-color);
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: var(--secundary-color);
      > .icon {
        color: var(--quaternary-color);
      }
    }
    > .icon {
      color: black;
      font-size: 30px;
    }
  }
`;
