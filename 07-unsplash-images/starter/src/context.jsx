import { createContext, useContext, useState, useEffect } from 'react';
import { BsSortNumericDownAlt } from 'react-icons/bs';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);

    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', newTheme);
  }

  const value = { isDarkTheme, toggleDarkTheme }

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}