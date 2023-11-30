import Carousel from "../../components/Slider/Slider";
import ContextComponent from "../../context/Context";
import { ThemeProvider } from "../../context/ThemeContext";
import "./Homepage.css";

function ProjectsPage() {
  return (
    <>
      <h1>Welcome to HighFashion!</h1>
      <u>
        <h2>Latest Summer Products</h2>
      </u>
      <Carousel />
      <footer>
        <p>&copy;</p>
      </footer>
      <ThemeProvider>
        <ContextComponent />
      </ThemeProvider>
    </>
  );
}

export default ProjectsPage;
//Home in navbar
