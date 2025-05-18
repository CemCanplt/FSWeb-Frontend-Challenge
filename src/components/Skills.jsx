import { useContext } from "react";
import { MyContext } from "../context/MyProvider";
import EverySkill from "../assets/EverySkill";

function Skills() {
  const { dilVerisi, ortakVeri } = useContext(MyContext);

  return (
    <div className="skills py-8 sm:py-12 px-4 sm:px-8 md:px-16 lg:px-40 flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-20 dark:bg-(--dark-skills)">
      <h1 className="text-(--hafif-mor) text-3xl sm:text-4xl md:text-5xl font-bold dark:text-(--acik-yesil)">
        {dilVerisi?.skills.title}
      </h1>
      <div className="skillsMapi flex flex-wrap justify-center lg:justify-end gap-4 md:gap-6 lg:gap-8 h-auto w-full lg:w-auto max-w-4xl mx-auto lg:mx-0">
        {ortakVeri?.skills.map((skill) => {
          return <EverySkill key={skill.id} skill={skill} />;
        })}
      </div>
    </div>
  );
}

export default Skills;
