# Memory Card Game

A classic memory matching game built with React, Vite, and Tailwind CSS.

## Features

- Classic memory card matching game
- Responsive design that works on all devices
- Smooth animations and transitions
- Score tracking
- Game state management
- Modern UI with Tailwind CSS styling

## Technologies Used

- **Frontend**: React 19
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.7
- **Linting**: ESLint 9.39.1
- **Bundling**: Vite with React plugin

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/memory-game.git
   ```

2. Navigate to the project directory:
   ```bash
   cd memory-game
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Gameplay

1. Click on cards to flip them over
2. Try to find matching pairs
3. Match all pairs to win the game
4. Track your score and time

## Project Structure

```
memory-game/
├── public/
│   ├── vite.svg          # Default Vite icon
│   └── (other static assets)
├── src/
│   ├── components/      # React components
│   │   ├── Card.jsx     # Individual card component
│   │   ├── GameHeader.jsx # Game header component
│   │   └── Winmessage.jsx # Win message component
│   ├── hooks/           # Custom hooks
│   │   └── useGamelogics.js # Game logic hook
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── package.json         # Project configuration
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
└── README.md            # Project documentation
```

## Key Files

1. **index.css**: Contains all the styling for the game cards and grid
2. **main.jsx**: Application entry point that renders the React app
3. **vite.config.js**: Configuration for Vite build tool
4. **eslint.config.js**: ESLint configuration for code quality

## Development Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build

## Styling Approach

The game uses Tailwind CSS for styling with custom classes defined in `index.css`. Key styling features include:

- Responsive grid layout for cards
- Card flip animations
- State-based styling for matched and flipped cards
- Hover and active states for interactive elements

## ESLint Configuration

The ESLint configuration includes:
- React-specific rules
- React Hooks rules
- React Refresh plugin for Vite
- Custom rules for unused variables

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Version Information

- React: 19.2.0
- Vite: 7.2.4
- Tailwind CSS: 4.1.7
- ESLint: 9.39.1