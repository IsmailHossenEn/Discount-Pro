import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Remove if not using react-router
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { LoginUser, setNewUser, newUser, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    LoginUser(email, password)
      .then((result) => {
        const user = result.user;
        setNewUser(user);

        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setError(error.code);
        toast.error(error.message);
        //console.error("LOGIN ERROR:", error.code, error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body p-8">
          <h2 className="text-center text-3xl font-bold mb-2">Welcome Back</h2>
          <p className="text-center text-base-content/70 mb-8">
            Don't have an account?
            <Link to="/auth/register" className="link link-primary font-medium">
              Sign up
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
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
                  className="input input-bordered w-full pr-12"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {!showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>
            {error && (
              <p className="font-semibold text-xs text-red-600"> {error}</p>
            )}
            <button className="btn btn-primary w-full mt-6">Sign In</button>
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

export default Login;
