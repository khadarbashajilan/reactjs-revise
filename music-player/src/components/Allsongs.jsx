import { useMusicContext } from "../context/MusicContext"

const Allsongs = () => {

  const { allSongs, currentTrackidx, handlePlaySong, isPlaying} = useMusicContext()

  return (
    <div>
      <h2>All Songs ({allSongs.length})</h2>
      <div className="songs-grid">
        {allSongs.map((song, key) => (
          <div
          key={key}
          className={`song-card  ${currentTrackidx === key ? "active": ""}`}
          onClick={()=>handlePlaySong(song, key)}
          >
            <div className="song-info">
              <h3 className="song-title">{song.title}</h3>
              <p className="song-artist">{song.artist}</p>
              <p className="song-duration">{song.duration}</p>
            </div>
          <div className="play-button">
              {isPlaying === true && currentTrackidx === key ? "♪" : "▶"}
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Allsongs
