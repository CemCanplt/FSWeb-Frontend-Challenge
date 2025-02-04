import { useContext } from "react";
import { MyContext } from "../context/MyProvider";
import EverySkill from "../assets/EverySkill";

function Skills() {
  const { dilVerisi, ortakVeri } = useContext(MyContext);

  return (
    <div className="py-12 px-40 flex place-content-between gap-20 dark:bg-(--dark-skills)">
      <h1 className="text-(--hafif-mor) text-5xl font-bold">
        {dilVerisi?.skills.title}
      </h1>
      <div className="flex flex-wrap gap-10 h-auto w-120">
        {ortakVeri?.skills.map((skill) => {
          return <EverySkill key={skill.id} skill={skill} />;
        })}
      </div>
    </div>
  );
}

export default Skills;
