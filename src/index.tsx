import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom"; // Изменено с createHashRouter
import { App } from "./App";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);