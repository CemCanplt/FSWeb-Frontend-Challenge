import { useContext } from "react";
import { MyContext } from "../context/MyProvider";

function Footer() {
  const { dilVerisi, ortakVeri } = useContext(MyContext);

  return (
    <footer className="py-12 px-40 flex place-content-center dark:bg-(--dark-skills)">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-(--hafif-mor) text-3xl font-bold dark:text-(--footer-mor)">
          {dilVerisi?.footer.title}
        </h2>
        <p className="text-black text-center w-72 dark:text-white">
          {dilVerisi?.footer.askMeAnything}
        </p>
        <p className="underline text-(--hafif-mor) dark:text-(--footer-mor)">
          {ortakVeri?.footer.gmail}
        </p>
        <div className="flex gap-2 place-content-center">
          {ortakVeri?.footer.links.map((link, index) => {
            return (
              <img
                className="hover:bg-(--acik-yesil) hover:rounded-lg hover:p-1 cursor-pointer"
                src={link.icon}
                href={link.iconLink}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
