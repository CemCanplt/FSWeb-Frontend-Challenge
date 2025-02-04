import { useContext } from "react";
import { MyContext } from "../context/MyProvider";

function Giris({ setDarkMode, darkMode }) {
  const { dilVerisi, ortakVeri, setDil, dil } = useContext(MyContext);

  return (
    <div className="girisArkaPlani bg-(--hafif-mor) py-12 px-40 flex flex-col gap-20">
      <header className="font-bold">
        <div className="flex place-content-between items-start">
          <h1 className="text-3xl">{ortakVeri?.giris.name}</h1> {/* almila */}
          <div className="flex gap-4 items-center p-1">
            <p className={/* "pb-0.5" */ ""}>
              {dilVerisi?.giris.onEk}
              <span
                className="dil cursor-pointer font-bold 
                focus:outline-none hover:bg-black hover:rounded-lg 
                hover:p-1 dark:hover:bg-white
               dark:hover:text-black"
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
                darkMode ? "#55555" : "#3730A3"
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
            <label
              htmlFor="darkMode"
              className={
                /* "cursor-pointer pb-0.5" */ "cursor-pointer text-(--hafif-mor)"
              }
            >
              {dilVerisi?.giris.darkMode} {/* dark mode */}
            </label>
          </div>
        </div>
      </header>
      <div className="ozet flex place-content-between items-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-bold">{dilVerisi?.giris.title}</h1>
          <p className="text-white">{dilVerisi?.giris.text}</p>
          <div className="flex gap-4 items-center">
            <a
              className="flex place-content-between gap-3 items-center
               text-(--koyu-mor) bg-white border border-gray-300
                focus:outline-none hover:bg-gray-100 focus:ring-4
                 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
                  dark:bg-gray-900 dark:text-white dark:border-gray-600
                   dark:hover:bg-gray-700 dark:hover:border-gray-600
                    dark:focus:ring-gray-700"
              href={ortakVeri?.giris.links.github}
            >
              <img src={ortakVeri?.giris.linkImage.github} alt="githubLogo" />
              {ortakVeri?.giris.linkText.github}
            </a>
            <a
              className="flex gap-3 place-content-between items-center
               text-(--koyu-mor) bg-white border border-gray-300
                focus:outline-none hover:bg-gray-100 focus:ring-4
                 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
                  dark:bg-gray-900 dark:text-white dark:border-gray-600
                   dark:hover:bg-gray-700 dark:hover:border-gray-600
                    dark:focus:ring-gray-700"
              href={ortakVeri?.giris.links.linkedIn}
            >
              <img
                src={ortakVeri?.giris.linkImage.linkedIn}
                alt="linkedInLogo"
              />
              {ortakVeri?.giris.linkText.linkedIn}
            </a>
          </div>
        </div>
        <div>
          <img src={ortakVeri?.giris.img} alt="resim" />
        </div>
      </div>
    </div>
  );
}

export default Giris;

// {/* <label className="relative inline-block w-12 h-6">
//         <input
//           type="checkbox"
//           className="hidden"
//           checked={darkMode}
//           onChange={() => setDarkMode(!darkMode)}
//         />

//         {/* Switch arka planı */}
//         <span
//           className={`
//       absolute inset-0 cursor-pointer rounded-full transition
//       ${darkMode ? "bg-[#3730A3]" : "bg-[#8F88FF]"}
//       peer-focus:ring-2 peer-focus:ring-blue-500
//     `}
//         ></span>

//         {/* Sarı daire */}
//         <span
//           className={`
//       absolute top-1 left-1 w-4 h-4 bg-[#FFE86E] rounded-full transition-transform
//       ${darkMode ? "translate-x-6" : ""}
//     `}
//         >
//           {/* Dark mode aktifken yarım ay efekti için maskeleme elemanı */}
//           {darkMode && (
//             <span className="absolute right-2 w-4 h-4 bg-[#3730A3] rounded-full" />
//           )}
//         </span>
//       </label>

//       <p className="text-[#CBF281] text-sm">DARK MODE</p> */}
