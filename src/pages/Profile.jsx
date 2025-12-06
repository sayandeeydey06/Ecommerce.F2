import { useState, useEffect } from "react";
import { getUser, updateUser, logoutUser } from "../auth";


import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const u = getUser();
    if (!u) {
      navigate("/login");
      return;
    }

    setUser(u);
    setName(u.name);
    setEmail(u.email);

    setImage(u.image || null);
    setPreview(u.image || null);
  }, []);

  // 📸 Upload Photo
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  // ❌ Remove Photo
  const handleRemovePhoto = () => {
    setPreview(null);
    setImage(null);

    const updatedUser = { ...user, image: "" };

    const allUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = allUsers.map((u) =>
      u.email === user.email ? updatedUser : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("user", JSON.stringify(updatedUser));

    setUser(updatedUser);
  };

  // 💾 Save Everything
 const saveChanges = () => {
  if (!name || !email) {
    alert("Name & Email cannot be empty.");
    return;
  }

  if (pass && pass !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  const updatedUser = {
    ...user,
    name,
    email,
    image: image || user.image,
    password: pass ? pass : user.password, // KEEP OLD PASSWORD IF EMPTY
  };

  updateUser(updatedUser);

  alert("Profile updated!");
  window.location.reload();
};


  if (!user) return null;

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white dark:bg-[#1E293B] rounded-2xl shadow-lg">

      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
        Edit Profile
      </h2>

      {/* PROFILE PHOTO */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={
            preview ||
            `https://ui-avatars.com/api/?name=${
              user.name || user.email
            }&background=4F46E5&color=fff`
          }
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-md"
        />

        {/* Upload Photo Button */}
        <label className="mt-4 px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg cursor-pointer hover:bg-indigo-700">
          Choose Photo
          <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
        </label>

        {/* Remove Photo Button */}
        {preview && (
          <button
            onClick={handleRemovePhoto}
            className="mt-3 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg"
          >
            Remove Photo
          </button>
        )}
      </div>

      {/* FORM FIELDS */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200"
        placeholder="Full Name"
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200"
        placeholder="Email"
      />

      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        className="w-full mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg"
        placeholder="New Password (optional)"
      />

      <input
        type="password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        className="w-full mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg"
        placeholder="Confirm Password"
      />

      {/* SAVE BUTTON */}
      <button
        onClick={saveChanges}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg mt-4"
      >
        Save Changes
      </button>

      {/* LOGOUT BUTTON */}
      <button
        onClick={() => {
          logoutUser();
          navigate("/login");
        }}
        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg mt-3"
      >
        Logout
      </button>
    </div>
  );
}
