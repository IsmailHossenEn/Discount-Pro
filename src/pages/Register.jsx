import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { Createuser, setNewUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    // @ts-ignore
    if (!regex.test(password)) {
      setError(
        "Password must be at least 6 characters long and include both uppercase and lowercase letters",
      );
      return;
    }

    Createuser(email, password)
      .then((result) => {
        const user = result.user;
        setNewUser(user);
        navigate("/");
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body p-8">
          <h2 className="text-center text-3xl font-bold mb-2">
            Create Account
          </h2>
          <p className="text-center text-base-content/70 mb-8">
            Already have an account?{" "}
            <Link to="/auth/login" className="link link-primary font-medium">
              Login
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Input Your Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Photo URl</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo Url"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="hello@example.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full "
                  required
                />
                <button
                  className="absolute inset-y-0 top-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {!showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>
            {error && (
              <p className="font-semibold text-red-600 text-xs"> {error}</p>
            )}

            <button type="submit" className="btn btn-primary w-full mt-6">
              Create Account
            </button>
          </form>

          <div className="divider my-8">OR</div>

          <button className="btn btn-outline w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.44-3.39-7.44-7.57s3.345-7.57 7.44-7.57c2.33 0 3.916.84 4.82 1.56l3.276-3.15C17.45 2.09 14.97 1 12.24 1 6.48 1 2 5.475 2 12s4.48 11 10.24 11c5.704 0 9.76-4.005 9.76-9.665 0-.65-.07-1.14-.15-1.635H12.24z" />
            </svg>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
