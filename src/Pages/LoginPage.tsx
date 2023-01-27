import styled from 'styled-components';
import CoverImage from '../components/LoginPage/CoverImage';
import Logo from '../components/TopMenu/Logo';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginPage/LoginForm';

export default function SignupPage() {
  return (
    <>
      <LoginPageStyle>
        <CoverImage />
        <div className='page-content'>
          <div className='logo-wrapper prevent-link-decoration'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <LoginForm />
        </div>
      </LoginPageStyle>
    </>
  );
}

const LoginPageStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  .page-content {
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 170px;
    .logo-wrapper {
      transform: scale(1.3);
      margin-bottom: 90px;
    }
  }
`;
