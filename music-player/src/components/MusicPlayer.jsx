import { useEffect, useRef, useState } from "react";
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
    volume,
    setVolume,
    setcurrentTrack,
  } = useMusicContext();

  const audioRef = useRef(null);
 

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleloadedmetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeupdate = () => {
      setcurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      nxtTrack();
    };

    // Set up audio event listeners to update UI when audio events occur
    audio.addEventListener("loadedmetadata", handleloadedmetadata); // When metadata loads (duration available)
    audio.addEventListener("timeupdate", handleTimeupdate); // When playback position changes
    audio.addEventListener("ended", handleEnded); // When track finishes playing

    return () => {
      audio.removeEventListener("loadedmetadata", handleloadedmetadata);
      audio.removeEventListener("timeupdate", handleTimeupdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrack, setDuration, setcurrentTime, setcurrentTrack]);

  const handleTimeChange = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setcurrentTime(newTime);
  };

  // mute muisic and volumer bar functionality:
  const [muted, setmuted] = useState(false);

  function handleVolumeChange(e) {
    if(muted){
      setVolume(0)
      return
    }
      
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
  }

const handleVollogo = () => {
  if(muted && volume != 0 ){
    setmuted(false)
  }
  else if (muted && volume === 0) {
    // If we're muted or at zero, we want sound.
    // If volume was 0, we bump it to 1% so they hear something.
    if (volume === 0) setVolume(0.01); 
    setmuted(false);
  } else {
    // If sound is playing, just mute it.
    setmuted(true);
  }
};
  // mute vol / inc or dec vol :

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.muted = muted;
    audioRef.current.volume = volume;

  }, [volume, muted]);

  // control btns - play / pause :

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.play().catch((err) => console.error(err));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const progressPercentageSong = duration > 0 ? (currentTime / duration) * 100 : 0;
  const progressPercentageVol = muted ? 0 : (volume  * 100);

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
          style={{"--progress": `${progressPercentageSong}%`}}
          onChange={(e) => handleTimeChange(e)}
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

      <div className="volume-container">
        <span
          className="volume-icon"
          onClick={ handleVollogo}
        >
          {muted ? "🔇" :  volume != 0 ? volume > 0.5 ? "🔊" : "🔉":  "🔇"  }
        </span>
        <input
          type="range"
          min="0"
          max={`${muted ? "0" : "1"}`}
          step="0.01"
          className="volume-bar"
          onChange={(e) => handleVolumeChange(e)}
          style={{"--progress": `${progressPercentageVol}%`}}
          value={volume}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
