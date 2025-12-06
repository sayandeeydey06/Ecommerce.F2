// =============================
// REGISTER USER
// =============================
export function registerUser(name, email, password) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const exists = users.find((u) => u.email === email);
  if (exists) return { success: false, message: "Email already registered!" };

  const newUser = {
    name,
    email,
    password,
    image: null, // default
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  return { success: true };
}

// =============================
// LOGIN USER
// =============================
export function loginUser(email, password) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const user = users.find((u) => u.email === email);

  if (!user) return false;        // no such email
  if (user.password !== password) return false; // wrong password

  // Save logged-in user
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
// UPDATE USER (SAFE UPDATE)
// =============================
export function updateUser(updatedUser) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const newUsers = users.map((u) =>
    u.email === updatedUser.email ? updatedUser : u
  );

  localStorage.setItem("users", JSON.stringify(newUsers));
  localStorage.setItem("user", JSON.stringify(updatedUser));
}
