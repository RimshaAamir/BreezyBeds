// components/Header.tsx
import Logo from './Logo';
import NavigationLinks from './NavigationLinks';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 px-6 py-4">
      <div className="flex items-center justify-between">
        <Logo />
        <NavigationLinks />
        <UserMenu />
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;
