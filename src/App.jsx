
import "./App.css";
import MyProvider from "./context/MyProvider";
import Giris from "./componenets/Giris";

function App() {

  return (
    <MyProvider>
      <Giris />
    </MyProvider>
  );
}

export default App;
