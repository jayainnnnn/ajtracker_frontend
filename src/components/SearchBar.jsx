import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ value, onSearch, placeholder, onSubmit }) => {
  const [searchValue, setSearchValue] = useState(value || "");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = searchValue.trim();
    
    if (trimmedValue) {
      // If onSubmit prop is provided, use it (for Home page)
      if (onSubmit) {
        onSubmit(trimmedValue);
      } else {
        // Otherwise, navigate to search results page
        navigate(`/search/${encodeURIComponent(trimmedValue)}`);
      }
    }
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    if (onSearch) {
      onSearch(newValue);
    }
  };

  return (
    <div className="w-full flex justify-center my-0 px-0">
      <form onSubmit={handleSubmit} className="relative w-full max-w-md flex">
        {/* Removed left-side search icon */}
        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder={placeholder || "Search products..."}
          className="flex-1 pl-3 pr-3 py-2 rounded-l-lg border-2 border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-lg focus:outline-none focus:ring-0 focus:border-gradient-to-r focus:from-blue-400 focus:to-pink-400 transition-all text-base"
          style={{ borderImage: 'linear-gradient(90deg, #3b82f6, #a21caf, #ec4899) 1' }}
        />
        <button
          type="submit"
          className="rounded-r-lg px-5 py-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-pink-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Search"
        >
          <FiSearch className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar; 