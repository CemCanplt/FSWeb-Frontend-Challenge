import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();
/* const { data } = useContext(MyContext) */

const MyProvider = ({ children }) => {
  // Hangi dildeyim?
  const [dil, setDil] = useState(() => {
    const userLang = navigator.language || navigator.userLanguage;
    const dilKodu = userLang.slice(0, 2); // Sadece ilk iki harfi
    return dilKodu ? dilKodu : "tr";
  });

  const [dilVerisi, setDilVerisi] = useState(null);

  const [ortakVeri, setOrtakVeri] = useState(null);

  useEffect(() => {
    axios
      .get("../../data.json") // Veriyi çek
      .then((res) => {
        const dilObjesi = res.data[dil]; // Dinamik olarak dil verisini al
        setDilVerisi(dilObjesi); // State'i güncelle
      })
      .catch((error) => {
        console.error("Dil verisi çekilemedi:", error);
      });
  }, [dil]); // dil state'i değiştiğinde bu effect yeniden çalışır;

  useEffect(() => {
    axios
      .get("../../data.json") // Veriyi çek
      .then((res) => {
        console.log("JSON Verisi:", res.data); // JSON’un tamamını gör
        const ortakVeriObjesi = res.data.ortak; // Dinamik olarak dil verisini al
        setOrtakVeri(ortakVeriObjesi); // State'i güncelle
      })
      .catch((error) => {
        console.error("Ortak Veri Hatası:", error);
      });
  }, []);

  return (
    <MyContext.Provider value={{ dilVerisi, ortakVeri, setDil }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
