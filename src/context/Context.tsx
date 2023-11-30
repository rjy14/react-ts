import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function ContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2 rem",
    margin: "2 rem",
  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>This Theme</div>
    </>
  );
}
