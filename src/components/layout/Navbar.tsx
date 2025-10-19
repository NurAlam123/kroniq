import { Link } from "@tanstack/react-router";
import Logo from "../../assets/Logo";
import Image from "../common/Image";
import { cn } from "../../lib/utils";

const Navbar = () => {
  return (
    <div className="bg-white border-b border-gray-450">
      <div className="lg:max-screen h-[100px] flex items-center px-[16px] max-lg:gap-[32px] lg:px-[120px] justify-between">
        <Link to="/">
          <div className="hidden lg:block">
            <Logo />
          </div>
          <div className="block lg:hidden">
            <Image src="/logo.svg" className="min-w-6" />
          </div>
        </Link>
        <SearchBar />
        <ActionButton />
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="min-w-[200px] h-[36px] lg:w-[400px] lg:h-[52px] bg-gray-150 rounded-full flex items-center px-6 gap-3 py-2 focus-within:ring-2 ring-blue-500 transition-all ease-in-out">
      <div>
        <Image
          src="/icons/search.svg"
          alt="search icon"
          width={24}
          height={24}
          className="min-w-4 lg:size-6 aspect-square"
        />
      </div>
      <div>
        <input
          className="outline-none ring-0 py-1 text-xs lg:text-sm"
          placeholder="Search in products..."
        />
      </div>
    </div>
  );
};

const Menu = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-6 justify-center", className)}>
      <button className="cursor-pointer">
        <Image src="/icons/user.svg" alt="user icon" width={24} height={24} />
      </button>
      <button
        className="relative cursor-pointer"
        onClick={() => console.log("HOHO")}
      >
        <Image src="/icons/cart.svg" alt="cart icon" width={24} height={24} />
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center font-medium">
          3
        </span>
      </button>
    </div>
  );
};

const ActionButton = () => {
  return (
    <div>
      <div className="relative">
        <button popoverTarget="menu" className="lg:hidden [anchor-name:--menu]">
          <Image src="/icons/hamburger-menu.svg" className="size-9" />
        </button>

        <div
          popover="auto"
          id="menu"
          className="w-32 absolute p-4 bg-gray-150 border border-gray-450 shadow-sm [position-anchor:--menu] [position-area:bottom_left] rounded-2xl starting:scale-95 starting:opacity-0 transition-all scale-100 opacity-100"
        >
          <Menu />
        </div>
      </div>

      <div className="hidden lg:block">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
