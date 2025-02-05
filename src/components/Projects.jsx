import Proje from "../assets/Proje";
import { useContext } from "react";
import { MyContext } from "../context/MyProvider";

function Projects() {
  const { dilVerisi, ortakVeri } = useContext(MyContext);

  return (
    <div className="projem bg-(--acik-yesil) py-12 px-40 flex flex-col gap-10 dark:bg-(--dark-proje)">
      <div>
        <h1 className="text-(--hafif-mor) text-5xl font-bold dark:text-(--acik-yesil)">
          {dilVerisi?.projects.title}
        </h1>
      </div>
      <div className="flex flex-col gap-5">
        {dilVerisi?.projects.cards.map((card) => {
          return <Proje key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
