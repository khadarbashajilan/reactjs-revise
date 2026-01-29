import { useState } from "react";
import { useMusicContext } from "../context/MusicContext";

const Playlist = () => {
  const [newplaylistName, setnewplaylistName] = useState("");
  const [selectedPlaylist, setselectedPlaylist] = useState(null);
  const [searchQuery, setsearchQuery] = useState("");
  const [showDropdown, setshowDropdown] = useState(false);

  const {
    createPlaylist,
    playlists,
    deletePlaylist,
    allSongs,
    currentTrackidx,
    addSongToPlaylist,
    handlePlaySong
  } = useMusicContext();

  const handleCreatePlaylist = () => {
    if (newplaylistName.trim()) {
      createPlaylist(newplaylistName.trim());
      setnewplaylistName("");
    }
  };

  const deletePlaylistConfirmation = (playlist) => {
    if (window.confirm(`Are you sure you want to delete "${playlist.name}"?`)) {
      deletePlaylist(playlist.id);
    }
  };

  const filteredSongs = allSongs.filter((song) => {
    const matches =
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase());

    const isAlreadyInPlaylist = selectedPlaylist?.songs?.some(
      (playlistSong) => playlistSong.id === song.id,
    );

    return matches && !isAlreadyInPlaylist;
  });

  const handleAddsong = (song) => {
    if (selectedPlaylist) {
      addSongToPlaylist(selectedPlaylist.id, song);
      setsearchQuery("");
      setshowDropdown(false);
    }
  };

  const handlePlayFromPlaylist = (song) =>{ 
    const SongIndex = allSongs.findIndex((s) => s.id === song.id)
    handlePlaySong(song,SongIndex )
  }

  return (
    <div className="playlists">
      <h2>Playlists</h2>
      <div className="create-playlist">
        <h3>Create New Playlist</h3>
        <div className="playlist-form">
          <input
            type="text"
            placeholder="Playlist Name ..."
            className="playlist-input"
            onChange={(e) => setnewplaylistName(e.target.value)}
            value={newplaylistName}
          />
          <button className="create-btn" onClick={handleCreatePlaylist}>
            Create
          </button>
        </div>
      </div>
      {/* Playlists List */}
      <div className="playlists-list">
        {!playlists || playlists.length === 0 ? (
          <p className="empty-message">No playlists created yet</p>
        ) : (
          playlists.map((playlist, key) => (
            <div className="playlist-item" key={key}>
              <div className="playlist-header">
                <h3>{playlist.name}</h3>
                <div className="playlist-actions">
                  <button
                    onClick={() => deletePlaylistConfirmation(playlist)}
                    className="delete-playlist-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Add Song Search */}
              <div className="add-song-section">
                <div className="search-container">
                  <input
                    className="song-search-input"
                    type="text"
                    placeholder="Search songs to add..."
                    value={
                      selectedPlaylist?.id === playlist.id ? searchQuery : ""
                    }
                    onChange={(e) => {
                      setsearchQuery(e.target.value);
                      setselectedPlaylist(playlist);
                      setshowDropdown(e.target.value.length > 0);
                    }}
                  />

                  {/* show user ip matching songs by artist name, song title  (i mean dropdown)*/}
                  {selectedPlaylist?.id === playlist.id && showDropdown && (
                    <div className="song-dropdown">
                      {filteredSongs.length === 0 ? (
                        <div className="dropdown-itmes no-results">
                          No Songs Found
                        </div>
                      ) : (
                        filteredSongs.slice(0, 5).map((song, key) => (
                          <div
                            className="dropdown-item"
                            onClick={() => handleAddsong(song)}
                            key={key}
                          >
                            <span>{song.title}</span>
                            <span>{song.artist}</span>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="playlist-songs">
                {playlist.songs?.length === 0 ? (
                  <p className="empty-playlist">No songs in this playlist</p>
                ) : (
                  playlist.songs?.map((song, key) => (
                    <div key={key}  className={`playlist-song ${
                        currentTrackidx ===
                        allSongs.findIndex((s) => s.id === song.id)
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handlePlayFromPlaylist(song)}
                    >
                      <div className="song-info">
                        <span className="song-title">{song.title}</span>
                        <span className="song-artist">{song.artist}</span>
                      </div>
                      <span className="song-duration">{song.duration}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Playlist;
