import { useState } from "react";
import { loginUser } from "../auth";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (loginUser(email, password)) {
      navigate("/");
      window.location.reload();
    } else {
      setError("Invalid login details. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-gray-50 dark:bg-[#0F172A]">
      <div className="w-full max-w-md bg-white dark:bg-[#1E293B] p-8 rounded-2xl shadow-xl fade-in">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Login to Your Account
        </h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 
                     text-gray-800 dark:text-gray-200 outline-none border border-gray-300 
                     dark:border-gray-600 focus:border-indigo-500"
        />

        {/* Password + Show/Hide Button */}
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 
                       text-gray-800 dark:text-gray-200 outline-none border border-gray-300 
                       dark:border-gray-600 focus:border-indigo-500"
          />

          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-4 top-3 text-gray-500 dark:text-gray-300"
          >
            {showPass ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center animate-pulse">
            {error}
          </p>
        )}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg 
                     transition font-semibold text-sm shadow-md"
        >
          Login
        </button>

        {/* Signup Redirect */}
        <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-500 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
