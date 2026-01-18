import { useContext, useState } from "react";

import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";

const UpdateProfile = () => {
  const { newUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState(newUser?.displayName || "");
  const [photo, setPhoto] = useState(newUser?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();

    updateProfile(newUser, {
      displayName: name || newUser.displayName,
      photoURL: photo || newUser.photoURL,
    })
      .then(() => {
        toast.success("Profile updated successfully");
        navigate("/myprofile");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="my-20">
      <h2 className="font-semibold lg:text-3xl text-xl text-purple-800 text-center mb-8">
        Update Your Profile Information
      </h2>

      <div className="card bg-base-100 mx-auto w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleUpdate}>
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />

            <label className="label mt-3">Photo URL</label>
            <input
              type="text"
              className="input"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Photo URL"
            />

            <button className="btn bg-[#b922af] text-white rounded-lg hover:bg-[#6d1667] transition cursor-pointer mt-4 w-full">
              Update Info
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
