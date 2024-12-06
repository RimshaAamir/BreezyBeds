// components/SearchBar.jsx
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="flex items-center bg-slate-50 border border-gray-300 rounded-full px-4 py-2 shadow-md mt-4 mx-auto w-full max-w-4xl space-x-2">
      {/* Where input */}
      <input
        type="text"
        placeholder="Where"
        className="bg-transparent placeholder-gray-500 text-gray-700 px-4 py-2 focus:outline-none flex-grow"
      />

      {/* Divider */}
      <div className="h-6 w-px bg-gray-300"></div>

      {/* Check-in / Check-out input */}
      <input
        type="text"
        placeholder="Check in / Check out"
        className="bg-transparent placeholder-gray-500 text-gray-700 px-4 py-2 focus:outline-none flex-grow"
      />

      {/* Divider */}
      <div className="h-6 w-px bg-gray-300"></div>

      {/* Add guests input */}
      <input
        type="text"
        placeholder="Add guests"
        className="bg-transparent placeholder-gray-500 text-gray-700 px-4 py-2 focus:outline-none flex-grow"
      />

      {/* Search button */}
      <button className="bg-zinc-700 text-white p-3 rounded-full hover:bg-zinc-800 transition ml-2">
        <FaSearch /> {/* Replace the emoji with the React search icon */}
      </button>
    </div>
  );
};

export default SearchBar;
