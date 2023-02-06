import { createContext, ReactNode, useState } from 'react';

export type DeckType = {
  id: number;
  name: string;
  image: string;
  numVisits: number;
  createdAt: Date;
  updatedAt: Date;
  format: {
    id: number;
    name: string;
  };
};
export type ProfileDataType = {
  id: number;
  name: string;
  email: string;
  profilePic: string;
  createdAt: Date;
  decks: DeckType[];
};
type ProfileContextType = {
  profileData: ProfileDataType;
  setProfileData: (value: any) => void;
};
const ProfileContext = createContext({} as ProfileContextType);
export default ProfileContext;

interface Props {
  children?: ReactNode;
}
export function ProfileProvider({ children }: Props) {
  const initialProfileData = {
    id: 0,
    name: '',
    email: '',
    profilePic: '',
    createdAt: new Date(),
    decks: [],
  };
  const [profileData, setProfileData] =
    useState<ProfileDataType>(initialProfileData);

  return (
    <ProfileContext.Provider value={{ profileData, setProfileData }}>
      {children}
    </ProfileContext.Provider>
  );
}
