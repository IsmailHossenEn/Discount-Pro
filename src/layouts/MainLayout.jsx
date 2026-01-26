import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <>
      <header className="px-4 py-3 sticky top-0 z-50 bg-white/20 backdrop-blur-xl border-b border-white/30 shadow-lg">
        <Header></Header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <Toaster></Toaster>
    </>
  );
};

export default MainLayout;
