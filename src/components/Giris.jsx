import { useContext } from "react";
import { MyContext } from "../context/MyProvider";

function Giris() {
  const { data } = useContext(MyContext);

  return <p>{data.test}</p>;
}

export default Giris;
