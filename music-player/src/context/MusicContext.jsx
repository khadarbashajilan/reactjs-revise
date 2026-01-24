/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';
import { useMusic } from './useMusic';

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const music = useMusic();
  return (
    <MusicContext.Provider value={music}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => {
    
  return useContext(MusicContext);

};