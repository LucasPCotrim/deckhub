import styled from 'styled-components';
import CoverImage from '../components/SignupPage/CoverImage';
import Logo from '../components/TopMenu/Logo';
import { Link } from 'react-router-dom';

import SignupForm from '../components/SignupPage/SignupForm';

export default function SignupPage() {
  return (
    <>
      <SignupPageStyle>
        <CoverImage />
        <div className='page-content'>
          <div className='logo-wrapper prevent-link-decoration'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <SignupForm />
        </div>
      </SignupPageStyle>
    </>
  );
}

const SignupPageStyle = styled.div`
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
    margin-top: 170px;
    .logo-wrapper {
      transform: scale(1.3);
      margin-bottom: 90px;
    }
  }
`;
