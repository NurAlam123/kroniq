import Logo from "../../assets/Logo";
import Image from "../common/Image";

const Navbar = () => {
  return (
    <div className="bg-white border-b border-gray-450">
      <div className="@container max-screen">
        <div className="h-[100px] flex items-center @max-max:px-[120px] justify-between">
          <Logo />
          <SearchBar />
          <ActionButton />
        </div>
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="w-[400px] h-[52px] bg-gray-150 rounded-full flex items-center px-6 gap-3 py-2 focus-within:ring-2 ring-blue-500 transition-all ease-in-out">
      <div>
        <Image
          src="/icons/search.svg"
          alt="search icon"
          width={24}
          height={24}
          className="size-6 aspect-square"
        />
      </div>
      <div>
        <input
          className="outline-none ring-0 py-1 text-sm"
          placeholder="Search in products..."
        />
      </div>
    </div>
  );
};

const ActionButton = () => {
  return (
    <div className="flex items-center gap-6 justify-center">
      <button>
        <Image src="/icons/user.svg" alt="user icon" width={24} height={24} />
      </button>
      <button className="relative">
        <Image src="/icons/cart.svg" alt="cart icon" width={24} height={24} />
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center font-medium">
          3
        </span>
      </button>
    </div>
  );
};

export default Navbar;
