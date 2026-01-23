import { useState } from "react";
import { songs } from "../../data";

export function useMusic() {
  const [allSongs, setallsong] = useState(songs);
  const [currentTrackidx, setcurrentTrackidx] = useState(0)

  function handlePlaySong(song, idx){
    setcurrentTrackidx(idx)
  }


  return { allSongs, currentTrackidx, handlePlaySong};
}
