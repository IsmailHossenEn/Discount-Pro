import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Brands from "../pages/Brands";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import About from "../pages/About";
import Error from "../components/Error";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: async () => {
          const res = await fetch("/data/brands.json");
          return res.json();
        },
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
      },
      {
        path: "/brand/:id",
        element: <h2>brand details</h2>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myprofile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
