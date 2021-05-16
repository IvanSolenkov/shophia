import Header from "./Components/Header/Header";
import Sale from "./Components/Sale/Sale";
import Shipping from "./Components/Shipping/Shipping";
import Titles from "./Components/Titles/Titles";
import AccMenu from "./Components/AccMenu/AccMenu";
import './index.scss'
import HandCollection from "./Components/HandCollection/HandCollection";
import SummerCollection from "./Components/SummerCollection/SummerCollection";
import OurBrand from "./Components/OurBrand/OurBrand";
import Customers from "./Components/Customers/Customers";
import Footer from "./Components/Footer/Footer";

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
      <OurBrand />
      <Titles titleName="Customers Says" />
      <Customers />
      <Footer />
    </div>
  );
}

export default App;
