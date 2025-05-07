import { FolioHeader } from "./components/FolioHeader.jsx";

import { About } from "./components/About.jsx";
import { AboutMe } from "./components/AboutMe.jsx";
import { Experience } from "./components/Experience.jsx";
export default function App() {
  return (
    <>
      <FolioHeader />
      <About />
      <AboutMe/> 
      <Experience/>
    </>
  );
}
