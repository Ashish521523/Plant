import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Header from "./Component/Header.jsx";
import Footer from "./Component/Footer.jsx";
import Card from "./Component/Card.jsx";

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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
