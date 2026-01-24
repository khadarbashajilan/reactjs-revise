import { useEffect, useRef } from "react";
import { useMusicContext } from "../context/MusicContext.jsx";

const MusicPlayer = () => {
  const {
    currentTrack,
    setcurrentTime,
    prevTrack,
    nxtTrack,
    setDuration,
    formatTime,
    duration,
    currentTime,
    isPlaying,
    pause,
    play,
    setcurrentTrack  
  } = useMusicContext();

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    

    const handleloadedmetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeupdate = () => {
      setcurrentTime(audio.currentTime)
    };

    const handleEnded = () => {
      nxtTrack()
    };

       // Set up audio event listeners to update UI when audio events occur
    audio.addEventListener("loadedmetadata", handleloadedmetadata); // When metadata loads (duration available)
    audio.addEventListener("timeupdate", handleTimeupdate);       // When playback position changes
    audio.addEventListener("ended", handleEnded);                 // When track finishes playing
    
    return () => {
      audio.removeEventListener("loadedmetadata", handleloadedmetadata);
      audio.removeEventListener("timeupdate", handleTimeupdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrack, setDuration, setcurrentTime, setcurrentTrack]);

  const handleTimeChange = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newTime = parseFloat(e.target.value)
    audio.currentTime=newTime
    setcurrentTime(newTime)
  }

  useEffect(() => {

    const audio = audioRef.current

    if(isPlaying){
      audio.play().catch(err => console.error(err)) 
    }else{
      audio.pause()
    }

  }, [isPlaying])

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src={currentTrack.url}
        preload="metadata"
        crossOrigin="anonymous"
      />
      <div className="track-info">
        <h3 className="track-title">{currentTrack.title}</h3>
        <p className="track-artist">{currentTrack.artist}</p>
      </div>
      <div className="progress-container">
        <span className="time">{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={duration || 0}
          step="0.1"
          value={currentTime || 0}
          className="progress-bar"
          // style={{}}
          onChange={(e)=> handleTimeChange(e)}
        />
        <span className="time">{formatTime(duration)}</span>
      </div>
    
      <div className="controls">
        <button className="control-btn" onClick={prevTrack}>
          ⏮
        </button>

        <button
          className="control-btn play-btn"
          onClick={() => (isPlaying ? pause() : play())}
        >
          {isPlaying ? "⏸" : "▶"}

        </button>

        <button className="control-btn" onClick={nxtTrack}>
          ⏭
        </button>
      </div>


    </div>
  );
};

export default MusicPlayer;
