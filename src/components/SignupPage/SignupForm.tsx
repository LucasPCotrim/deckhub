import styled from 'styled-components';
import { useState } from 'react';

export default function SignupForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
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
      email: '',
      password: '',
      passwordConfirm: '',
    });
  };
  const executeSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    clearForm();
    event.preventDefault();
  };

  return (
    <>
      <SignupFormStyle onSubmit={executeSignUp}>
        <h1>Create an account</h1>
        <InputWrapper>
          <h2>Username</h2>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleForm}
          />
        </InputWrapper>

        <InputWrapper>
          <h2>E-mail</h2>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleForm}
          />
        </InputWrapper>

        <InputWrapper>
          <h2>Password</h2>
          <input
            type='password'
            name='password'
            value={form.password}
            onChange={handleForm}
          />
        </InputWrapper>

        <InputWrapper>
          <h2>Confirm Password</h2>
          <input
            type='password'
            name='passwordConfirm'
            value={form.passwordConfirm}
            onChange={handleForm}
          />
        </InputWrapper>
        <div className='form-bottom'>
          <h3>
            Already have an account? <span>Sign in</span>
          </h3>
          <button>
            <h2>Join</h2>
          </button>
        </div>
      </SignupFormStyle>
    </>
  );
}

const SignupFormStyle = styled.form`
  height: 300px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
  > h1 {
    align-self: flex-start;
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 30px;
  }
  .form-bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 15px;
      font-weight: 200;
      span {
        color: cyan;
      }
    }

    > button {
      width: 100px;
      cursor: pointer;
      background-color: var(--quaternary-color);
      border: none;
      border-radius: 8px;
      padding: 8px;
      font-size: 20px;
      color: var(--primary-color);
    }
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
    width: 100%;
    height: 40px;
    background-color: #414141;
    border-radius: 8px;
  }
`;