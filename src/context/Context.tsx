import Carousel from "../components/Carousel/Carousel";
import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function ContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "white",
    color: darkTheme ? "white" : "#333",
    margin: "2 rem",
  };

  return (
    <>
      <button onClick={toggleTheme}>Dark Mode</button>
      <div style={themeStyles}>
        <h1 style={{ color: themeStyles.color }}>Welcome to HighFashion!</h1>
        <u>
          <h2>Latest Summer Products</h2>
        </u>
        <Carousel />
        <footer>
          <p>&copy;</p>
        </footer>
      </div>
    </>
  );
}
