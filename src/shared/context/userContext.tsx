import React, { useEffect } from 'react';
import { useUserData } from '../../hooks/useUserData';
import { useDispatch } from 'react-redux';
import { setToken } from '../../store';
import { timeout } from '../../App';

export interface IUserContextData {
  name?: string;
  iconImg?: string;
}

export const userContext = React.createContext<IUserContextData>({});

export function UserContextProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(timeout(3000));
    if (window.__token__) {
      dispatch(setToken(window.__token__));
    }
  }, []);

  const [data] = useUserData();

  return (
    <userContext.Provider value={data}>
      {children}
    </userContext.Provider>
  );
}
