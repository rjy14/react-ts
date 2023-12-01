import ContextComponent from "../../context/Context";
import { ThemeProvider } from "../../context/ThemeContext";
import "./Homepage.css";

function ProjectsPage() {
  return (
    <>
      <ThemeProvider>
        <ContextComponent />
      </ThemeProvider>
    </>
  );
}

export default ProjectsPage;
//Home in navbar
