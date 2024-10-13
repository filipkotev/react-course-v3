import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchTerm, setSearchTerm] = useState('cat');

  const toggleDarkTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);

    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', newTheme);
  }

  const value = { isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}