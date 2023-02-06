import styled from 'styled-components';
import { useState } from 'react';
import { useContext } from 'react';
import CreateDeckContext from '../../contexts/CreateDeckContext';

export default function DeckInfoForm() {
  const { deckData, setDeckData } = useContext(CreateDeckContext);
  const [form, setForm] = useState({
    name: '',
    format: '',
  });
  const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const clearForm = () => {
    setForm({
      name: '',
      format: '',
    });
  };
  const submitDeckInfo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      ![
        'standard',
        'pioneer',
        'modern',
        'legacy',
        'pauper',
        'vintage',
        'commander',
      ].includes(form.format)
    ) {
      alert('Invalid format!');
      return;
    }
    setDeckData({
      ...deckData,
      name: form.name,
      format: form.format,
      image:
        'https://static.wixstatic.com/media/b8195e_a0d0efd9c7824510811bea33f95499a7~mv2.jpg/v1/fit/w_640%2Ch_389%2Cal_c%2Cq_80/file.jpg',
    });
    clearForm();
  };
  if (deckData.name && deckData.format) {
    return <></>;
  }

  return (
    <>
      <DeckInfoFormStyle onSubmit={submitDeckInfo}>
        <h1>Create a new Deck</h1>
        <InputWrapper>
          <h2>Deck Name</h2>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleForm}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <h2>Format</h2>
          <input
            type='text'
            name='format'
            value={form.format}
            onChange={handleForm}
            placeholder={
              'Ex: standard, modern, commander, legacy, pioneer, pauper, vintage'
            }
            required
          />
        </InputWrapper>
        <button>
          <h2>Submit</h2>
        </button>
      </DeckInfoFormStyle>
    </>
  );
}

const DeckInfoFormStyle = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 25px;
  margin-bottom: 100px;
  > h1 {
    align-self: flex-start;
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 30px;
  }

  button {
    width: 100px;
    cursor: pointer;
    background-color: var(--quaternary-color);
    border: none;
    border-radius: 8px;
    padding: 8px;
    font-size: 20px;
    color: var(--primary-color);
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  > h2 {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 10px;
  }
  > input {
    padding-left: 10px;
    width: 100%;
    height: 40px;
    background-color: #414141;
    border-radius: 8px;
    color: var(--quaternary-color);
  }
`;
