/* eslint-disable react-refresh/only-export-components */
// Import React context tools and our music logic hook
import { createContext, useContext } from 'react';
import { useMusic } from './useMusic';

// Create a context to share music data across components
const MusicContext = createContext();

// Provider component that makes music data available to child components
export const MusicProvider = ({ children }) => {
  const music = useMusic(); // Get all music state and functions
  return (
    //Makes music data available to all child components
    // Wraps components with access to the music context 
    // 'value={music}' provides the actual music data to components 
    // children will be <App /> in this case

    <MusicContext.Provider value={music}>
      {children}
    </MusicContext.Provider>
  );
};

// Custom hook to easily access music context in any component
export const useMusicContext = () => useContext(MusicContext);


// What if I just use useMusic() directly across all components ? :

// Each component would have its own independent instance of the music state
// This means:
// 1. No automatic synchronization between components
// 2. Changes in one component wouldn't update others
// 3. You'd have multiple separate copies of the music state
// 4. Memory usage would increase as each component maintains its own state

// Example of the problem:
// Component A calls useMusic() and plays track 1
// Component B calls useMusic() and shows track 2
// If Component A changes to track 3, Component B won't know about it

// This approach would work for:
// - Very simple apps with minimal state
// - Components that don't need to share music state
// - Cases where you want completely separate music players

// For most applications, especially those with shared music playback,
// using React Context with a custom hook is the recommended approach
// as it provides a single source of truth for music state
// and ensures all components see the same data and updates
