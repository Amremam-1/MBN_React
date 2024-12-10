import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import page from "./pages/Home/HomePage";
import HomePage from "./pages/Home/HomePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default routes;
