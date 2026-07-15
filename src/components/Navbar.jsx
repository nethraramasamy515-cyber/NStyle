function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-md">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-purple-700">
        NStyle
      </h1>

      {/* Menu */}
      <ul className="flex gap-8 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-purple-700">Home</li>
        <li className="cursor-pointer hover:text-purple-700">Shop</li>
        <li className="cursor-pointer hover:text-purple-700">Categories</li>
        <li className="cursor-pointer hover:text-purple-700">Contact</li>
      </ul>

      {/* Login Button */}
      <button className="bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-800 transition">
        Login
      </button>
    </nav>
  );
}

export default Navbar;