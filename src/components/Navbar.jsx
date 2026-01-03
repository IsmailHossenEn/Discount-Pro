import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiCoupon2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdDeveloperMode } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center space-x-3">
      <Link to="/" className="btn btn-outline">
        <FaHome />
        Home
      </Link>
      <Link to="/brands" className="btn btn-outline">
        <RiCoupon2Line />
        Brands
      </Link>
      <Link to="/myprofile" className="btn btn-outline">
        <CgProfile />
        My-Profile
      </Link>
      <Link to="/about" className="btn btn-outline">
        <MdDeveloperMode />
        About Dev
      </Link>
    </div>
  );
};

export default Navbar;
