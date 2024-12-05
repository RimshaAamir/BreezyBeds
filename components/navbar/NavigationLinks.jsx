// components/NavigationLinks.jsx
import Link from 'next/link';

const NavigationLinks = () => {
  return (
    <nav className="hidden sm:flex space-x-8 text-gray-700 font-medium">
      <Link href="#" className="hover:text-purple-500 transition">
        Stays
      </Link>
      <Link href="#" className="hover:text-purple-500 transition">
        Experiences
      </Link>
    </nav>
  );
};

export default NavigationLinks;
