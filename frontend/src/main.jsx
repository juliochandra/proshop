import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import "./index.css";
import HomeScreen from "./layouts/HomeScreen.jsx";
import ProductScreen from "./layouts/ProductScreen.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/product/:id",
        element: <ProductScreen />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
