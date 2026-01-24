import { useState } from "react";
import { songs } from "../../data.js";

export function useMusic() {

  const [allSongs, setallsongs] = useState(songs);
  const [currentTrack, setcurrentTrack] = useState(allSongs[0]);
  const [currentTrackidx, setcurrentTrackidx] = useState(0);
  const [currentTime, setcurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlaySong(song, idx) {
    setcurrentTrack(song);
    setcurrentTrackidx(idx);
    setIsPlaying(prev => !prev)
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

  return {
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
  };
}

