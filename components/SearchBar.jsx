// components/SearchBar.jsx
const SearchBar = () => {
    return (
      <div className="flex items-center bg-[#522C5D] text-[#FFE3D8] rounded-full px-4 py-2 shadow-lg mt-4 mx-auto w-full max-w-5xl space-x-2">
        {/* Where input */}
        <input
          type="text"
          placeholder="Where"
          className="bg-[#522C5D] placeholder-[#E3B6B1] text-[#FFE3D8] px-4 py-2 focus:outline-none flex-grow"
        />
        
        {/* Divider */}
        <div className="h-8 border-l border-[#845162]"></div>
        
        {/* Check-in / Check-out input */}
        <input
          type="text"
          placeholder="Check in / Check out"
          className="bg-[#522C5D] placeholder-[#E3B6B1] text-[#FFE3D8] px-4 py-2 focus:outline-none flex-grow"
        />
        
        {/* Divider */}
        <div className="h-8 border-l border-[#845162]"></div>
        
        {/* Add guests input */}
        <input
          type="text"
          placeholder="Add guests"
          className="bg-[#522C5D] placeholder-[#E3B6B1] text-[#FFE3D8] px-4 py-2 focus:outline-none flex-grow"
        />
        
        {/* Search button */}
        <button className="bg-[#E3B6B1] p-2 rounded-full text-[#150016] ml-2">
          🔍
        </button>
      </div>
    );
  };
  
  export default SearchBar;
  