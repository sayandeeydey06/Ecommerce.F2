// =============================
// REGISTER USER
// =============================
// =============================
// REGISTER USER (FULL FIX)
// =============================
export function registerUser(name, email, password, photo) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const exists = users.find((u) => u.email === email);
  if (exists) return false; // already exists

  const newUser = {
    name,
    email,
    password,
    image: photo || null,  // SAVE PHOTO CORRECTLY
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  return true; // return boolean, not object
}

// =============================
// LOGIN USER
// =============================
export function loginUser(email, password) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const user = users.find((u) => u.email === email);

  if (!user) return false; // email not found
  if (user.password !== password) return false; // wrong password

  localStorage.setItem("user", JSON.stringify(user));
  return true;
}

// =============================
// LOGOUT
// =============================
export function logoutUser() {
  localStorage.removeItem("user");
}

// =============================
// GET LOGGED-IN USER
// =============================
export function getUser() {
  const raw = localStorage.getItem("user");
  return raw ? JSON.parse(raw) : null;
}

// =============================
// UPDATE USER
// =============================
export function updateUser(updatedUser) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const newUsers = users.map((u) =>
    u.email === updatedUser.email ? updatedUser : u
  );

  localStorage.setItem("users", JSON.stringify(newUsers));
  localStorage.setItem("user", JSON.stringify(updatedUser));
}
