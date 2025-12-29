import "./App.css";
import AllSongs from "./components/AllSongs";
import MusicPlayer from "./components/MusicPlayer";
import { Route, BrowserRouter , Routes } from "react-router";
import PlayList from "./components/PlayList";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      {/* NavBar */}
      <main className="app-main">
        <div className="music-player">
          <MusicPlayer />
        </div>
        <div className="content-section">
          <Routes>
            <Route path="/" element={<AllSongs/>}/>
            <Route path="/playlists" element={<PlayList/>}/>
          </Routes>
        </div>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
