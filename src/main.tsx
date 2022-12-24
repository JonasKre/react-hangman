import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import "@fontsource/open-sans";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Game from "./routes/Game";
import "@fontsource/open-sans/variable-full.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/play/:words",
    element: <Game />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
