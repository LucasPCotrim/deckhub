import styled from 'styled-components';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { userApi } from '../../services/userApi';
import LoadingScreen from '../utils/LoadingScreen';
import { Link, Navigate } from 'react-router-dom';

type formType = {
  email: string;
  password: string;
};
export default function LoginForm() {
  const loginState = useMutation((form: formType) => {
    return userApi.login(form.email, form.password);
  });

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const clearForm = () => {
    setForm({
      email: '',
      password: '',
    });
  };
  const executeSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginState.mutate(form);
    clearForm();
  };

  if (loginState.isLoading) {
    return (
      <>
        <LoadingScreen message={'Loading...'} />
      </>
    );
  }

  if (loginState.isSuccess) {
    return <Navigate to='/' replace={true} />;
  }

  return (
    <>
      <LoginFormStyle onSubmit={executeSignUp}>
        <h1>Login with your account</h1>

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

        <div className='form-bottom prevent-link-decoration'>
          <h3>
            Don't have an account?{' '}
            <Link to={'/sign-up'}>
              <span>Register</span>
            </Link>
          </h3>
          <button>
            <h2>Enter</h2>
          </button>
        </div>
      </LoginFormStyle>
    </>
  );
}

const LoginFormStyle = styled.form`
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
    padding-left: 10px;
    width: 100%;
    height: 40px;
    background-color: #414141;
    border-radius: 8px;
    color: var(--quaternary-color);
  }
`;
