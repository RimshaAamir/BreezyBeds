"use client";

const CategoryButton = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer group">
      {/* Icon */}
      <div className="w-8 h-8 flex justify-center items-center text-gray-900 group-hover:text-purple-500 transition">
        {icon}
      </div>
      {/* Label */}
      <div className="text-sm text-gray-900 group-hover:text-purple-500 mt-1 transition">
        {label}
      </div>
    </div>
  );
};

export default CategoryButton;
