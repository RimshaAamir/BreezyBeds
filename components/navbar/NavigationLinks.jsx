// components/NavigationLinks.jsx
import Link from 'next/link';

const NavigationLinks = () => {
  return (
    <nav className="flex justify-center space-x-6 text-violet-400 font-semibold mt-2">
      {/* <Link href="#" className="hover:text-my_sky_500">Stays</Link> */}
      {/* <Link href="#" className="hover:text-my_sky_500">Experiences</Link> */}
      <Link href="#" className="hover:text-violet-500">Stays</Link>
      <Link href="#" className="hover:text-violet-500">Experiences</Link>
    </nav>
  );
};

export default NavigationLinks;
