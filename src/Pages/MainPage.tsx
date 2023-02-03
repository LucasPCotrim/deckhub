import TopMenu from '../components/TopMenu/TopMenu';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function MainPage({ children }: Props) {
  return (
    <>
      <TopMenu />
      {children}
    </>
  );
}
