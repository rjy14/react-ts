import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

type ThemeContextType = boolean;
type ThemeUpdateContextType = () => void;

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const ThemeUpdateContext = createContext<ThemeUpdateContextType | undefined>(
  undefined
);

export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  const toggleTheme: ThemeUpdateContextType = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
