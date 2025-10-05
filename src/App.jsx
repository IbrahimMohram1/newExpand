import { useState } from "react";

import "./App.css";
import "./Font.css";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import DataProvider from "./Components/Context/ContextData";
import AboutUs from "./Components/AboutUs/AboutUs";
import Service from "./Components/Service/ServiceDetails";
import Projects from "./Components/ProjectsPage/Projects";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";

let routes = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <AboutUs /> },
      { path: "Projects/:id", element: <Projects /> },
      { path: "services/:id", element: <Service /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
function App() {
  return (
    <>
      <DataProvider>
        <RouterProvider router={routes}></RouterProvider>
      </DataProvider>
    </>
  );
}

export default App;
