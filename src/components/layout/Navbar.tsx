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
        <MenuButton />
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
    <div
      className={cn(
        "flex max-lg:flex-col items-center gap-6 justify-center",
        className,
      )}
    >
      <div className="space-y-2">
        <Link
          to="/"
          className="bg-blue-500 px-6 py-2 rounded-full text-white transition-all ease-in-out font-medium text-center block shadow-sm active:scale-95 hover:bg-blue-600 lg:hidden"
        >
          Register
        </Link>

        <Link
          to="/"
          className="block bg-white lg:bg-blue-500 px-6 py-2 rounded-full text-blue-500 lg:text-white transition-all ease-in-out font-medium text-center shadow-sm active:scale-95 hover:bg-gray-50 lg:hover:bg-blue-600"
        >
          Login
        </Link>
      </div>

      <button className="cursor-pointer hidden max-lg:items-center max-lg:gap-2">
        <Image
          src="/icons/user.svg"
          alt="user icon"
          width={24}
          height={24}
          className="size-5 lg:size-6"
        />
        <span className="lg:hidden text-body-text">User</span>
      </button>

      <CartButton className="max-lg:hidden" />

      <div className="hidden">
        <Link
          to="/"
          className="block w-full bg-red-500 px-6 py-2 rounded-full text-white transition-all ease-in-out font-medium text-center shadow-sm active:scale-95 hover:bg-red-600"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

const MenuButton = () => {
  return (
    <div className="max-lg:flex max-lg:justify-center max-lg:gap-4">
      <CartButton className="lg:hidden" />
      <div className="relative">
        <button popoverTarget="menu" className="lg:hidden">
          <Image src="/icons/hamburger-menu.svg" className="size-9" />
        </button>

        <div
          popover="auto"
          id="menu"
          className="w-32 absolute p-4 bg-gray-150 border border-gray-450 shadow-sm rounded-2xl top-20 left-full -translate-x-[calc(100%+10px)]"
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

const CartButton = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "relative cursor-pointer max-lg:flex max-lg:items-center max-lg:gap-2",
        className,
      )}
      {...props}
    >
      <div className="relative">
        <Image
          src="/icons/cart.svg"
          alt="cart icon"
          width={24}
          height={24}
          className="size-5 lg:size-6"
        />
        <span className="absolute -top-3 -right-3 lg:-top-2 lg:-right-2 w-5 h-5 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center font-medium">
          3
        </span>
      </div>
    </button>
  );
};

export default Navbar;
