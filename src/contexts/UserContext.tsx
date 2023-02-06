import { createContext, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

type userContextValue = {
  userData: {
    id: number;
    token: string;
    name: string;
    email: string;
    profilePic: string;
    createdAt: Date;
  };
  setUserData: (value: any) => void;
};
const UserContext = createContext({} as userContextValue);
export default UserContext;

interface Props {
  children?: ReactNode;
}
export function UserProvider({ children }: Props) {
  const [userData, setUserData] = useLocalStorage('userData', {});

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
