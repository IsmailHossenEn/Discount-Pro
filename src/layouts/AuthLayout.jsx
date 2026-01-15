import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";

const AuthLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
      <Toaster></Toaster>
    </div>
  );
};

export default AuthLayout;
