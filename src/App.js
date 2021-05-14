import Header from "./Components/Header/Header";
import Sale from "./Components/Sale/Sale";
import TopNav from "./Components/TopNav/TopNav";
import './index.scss'

function App() {
  return (
    <div className="App">
      <TopNav />
      <Header />
      <Sale />
    </div>
  );
}

export default App;
