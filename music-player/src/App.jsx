import Navbar from "./components/Navbar";
import Allsongs from "./components/Allsongs";
import MusicPlayer from "./components/MusicPlayer";

import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Playlist from "./components/Playlist";
import { MusicProvider } from "./context/MusicContext"; // Use MusicProvider instead


function App() {
  return (
    <BrowserRouter>
      <MusicProvider> {/* Use MusicProvider instead of MusicContext.Provider */}
      <div className="app">
        <Navbar />
        <main className="app-main">
          <div className="player-section">
            <MusicPlayer />
          </div>
          <div className="content-section">
            <Routes>
              <Route element={<Allsongs/>} path="/" />
              <Route element={<Playlist/>} path="/playlists" />
            </Routes>
          </div>
        </main>
      </div>
      </MusicProvider>
    </BrowserRouter>
  );
}

export default App;
