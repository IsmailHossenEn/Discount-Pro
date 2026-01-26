import { Link, Links, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { newUser, LogoutUser } = useContext(AuthContext);
  console.log(newUser?.email);
  const navigate = useNavigate();

  const logOut = () => {
    LogoutUser()
      .then(() => {
        navigate("auth/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-between py-4 ">
      <div>
        <Link to="/" className="cursor-pointer">
          <img
            className="w-30"
            src="https://res.cloudinary.com/dn9bladxx/image/upload/v1767437987/disproLogo-removebg-preview_gcql9z.png"
            alt=""
          />
        </Link>
      </div>
      <div className="flex -mr-45">
        <h4 className="text-2xl font-semibold text-[#282428]">
          Welcome {newUser?.displayName}{" "}
        </h4>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col items-center justify-center">
          {newUser && (
            <img
              className="w-8 rounded-full "
              src={newUser.photoURL}
              alt={newUser.displayName}
            />
          )}
          <p className="text-xs">{newUser?.email}</p>
        </div>

        {newUser ? (
          <button
            onClick={logOut}
            className="text-xs btn text-gray-900 cursor-pointer border border-[#f66518] hover:bg-[#f66518] transition-all duration-300 ease-in-out hover:text-white"
          >
            Logout
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <Link
              to="/auth/login"
              className="text-xs btn text-gray-900 cursor-pointer border border-[#f66518] hover:bg-[#f66518] transition-all duration-300 ease-in-out hover:text-white"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="text-xs btn text-gray-900 cursor-pointer border border-[#f66518] hover:bg-[#f66518] transition-all duration-300 ease-in-out hover:text-white"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
