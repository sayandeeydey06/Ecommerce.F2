export default function AdminDashboard() {
  const logout = () => {
    localStorage.removeItem("admin");
    window.location.href = "/admin-login";
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">FSQUARE Admin Panel</h1>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <a href="/admin/products" className="card">Manage Products</a>
        <a href="/admin/shops" className="card">Manage Shops</a>
        <a href="/admin/users" className="card">Users List</a>
        <a href="/admin/coupons" className="card">Coupons</a>
      </div>
    </div>
  );
}
