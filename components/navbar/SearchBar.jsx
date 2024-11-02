// components/SearchBar.jsx
const SearchBar = () => {
    return (
      <div className="flex items-center bg-zinc-900 text-textLight rounded-full px-4 py-2 shadow-lg mt-4 mx-auto w-full max-w-5xl space-x-2">
        {/* Where input */}
        <input
          type="text"
          placeholder="Where"
          className="bg-zinc-900 placeholder-my_sky_200 px-4 py-2 focus:outline-none flex-grow"
        />
        
        {/* Divider */}
        <div className="h-8 border-2 border-my_sky_950"></div>
        
        {/* Check-in / Check-out input */}
        <input
          type="text"
          placeholder="Check in / Check out"
          className="bg-zinc-900 placeholder-my_sky_200 px-4 py-2 focus:outline-none flex-grow"
        />
        
        {/* Divider */}
        <div className="h-8 border-2 border-my_sky_950"></div>
        
        {/* Add guests input */}
        <input
          type="text"
          placeholder="Add guests"
          className="bg-zinc-900 placeholder-my_sky_200 px-4 py-2 focus:outline-none flex-grow"
        />
        
        {/* Search button */}
        <button className="bg-my_sky_500 p-2 rounded-full text-[#150016] ml-2">
          🔍
        </button>
      </div>
    );
  };
  
  export default SearchBar;
  