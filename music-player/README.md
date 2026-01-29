# Music Player Application

A modern music player built with React 19 and Vite, featuring playlist management and audio playback functionality.

## Features

- **Song Library**: Browse and play all available songs
- **Playlist Management**: Create, view, and manage playlists
- **Audio Playback**: Play, pause, skip tracks with full audio controls
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with Tailwind CSS styling

## Technologies Used

- **Frontend**: React 19
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router 7.12.0
- **State Management**: React Context API
- **Audio Handling**: HTML5 Audio API
- **Linting**: ESLint 9.39.1

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/music-player.git
   ```

2. Navigate to the project directory:
   ```bash
   cd music-player
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. **Browse Songs**: View all available songs in the library
2. **Create Playlists**: Navigate to the Playlists tab to create new playlists
3. **Add Songs**: Search and add songs to your playlists
4. **Play Music**: Click on any song to start playback
5. **Control Playback**: Use the player controls to play, pause, skip tracks

## Project Structure

```
music-player/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── Allsongs.jsx # Displays all songs in the library
│   │   ├── MusicPlayer.jsx # Audio player controls
│   │   ├── Navbar.jsx # Navigation component
│   │   └── Playlist.jsx # Playlist management
│   ├── context/        # React context providers
│   │   └── MusicContext.jsx # Global music state management
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── data.js             # Song data
├── package.json        # Project configuration
└── README.md           # Project documentation
```

## Key Components

1. **MusicContext.jsx**:
   - Manages global music state
   - Provides playback controls
   - Handles song and playlist data
   - Contains the `handlePlaySong` function for playing tracks

2. **Allsongs.jsx**:
   - Displays all available songs
   - Shows song information (title, artist, duration)
   - Handles song selection and playback
   - Uses the `useMusicContext` hook to access music data

3. **MusicPlayer.jsx**:
   - Provides audio playback controls
   - Handles volume control
   - Displays current track information
   - Contains the `handleVolumeChange` function for volume adjustments

4. **Navbar.jsx**:
   - Navigation component
   - Provides links to All Songs and Playlists
   - Shows active route highlighting
   - Uses React Router's `useLocation` hook

5. **Playlist.jsx**:
   - Manages playlist creation and management
   - Allows adding songs to playlists
   - Displays existing playlists
   - Handles playlist deletion

## Development Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build

## Styling Approach

The application uses CSS with utility classes defined in `index.css`. Key styling features include:

- Responsive grid layout for songs
- Navigation bar styling
- Song card styling with hover effects
- Player control styling
- Active state highlighting

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Version Information

- React: 19.2.0
- React Router: 7.12.0
- Vite: 7.2.4
- ESLint: 9.39.1