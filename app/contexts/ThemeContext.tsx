import React, { createContext, useContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';

type Theme = 'light' | 'dark'; // Remove 'undefined' (Automatic)

type ThemeContextType = {
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: Appearance.getColorScheme() === 'dark' ? 'dark' : 'light', // Default to 'light' if system theme is not 'dark'
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(Appearance.getColorScheme() === 'dark' ? 'dark' : 'light');

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      // Set theme to 'light' or 'dark' based on system preference
      setTheme(colorScheme === 'dark' ? 'dark' : 'light');
    });

    return () => subscription.remove();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider;