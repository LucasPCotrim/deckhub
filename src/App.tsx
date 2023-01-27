import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import GlobalStyle from './assets/Globalstyle';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/sign-up' element={<SignupPage />} />
            <Route path='/login' element={<h1>LoginPage</h1>} />
            <Route path='/home' element={<h1>HomePage</h1>} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}
