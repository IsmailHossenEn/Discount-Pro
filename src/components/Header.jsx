import { Link, useNavigate } from "react-router-dom";
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
        <a className="cursor-pointer">
          <img
            className="w-50"
            src="https://res.cloudinary.com/dn9bladxx/image/upload/v1767437987/disproLogo-removebg-preview_gcql9z.png"
            alt=""
          />
        </a>
      </div>
      <div>
        <h4>Welcome {newUser?.displayName} </h4>
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
          <p>{newUser?.email}</p>
        </div>

        {newUser ? (
          <button onClick={logOut} className="btn">
            Logout
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/auth/login" className="btn text-xs">
              Login
            </Link>
            <Link to="/auth/register" className="btn text-xs">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
