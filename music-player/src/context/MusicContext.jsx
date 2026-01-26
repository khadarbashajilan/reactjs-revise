/* eslint-disable react-refresh/only-export-components */
// Import React context tools and our music logic hook
import { createContext, useContext } from "react";
import { useState } from "react";
import { songs } from "../../data.js";
// Create a context to share music data across components
const MusicContext = createContext();

// Provider component that makes music data available to child components
export const MusicProvider = ({ children }) => {
  const [allSongs, setallsongs] = useState(songs);
  const [currentTrack, setcurrentTrack] = useState(allSongs[0]);
  const [currentTrackidx, setcurrentTrackidx] = useState(0);
  const [currentTime, setcurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [volume, setVolume] = useState(0.2);

  function handlePlaySong(song, idx) {
    setcurrentTrack(song);
    setcurrentTrackidx(idx);
    setIsPlaying((prev) => !prev);
  }

  const formatTime = (time) => {
    if (isNaN(time) || time === undefined) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const play = () => setIsPlaying(true);

  const pause = () => setIsPlaying(false);

  const nxtTrack = () => {
    setcurrentTrackidx((prev) => {
      const nxtIdx = (prev + 1) % allSongs.length;
      setcurrentTrack(allSongs[nxtIdx]);
      return nxtIdx;
    });
    pause();
  };

  const prevTrack = () => {
    setcurrentTrackidx((prev) => {
      const prevIdx = prev === 0 ? allSongs.length - 1 : prev - 1;
      setcurrentTrack(allSongs[prevIdx]);
      return prevIdx;
    });
    pause();
  };
  return (

    <MusicContext.Provider
      value={{
        isPlaying,
        play,
        pause,
        allSongs,
        currentTrackidx,
        setcurrentTrack,
        prevTrack,
        nxtTrack,
        currentTime,
        setDuration,
        formatTime,
        setcurrentTime,
        duration,
        currentTrack,
        handlePlaySong,
        volume,
        setVolume,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

// Custom hook to easily access music context in any component
export const useMusicContext = () => {
  const contextValue = useContext(MusicContext)
  if(!contextValue){
    throw Error("useMusicContext must be inside the music provider")
  }
  return contextValue;
}
