import "./App.css";
import MyProvider from "./context/MyProvider";
import Giris from "./components/Giris";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const tarayiciKontrol = () => {
  // Tema Çekme
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  /* const theme = prefersDarkScheme ? "dark" : "light";

  if (theme === "dark") {
    return true;
  } else if (theme === "light") {
    return false;
  } */

  return prefersDarkScheme;
};

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("dark", tarayiciKontrol());

  console.log("TEMA DENEME", darkMode);

  useEffect(() => {
    // Tarayıcıdan dil çekme
    const userLang = navigator.language || navigator.userLanguage;
    console.log("Kullanıcı Dil Tercihi:", userLang);

    // Tema Çekme
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const theme = prefersDarkScheme ? "dark" : "light";
    console.log("Kullanıcı Tema Tercihi:", theme);
  }, []);

  const htmlClass = darkMode ? "dark" : null;

  return (
    <div className={htmlClass}>
      <MyProvider>
        <Giris setDarkMode={setDarkMode} darkMode={darkMode} />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </MyProvider>
    </div>
  );
}

export default App;
