import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './assets/Globalstyle';
import HomePage from './Pages/HomePage';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sign-up' element={<h1>SignupPage</h1>} />
          <Route path='/login' element={<h1>LoginPage</h1>} />
          <Route path='/home' element={<h1>HomePage</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

