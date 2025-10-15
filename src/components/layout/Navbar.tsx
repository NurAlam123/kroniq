import Image from "../common/Image";

const Navbar = () => {
  return (
    <div className="bg-white border-b border-[#e5e7eb]">
      <div className="@container max-screen">
        <div className="h-[100px] flex items-center @max-max:px-[120px] justify-between">
          <NavbarLogo />
          <SearchBar />
          <ActionButton />
        </div>
      </div>
    </div>
  );
};

const NavbarLogo = () => {
  return (
    <div className="w-fit select-none mx-2">
      <h1 className="font-semibold text-[34px] -tracking-[3px] leading-8">
        Chronos
      </h1>
      <p className="text-sm text-end leading-2 tracking-tighter">eCommerce</p>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="w-[400px] h-[52px] bg-[#f8f8f8] rounded-full flex items-center px-6 gap-3 py-2 focus-within:ring-2 ring-blue-500 transition-all ease-in-out">
      <div>
        <Image
          src="/icons/search.svg"
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
        <Image src="/icons/user.svg" width={24} height={24} />
      </button>
      <button className="relative">
        <Image src="/icons/cart.svg" width={24} height={24} />
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center font-medium">
          3
        </span>
      </button>
    </div>
  );
};

export default Navbar;
