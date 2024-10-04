"use client";

const CategoryButton = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer group">
      {/* Icon */}
      <div className="w-6 h-6 flex justify-center items-center text-gray-500 group-hover:text-black">
        {icon}
      </div>
      {/* Label */}
      <div className="text-xs text-gray-500 group-hover:text-black mt-1">
        {label}
      </div>
    </div>
  );
};

export default CategoryButton;
