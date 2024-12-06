"use client";

import { 
  FaBed, 
  FaStar, 
  FaMountain, 
  FaHouseDamage, 
  FaHistory, 
  FaCoffee, 
  FaFireAlt, 
  FaSnowflake, 
  FaHome, 
  FaSkiing, 
  FaWater, 
  FaGolfBall, 
  FaTree, 
  FaUmbrellaBeach, 
  FaCampground, 
  FaShip, 
  FaDotCircle 
} from "react-icons/fa";
import { IoTennisball, IoEarth } from "react-icons/io5";
import CategoryButton from "./CategoryButton";

const Categories = () => {
  const categories = [
    { icon: <FaBed />, label: "Rooms" },
    { icon: <FaStar />, label: "Icons" },
    { icon: <IoEarth />, label: "Top cities" },
    { icon: <FaMountain />, label: "Amazing views" },
    { icon: <FaHouseDamage />, label: "A-frames" },
    { icon: <FaHistory />, label: "Historical homes" },
    { icon: <FaCoffee />, label: "Bed & breakfasts" },
    { icon: <FaFireAlt />, label: "Trending" },
    { icon: <FaSnowflake />, label: "Arctic" },
    { icon: <FaHome />, label: "Cabins" },
    { icon: <FaDotCircle />, label: "New" },
    { icon: <FaSkiing />, label: "Ski-in/out" },
    { icon: <FaWater />, label: "Lakefront" },
    { icon: <FaGolfBall />, label: "Golfing" },
    { icon: <FaTree />, label: "National parks" },
    { icon: <IoTennisball />, label: "Tropical" },
    { icon: <FaCampground />, label: "Camping" },
    { icon: <FaUmbrellaBeach />, label: "Beachfront" },
    { icon: <FaShip />, label: "Boats" },
    { icon: <FaDotCircle />, label: "Yurts" },
  ];

  return (
    <div className="py-4 px-4 bg-slate-50 border-b border-gray-200 flex items-center">
      <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-flex space-x-6 mx-3">
          {categories.map((category, index) => (
            <CategoryButton key={index} icon={category.icon} label={category.label} />
          ))}
        </div>
      </div>
      {/* Right-side filters and toggle */}
      <div className=" items-center space-x-4 ml-5 hidden md:flex ">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-900 hover:bg-gray-100 transition">
          Filters
        </button>
        <label className="flex items-center space-x-2 text-sm text-gray-900">
          <span>Display total before taxes</span>
          <input
            type="checkbox"
            className="toggle-checkbox w-4 h-4 border-gray-300 rounded-full focus:ring-purple-700"
          />
        </label>
      </div>
    </div>
  );
};

export default Categories;
