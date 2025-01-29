import "./App.css";
import MyProvider from "./context/MyProvider";
import Giris from "./components/Giris";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <MyProvider>
      <Giris />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </MyProvider>
  );
}

export default App;
