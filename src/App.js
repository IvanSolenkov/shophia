import Header from "./Components/Header/Header";
import Sale from "./Components/Sale/Sale";
import Shipping from "./Components/Shipping/Shipping";
import Titles from "./Components/Titles/Titles";
import AccMenu from "./Components/AccMenu/AccMenu";
import './index.scss'

function App() {
  return (
    <div className="App">
      <AccMenu />
      <Header />
      <Sale />
      <Shipping />
      <Titles titleName="HandPicked" />

      <Titles titleName="Summer Collection" />

      <Titles titleName="Our Brand" />
    </div>
  );
}

export default App;
