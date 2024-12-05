// components/UserMenu.jsx
import { FaUserCircle } from 'react-icons/fa';
import { HiOutlineGlobe } from 'react-icons/hi';
import { FiMenu } from 'react-icons/fi';

const UserMenu = () => {
  return (
    <div className="flex items-center space-x-6 text-gray-700">
      <span className="hover:text-purple-500 transition cursor-pointer">Your home</span>
      <HiOutlineGlobe className="text-gray-700 hover:text-purple-500 cursor-pointer transition" size={20} />
      <div className="flex items-center border border-gray-300 rounded-full p-2 space-x-2 bg-gray-100 hover:bg-gray-200 transition">
        <FiMenu className="text-gray-700" />
        <FaUserCircle className="text-gray-900" size={20} />
      </div>
    </div>
  );
};

export default UserMenu;
