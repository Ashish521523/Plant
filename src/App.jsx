import "./App.css";
import Card from "./Component/Card";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Trendy_plant from "./Component/Trendy_plant";
function App() {
  return (
    <div className="AppContenar">
      <Header></Header>
      <Trendy_plant></Trendy_plant>
      <Home></Home>
      <Card></Card>
    </div>
  );
}

export default App;
