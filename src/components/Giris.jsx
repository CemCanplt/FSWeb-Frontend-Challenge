import { useContext } from "react";
import { MyContext } from "../context/MyProvider";

function Giris({ setDarkMode, darkMode }) {
  const { dilVerisi, ortakVeri, setDil, dil } = useContext(MyContext);

  return (
    <>
      <header className="bg-(--hafif-mor) py-12 px-30">
        <div className="flex place-content-between items-start">
          <p className="text-3xl">{ortakVeri?.giris.name}</p> {/* almila */}
          <div className="flex gap-4 items-center p-1">
            <p className="pb-0.5">
              {dilVerisi?.giris.onEk}
              <span
                className="dil cursor-pointer font-bold"
                onClick={() => setDil(dil === "tr" ? "en" : "tr")}
              >
                {" "}
                {/* Dil */}
                {dilVerisi?.giris.dil}
              </span>
              {dilVerisi?.giris.sonEk}
            </p>
            <label
              className={`switch flex items-center w-14 h-6 bg-[${
                darkMode ? "#55555" : "#8f88ff"
              }] cursor-pointer rounded-4xl`}
              htmlFor="darkMode"
            >
              <input
                className="hidden"
                id="darkMode"
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />

              <span className="slider flex items-center justify-end w-full h-full p-1 box-border transition-all duration-400"></span>
            </label>
            <label htmlFor="darkMode" className="cursor-pointer pb-0.5">
              {dilVerisi?.giris.darkMode} {/* dark mode */}
            </label>
          </div>
        </div>
      </header>
    </>
  );
}

export default Giris;
