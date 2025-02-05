import { useContext } from "react";
import { MyContext } from "../context/MyProvider";

function Profile() {
  const { dilVerisi, ortakVeri } = useContext(MyContext);

  return (
    <div className="profil py-12 px-40 flex flex-col bg-(--hafif-mor) dark:bg-(--dark-mavi) gap-5 ">
      <div>
        <h1 className="text-5xl font-bold">{dilVerisi?.profile.title}</h1>
      </div>
      <div className="profilAlti flex place-content-between items-start gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl text-white">
            {dilVerisi?.profile.basics.basicTitle}
          </h2>
          <div className="bilgi flex gap-5">
            <p>{dilVerisi?.profile.basics.dogumSoru}</p>
            <p className="text-white">{dilVerisi?.profile.basics.dogum}</p>
          </div>

          <div className="bilgi flex gap-5">
            <p>{dilVerisi?.profile.basics.ikametSoru}</p>
            <p className="text-white">{dilVerisi?.profile.basics.ikamet}</p>
          </div>

          <div className="bilgi flex gap-5">
            <p>{dilVerisi?.profile.basics.egitimDurumuSoru}</p>
            <p className="text-white">
              {dilVerisi?.profile.basics.egitimDurumu}
            </p>
          </div>

          <div className="bilgi flex gap-5">
            <p>{dilVerisi?.profile.basics.rolTercihiSoru}</p>
            <p className="text-white">{dilVerisi?.profile.basics.rolTercihi}</p>
          </div>
        </div>
        <div>
          <img src={ortakVeri?.profile.img} alt="profildeki resim" />
        </div>
        <div className="flex flex-col w-100 gap-5">
          <h2 className="text-3xl text-white">
            {dilVerisi?.profile.aboutMeTitle}
          </h2>
          <p className="text-white">{dilVerisi?.profile.aboutMeText}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
