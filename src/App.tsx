import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import GlobalStyle from './assets/Globalstyle';
import MainPage from './pages/MainPage';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import DecksPage from './pages/DecksPage';
import DeckPage from './pages/DeckPage';
import CardsPage from './pages/CardsPage';
import { UserProvider } from './contexts/UserContext';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path='/'
                element={
                  <MainPage>
                    <HomePage />
                  </MainPage>
                }
              />
              <Route path='/sign-up' element={<SignupPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route
                path='/decks'
                element={
                  <MainPage>
                    <DecksPage />
                  </MainPage>
                }
              />
              <Route
                path='/deck/:id'
                element={
                  <MainPage>
                    <DeckPage />
                  </MainPage>
                }
              />
              <Route
                path='/cards'
                element={
                  <MainPage>
                    <CardsPage />
                  </MainPage>
                }
              />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
}
