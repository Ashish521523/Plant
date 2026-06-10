import "./App.css";
import Card from "./Component/Card";
import Header from "./Component/Header";
import Home from "./Component/Home";
function App() {
  return (
    <div className="AppContenar">
      <Header></Header>
      <Home></Home>
      <Card></Card>
    </div>
  );
}

export default App;
