import "./App.css";
import Card from "./Component/Card";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Component/Home";
import OurBestPlant from "./Component/OurBestPlant";
import ReviewContenar from "./Component/ReviewContenar";
import Trendy_plant from "./Component/Trendy_plant";
function App() {
  return (
    <div className="AppContenar">
      <Header></Header>
      <Home></Home>
      <Trendy_plant></Trendy_plant>
      <Card></Card>
      <ReviewContenar></ReviewContenar>
      <OurBestPlant></OurBestPlant>
      <Footer></Footer>
    </div>
  );
}

export default App;
