import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "admin@fsquare.com" && pass === "admin123") {
      localStorage.setItem("admin", "true");
      window.location.href = "/admin";
    } else {
      setError("Invalid admin credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-xl w-[90%] max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>

        <input
          type="email"
          placeholder="Admin Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-3 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
          className="w-full p-3 mb-3 border rounded-lg"
        />

        {error && <p className="text-red-500 text-center">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg mt-4"
        >
          Login
        </button>
      </div>
    </div>
  );
}
