import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function useLoggedIn() {
  const { userData } = useContext(UserContext);

  return userData?.token !== undefined;
}
