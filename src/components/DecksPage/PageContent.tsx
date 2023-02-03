import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

export default function PageContent() {
  return (
    <>
      <PageContentStyle>
        <SearchBar>
          <div className='advanced-search'>Advanced Search</div>
          <input type='text' />
          <button>
            <MdSearch className='icon' />
          </button>
        </SearchBar>
      </PageContentStyle>
    </>
  );
}

const PageContentStyle = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 70px;
`;

const SearchBar = styled.div`
  position: relative;
  height: 48px;
  width: min(600px, 100%);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--quaternary-color);
  border-radius: 12px;
  padding-left: 6px;
  padding-right: 4px;
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
