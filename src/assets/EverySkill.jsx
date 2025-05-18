function EverySkill({ skill }) {
  return (
    <div className="skillsImage flex items-center gap-3 h-auto w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] p-3 rounded-lg transition-all">
      <img
        className="aspect-square w-14 sm:w-16 md:w-20 rounded-md object-contain"
        src={skill.img}
        alt="Kabiliyetin Görseli"
      />
      <p className="font-bold text-[#777777] dark:text-white">{skill.text}</p>
    </div>
  );
}

export default EverySkill;
