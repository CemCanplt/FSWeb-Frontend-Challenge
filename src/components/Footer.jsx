import { useContext } from "react";
import { MyContext } from "../context/MyProvider";

function Footer() {
  const { dilVerisi, ortakVeri } = useContext(MyContext);

  return (
    <footer className="py-12 px-40 ">
      <div className="flex flex-col items-center">
        <h2>{dilVerisi?.footer.title}</h2>
        <p></p>
        <p className="underline">{ortakVeri?.footer.gmail}</p>
        {/* iconlar ve sosyal medya */}
      </div>
    </footer>
  );
}

export default Footer;
