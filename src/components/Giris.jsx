import { useContext } from "react";
import { MyContext } from "../context/MyProvider";

function Giris({ setDarkMode, darkMode }) {
  const { dilVerisi, ortakVeri } = useContext(MyContext);

  return (
    <>
      <p>{ortakVeri?.giris.name}</p>
      <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>
    </>
  );
}

export default Giris;
