import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Header from "./Component/Header.jsx";
import Footer from "./Component/Footer.jsx";
import Card from "./Component/Card.jsx";
import HandelBagitem from "./Component/BagStore.jsx";
import Bag from "./Component/Bag.jsx";
import ItemPrice from "./Component/ItemPrice.jsx";

let router = createHashRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <App /> },
  {
    path: "/type",
    element: (
      <div className="AppContenar">
        <Header />
        <Card />
        <Footer />
      </div>
    ),
  },

  {
    path:"/bag",
    element:(
      <div className="AppContenar">
      <Header></Header>
      <Bag></Bag>
      <ItemPrice></ItemPrice>
      <Footer></Footer>
      </div>
    )
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HandelBagitem>
      <RouterProvider router={router} />
    </HandelBagitem>
  </StrictMode>,
);
