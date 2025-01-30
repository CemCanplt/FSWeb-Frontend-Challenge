import { useContext } from "react";
import { MyContext } from "../context/MyProvider";

function Giris({ setDarkMode, darkMode }) {
  const { data } = useContext(MyContext);

  return (
    <>
      <p>{data.test}</p>
      <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>
    </>
  );
}

export default Giris;
