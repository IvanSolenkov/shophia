import Header from "./Components/Header/Header";
import Sale from "./Components/Sale/Sale";
import Shipping from "./Components/Shipping/Shipping";
import Titles from "./Components/Titles/Titles";
import AccMenu from "./Components/AccMenu/AccMenu";
import './index.scss'
import HandCollection from "./Components/HandCollection/HandCollection";
import SummerCollection from "./Components/SummerCollection/SummerCollection";

function App() {
  return (
    <div className="App">
      <AccMenu />
      <Header />
      <Sale />
      <Shipping />
      <Titles titleName="HandPicked" />
      <HandCollection />
      <Titles titleName="Summer Collection" />
      <SummerCollection />

      <Titles titleName="Our Brand" />
    </div>
  );
}

export default App;
