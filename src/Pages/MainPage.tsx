import TopMenu from '../components/TopMenu/TopMenu';
import { ReactNode } from 'react';

type props = {
  children: ReactNode;
};
export default function MainPage({ children }: props) {
  return (
    <>
      <TopMenu />
      {children}
    </>
  );
}
