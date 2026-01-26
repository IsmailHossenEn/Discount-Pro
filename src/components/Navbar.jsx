import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiCoupon2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdDeveloperMode } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import NavItem from "./NavItem";

const Navbar = () => {
  const { newUser } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-center space-x-3">
      <NavItem to="/" icon={FaHome} label="Home" />
      <NavItem to="/brands" icon={RiCoupon2Line} label="Brands" />

      {newUser && (
        <NavItem to="/myprofile" icon={CgProfile} label="My Profile" />
      )}

      <NavItem to="/about" icon={MdDeveloperMode} label="About Dev" />
    </div>
  );
};

export default Navbar;
