import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Brands from "../pages/Brands";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import About from "../pages/About";
import Error from "../components/Error";
import Home from "../pages/Home";
import BrandDetails from "../pages/BrandDetails";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "../provider/PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";

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
        path: "brands",
        element: <Brands></Brands>,
        loader: async () => {
          const res = await fetch("/data/brands.json");
          return res.json();
        },
      },

      {
        path: "brand/:id",
        element: (
          <PrivateRoute>
            <BrandDetails></BrandDetails>
          </PrivateRoute>
        ),
        loader: async () => {
          const res = await fetch("/data/brands.json");
          return res.json();
        },
      },

      {
        path: "myprofile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "updateprofile",

        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
