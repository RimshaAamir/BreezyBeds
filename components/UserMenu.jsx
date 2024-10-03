// components/UserMenu.jsx
import { FaUserCircle } from 'react-icons/fa';
import { HiOutlineGlobe } from 'react-icons/hi';
import { FiMenu } from 'react-icons/fi';

const UserMenu = () => {
  return (
    <div className="flex items-center space-x-4 cursor-pointer text-[#FFE3D8]">
      <span className="hover:text-[#E3B6B1]">Airbnb your home</span>
      <HiOutlineGlobe className="text-[#FFE3D8] hover:text-[#E3B6B1]" size={20} />
      <div className="flex items-center border border-[#845162] rounded-full p-2 space-x-2 bg-[#29104A]">
        <FiMenu className="text-[#FFE3D8]" />
        <FaUserCircle className="text-[#FFE3D8]" size={20} />
      </div>
    </div>
  );
};

export default UserMenu;
