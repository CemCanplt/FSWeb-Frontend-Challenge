function Proje({ card }) {
  return (
    <>
      <div className="bg-white rounded-lg flex gap-10 items-center">
        <div>
          <img
            className="text-[#383838] aspect-square w-250"
            src={card.img}
            alt="Soldaki Resim"
          />
        </div>
        <div className="p-4 flex flex-col gap-5">
          <h2 className="text-(--hafif-mor) text-3xl font-bold">
            {card.title}
          </h2>

          <p className="text-[#383838]">{card.text}</p>

          <div className="flex gap-2">
            {card.skills.map((skill, index) => {
              return (
                <p
                  className="bg-(--hafif-mor) text-white px-2 py-1 rounded-2xl"
                  key={index}
                >
                  {skill}
                </p>
              );
            })}
          </div>

          <div className="flex gap-5">
            <a className="text-[#120B39] underline" href={card.siteLink}>
              {card.site}
            </a>
            <a className="text-[#120B39] underline" href={card.githubLink}>
              {card.github}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Proje;
