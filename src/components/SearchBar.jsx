import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">
      <FiSearch className="text-gray-500 text-xl" />
      <input
        type="text"
        placeholder="Search for fashion..."
        className="bg-transparent outline-none ml-3 w-full"
      />
    </div>
  );
}

export default SearchBar;
