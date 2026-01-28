import "./Login.css";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { LoginUser, setNewUser, loginWitGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    LoginUser(email, password)
      .then((result) => {
        setNewUser(result.user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        setError(error.code);
        toast.error(error.message);
      });
  };

  const handleLoginWithGoogle = () => {
    loginWitGoogle()
      .then((result) => {
        setNewUser(result.user);
        navigate("/");
        toast.success("Welcome to Discount Pro");
      })
      .catch((error) => {
        setError(error);
        toast.error("Something went Wrong", error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-[#8b0e8b] via-[#c026d3] to-[#f97316] bg-[bg-size-[200%_200%] animate-[gradientMove_8s_ease_infinite]">
      <div className="glass-card w-full max-w-md">
        <div className="card-body p-8">
          <h2 className="text-center text-3xl font-bold text-white mb-2">
            Welcome Back
          </h2>

          <p className="text-center text-white mb-8">
            Don't have an account?
            <Link
              to="/auth/register"
              className="underline ml-1 text-white font-bold"
            >
              Sign up
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="label">
              <span className="label-text text-white font-medium">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="hello@example.com"
              className="input glass-input w-full"
              required
            />

            <div className="relative">
              <label className="label">
                <span className="label-text text-white font-medium">
                  Password
                </span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="input glass-input w-full pr-12"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "🙈"}
              </button>
            </div>

            {error && (
              <p className="text-red-600 text-sm font-medium">{error}</p>
            )}

            <button className="btn w-full cursor-pointer bg-[#b61dae] text-white border border-[#3b0639] hover:border-[#f66518] hover:bg-[#f66518] transition-all duration-300 ease-in-out hover:text-white">
              Sign In
            </button>
          </form>

          <div className="divider text-white divide-white font-extrabold">
            OR
          </div>

          <button
            onClick={handleLoginWithGoogle}
            className="btn w-full flex gap-2 justify-center text-white bg-[#f66518] cursor-pointer border border-[#f66518] hover:border-[#3b0639] hover:bg-[#3b0639] transition-all duration-300 ease-in-out hover:text-white"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
