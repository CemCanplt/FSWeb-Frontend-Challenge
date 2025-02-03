import { useContext } from "react";
import { MyContext } from "../context/MyProvider";

function Giris({ setDarkMode, darkMode }) {
  const { dilVerisi, ortakVeri } = useContext(MyContext);

  return (
    <>
      <header className="bg-(--hafif-mor) py-12 px-30">
        <div className="flex place-content-between items-start">
          <p className="text-3xl">{ortakVeri?.giris.name}</p> {/* almila */}
          <div className="flex gap-4 content-center">
            <p className="">
              {dilVerisi?.giris.onEk}
              <span className="dil " onClick={null}>
                {" "}
                {/* Dil */}
                {dilVerisi?.giris.dil}
              </span>
              {dilVerisi?.giris.sonEk}
            </p>
            <label className="switch" htmlFor="darkMode">
              <input
                id="darkMode"
                type="checkbox"
                checked={darkMode}
                onClick={() => setDarkMode(!darkMode)}
              />
              <span className="slider"></span>
            </label>
            <label htmlFor="darkMode">
              {dilVerisi?.giris.darkMode} {/* dark mode */}
            </label>
          </div>
        </div>
      </header>
    </>
  );
}

export default Giris;
