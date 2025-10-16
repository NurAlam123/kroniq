import SearchIcon from "../../../assets/icons/Search";
import Button from "../../../components/common/Button";
import Image from "../../../components/common/Image";

const Hero = () => {
  return (
    <div className="h-[600px] relative">
      <div className="absolute h-full w-full -z-10 pointer-events-none">
        <Image
          src="/hero-bg.png"
          alt="hero banner"
          className="mx-auto h-full object-contain"
        />
      </div>

      <div className="max-screen w-full h-full flex items-center justify-start">
        <div className="w-[632px] flex flex-col gap-6">
          <p className="text-[20px]/[28px] font-medium text-[#4b5563]">
            Starting from: $49.99
          </p>
          <h1 className="text-[64px]/[72px] font-semibold">
            Exclusive collection for everyone
          </h1>
          <Button className="gap-[10px] px-9">
            <span>Explore</span>
            <SearchIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
