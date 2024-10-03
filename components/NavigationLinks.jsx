// components/NavigationLinks.jsx
import Link from 'next/link';

const NavigationLinks = () => {
  return (
    <nav className="flex justify-center space-x-6 text-[#FFE3D8] font-semibold mt-2">
      <Link href="#" className="hover:text-[#E3B6B1]">Stays</Link>
      <Link href="#" className="hover:text-[#E3B6B1]">Experiences</Link>
    </nav>
  );
};

export default NavigationLinks;
