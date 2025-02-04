function EverySkill({ skill }) {
  return (
    <div className="flex items-center gap-5 h-auto w-55">
      <img className="aspect-square w-20 rounded-md" src={skill.img} alt="Kabiliyetin Görseli" />
      <p className="font-bold text-[#777777] dark:text-white">{skill.text}</p>
    </div>
  );
}

export default EverySkill;
