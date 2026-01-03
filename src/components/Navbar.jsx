import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center space-x-3">
      <Link to="/" className="btn btn-outline">
        Home
      </Link>
      <Link to="/brands" className="btn btn-outline">
        Brands
      </Link>
      <Link to="/myprofile" className="btn btn-outline">
        My-Profile
      </Link>
      <Link to="/about" className="btn btn-outline">
        About Dev
      </Link>
    </div>
  );
};

export default Navbar;
