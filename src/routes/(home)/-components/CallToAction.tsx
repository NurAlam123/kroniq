import Button from "../../../components/common/Button";
import Image from "../../../components/common/Image";

const CallToAction = () => {
  return (
    <div className="my-[52px] h-[438px] bg-neutral-100 rounded-[24px] overflow-hidden relative">
      <Image
        src="/call-to-action.png"
        alt="call to action"
        className="absolute left-1/2 w-full"
      />

      <div className="mx-[120px] flex items-center h-full">
        <div>
          <p className="text-c-lg text-body-text font-medium mb-3.5">
            100% Original Products
          </p>
          <p className="text-c-2xl text-primary w-[362px] font-semibold mb-6">
            The All New Fashion Collection Items
          </p>
          <p className="text-c-lg text-body-text font-medium mb-6">
            Starting from: $59.99
          </p>
          <Button className="px-8">
            <span>Shop now</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
