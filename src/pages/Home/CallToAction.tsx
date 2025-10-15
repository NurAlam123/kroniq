import Button from "../../components/common/Button";
import Image from "../../components/common/Image";

const CallToAction = () => {
  return (
    <div className="my-[52px] h-[438px] bg-[#f5f5f5] rounded-[24px] overflow-hidden relative">
      <Image
        src="/call-to-action.png"
        alt="call to action"
        className="absolute left-1/2 w-full"
      />

      <div className="mx-[120px] flex items-center h-full">
        <div>
          <p className="text-[20px]/[28px] text-[#4b5563] font-medium mb-3.5">
            100% Original Products
          </p>
          <p className="text-[36px]/[40px] text-[#111827] w-[362px] font-semibold mb-6">
            The All New Fashion Collection Items
          </p>
          <p className="text-[20px]/[28px] text-[#4b5563] font-medium mb-6">
            Starting from: $59.99
          </p>
          <Button className="px-8">Shop now</Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
