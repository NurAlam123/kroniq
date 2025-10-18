import Image from "../../../components/common/Image";

const PriceAndRatings = () => {
  return (
    <div className="flex justify-between items-start">
      {/* Ratings */}
      <div className="flex items-start gap-[6px]">
        <div className="size-5 flex justify-center items-center">
          <Image
            src="/icons/star.svg"
            alt="star icon"
            className="w-full h-full"
          />
        </div>
        <p className="flex text-body-text text-c-base space-x-[6px]">
          <span className="font-semibold">4.9</span>
          <span className="font-semibold">·</span>
          <a href="#" className="font-medium underline underline-offset-2">
            142 reviews
          </a>
        </p>
      </div>

      {/* Price */}
      <div>
        <p className="text-c-xl font-semibold">$169.99</p>
        <p className="line-through font-medium text-c-sm text-body-text text-end">
          $199.99
        </p>
      </div>
    </div>
  );
};

export default PriceAndRatings;
