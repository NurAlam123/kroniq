import SearchIcon from "../../../assets/icons/Search";
import Button from "../../../components/common/Button";
import Image from "../../../components/common/Image";

const Hero = () => {
  return (
    <div className="h-[550px] md:h-[600px] relative max-lg:bg-gray-150">
      <div className="absolute h-full w-full -z-10 pointer-events-none">
        <Image
          src="/hero-bg.png"
          alt="hero banner"
          className="mx-auto h-full md:object-cover object-center md:block hidden"
        />
      </div>

      <div className="max-screen px-6 md:px-[120px] w-full h-full flex items-center justify-start">
        <div className="w-[632px] flex flex-col gap-2 md:gap-6">
          <p className="text-c-sm md:text-c-lg font-medium text-body-text">
            Starting from: $49.99
          </p>
          <h1 className="text-c-2xl max-lg:w-[312px] md:text-c-4xl font-semibold">
            Exclusive collection for everyone
          </h1>
          <Button className="mt-[32px] md:mt-0 gap-[8px] md:gap-[10px] px-6 py-3 md:px-9">
            <span>Explore</span>
            <SearchIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
