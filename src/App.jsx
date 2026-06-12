import "./App.css";
import Card from "./Component/Card";
import Header from "./Component/Header";
import Home from "./Component/Home";
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
    </div>
  );
}

export default App;
