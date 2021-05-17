import Header from "./Components/Header/Header";
import Sale from "./Components/Sale/Sale";
import CustomerService from "./Components/CustomerService/CustomerService";
import Titles from "./Components/Titles/Titles";
import AccountMenu from "./Components/AccountMenu/AccountMenu";
import './index.scss'
import HandCollection from "./Components/HandCollection/HandCollection";
import SummerCollection from "./Components/SummerCollection/SummerCollection";
import OurBrand from "./Components/OurBrand/OurBrand";
import Testimonials from "./Components/Testimonials/Testimonials";
import MainFooter from "./Components/MainFooter/MainFooter";

function App() {
  return (
    <div className="App">
      <AccountMenu />
      <Header />
      <Sale />
      <CustomerService />
      <Titles titleName="HandPicked" />
      <HandCollection />
      <Titles titleName="Summer Collection" />
      <SummerCollection />
      <Titles titleName="Our Brand" />
      <OurBrand />
      <Titles titleName="Customers Says" />
      <Testimonials />
      <MainFooter />
    </div>
  );
}

export default App;
