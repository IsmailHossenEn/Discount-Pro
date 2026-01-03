import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-4 ">
      <div>
        <a className="cursor-pointer">
          <img
            className="w-50"
            src="https://res.cloudinary.com/dn9bladxx/image/upload/v1767437987/disproLogo-removebg-preview_gcql9z.png"
            alt=""
          />
        </a>
      </div>
      <div>
        <h4>Welcome Ismail </h4>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col items-center justify-center">
          <CgProfile />
          {/* <img
            className=""
            src="https://res.cloudinary.com/dn9bladxx/image/upload/v1729841567/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector_we0wwg.jpg"
            alt="profile Image"
          /> */}
          <p>Ismail Hossen</p>
        </div>
        <button className="btn">Login</button>
      </div>
    </div>
  );
};

export default Header;
