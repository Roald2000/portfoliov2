// Dependencies
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from "react";

import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";


// Local Imports
import Navigation from "./components/Navigation";
import BackToTopButton from "./components/BacktoTopButton";

import IntroSection from "./components/IntroSection";
import SkillSection from "./components/SkillSection";
import TechStack from "./components/TechStack";


const App = () => {
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {

    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

    // Toggles Light/Dark mode for the entire document
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

  }, [isDarkMode]);

  return (
    <>
      <BackToTopButton />
      <header>
        <Navigation />
        <button type="button" onClick={toggleDarkMode} className={`toggle-button ${isDarkMode ? 'dark-mode' : ''}`}>
          {isDarkMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
        </button>
      </header>
      <main>
        <IntroSection isDarkMode={isDarkMode} />
        <SkillSection isDarkMode={isDarkMode} />
        <TechStack isDarkMode={isDarkMode} />
      </main >
      <footer className='p-4'>
        <p className={`p-2 rounded-md my-6 ${isDarkMode ? ' text-black' : 'text-[#ffb800] bg-white'} w-fit mx-auto my-3`}>
          Portfolio | &copy; Roald Dela Cruz  2023
        </p>
      </footer>
    </>
  );
};

export default App;

