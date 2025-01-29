import { data } from "../../data";
import { createContext } from "react";

export const MyContext = createContext(data);
/* const { data } = useContext(MyContext) */

const MyProvider = ({ children }) => {
  return <MyContext.Provider value={{ data }}>{children}</MyContext.Provider>;
};

export default MyProvider;
