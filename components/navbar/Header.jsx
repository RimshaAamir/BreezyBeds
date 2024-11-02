// components/Header.jsx
import Logo from './Logo';
import NavigationLinks from './NavigationLinks';
import SearchBar from './SearchBar'
import UserMenu from './UserMenu';

const Header = () => {
  return (
    <header className="text-textLight px-6 py-4 shadow-md">
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
