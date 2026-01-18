import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const MyProfile = () => {
  const { newUser } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="h-52 py-40 bg-linear-to-r from-indigo-500 to-purple-600 flex items-center justify-center flex-col gap-3">
        <h2 className="text-white text-3xl font-semibold">
          Welcome, {newUser?.displayName || "User"} 👋
        </h2>
        <h3 className="text-3xl font-semibold text-gray-200 pb-2">
          Here is your Profile Informatin
        </h3>
      </div>

      <div className="max-w-md mx-auto -mt-16 bg-[#f58332] rounded-xl shadow-lg p-6 text-center">
        <img
          src={newUser?.photoURL || "https://i.ibb.co/2kRZ7yD/avatar.png"}
          alt="User"
          className="w-24 h-24 rounded-full mx-auto border-4 border-white -mt-16 object-cover"
        />

        <h2 className="mt-4 text-white text-xl font-semibold">
          User Name: {newUser?.displayName || "No Name"}
        </h2>

        <p className="text-gray-100 mt-1">User Email:{newUser?.email}</p>

        <Link to="/updateprofile">
          <button className="mt-5 px-5 py-2 bg-[#b922af] text-white rounded-lg hover:bg-[#6d1667] transition cursor-pointer">
            Update Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
