import { useState } from "react";
import { registerUser } from "../auth";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => setPhoto(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSignup = () => {
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    const success = registerUser(name, email, password, photo);

    if (success) {
      navigate("/login");
    } else {
      setError("User already exists.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-gray-50 dark:bg-[#0F172A]">
      <div className="w-full max-w-md bg-white dark:bg-[#1E293B] p-8 rounded-2xl shadow-xl fade-in">

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Create Your Account
        </h2>

        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none border border-gray-300 dark:border-gray-600"
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none border border-gray-300 dark:border-gray-600"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none border border-gray-300 dark:border-gray-600"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirm(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none border border-gray-300 dark:border-gray-600"
        />

        <label className="text-gray-700 dark:text-gray-300 block mb-2">Upload Profile Photo</label>
        <input type="file" accept="image/*" onChange={handleImage} className="mb-4" />

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        <button
          onClick={handleSignup}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold shadow-md"
        >
          Signup
        </button>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
          Already have an account? <Link to="/login" className="text-indigo-500">Login</Link>
        </p>
      </div>
    </div>
  );
}
