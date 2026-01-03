import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Brands from "../pages/Brands";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import About from "../pages/About";
import Error from "../components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
  {
    path: "/brands",
    element: <Brands></Brands>,
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
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
