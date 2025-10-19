import { Link } from "@tanstack/react-router";
import Image from "../common/Image";

const ProductCard = () => {
  return (
    <div className="w-(--card-width) max-w-[384px] h-[448px] group/card snap-center lg:snap-start">
      {/* product image */}
      <div className="relative w-fit">
        {/* discount tag */}
        <div className="absolute px-3.5 py-2 max-w-[132px] w-fit bg-white rounded-full flex items-center justify-center gap-2 top-3.5 left-3.5 z-10">
          <Image
            src="/icons/discount.svg"
            alt="discount icon"
            width={16}
            height={16}
          />
          <p className="text-c-xs text-body-text select-none">50% Discount</p>
        </div>

        <div className="rounded-[16px] overflow-hidden w-(--card-width)">
          <Link to="/product/$productID" params={{ productID: "sample" }}>
            <Image
              src="/watch.png"
              alt="product image"
              className="w-full group-hover/card:scale-110 transition-transform"
            />
          </Link>
        </div>

        {/* add to card btn */}
        <button className="absolute top-3 right-3 bg-white w-9 h-9 rounded-full flex justify-center items-center active:scale-[.98] translate-z-0 backface-hidden">
          <Image
            src="/icons/shopping-bag.svg"
            alt="shopping bag icon"
            width={18}
            height={18}
          />
        </button>
      </div>

      {/* product details */}
      <div className="mt-5 px-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-c-base font-semibold">Black Automatic Watch</p>
            <p className="text-body-text text-c-sm">Accessories</p>
          </div>
          <div className="text-end">
            <p className="text-c-base font-semibold">$169.99 </p>
            <p className="text-body-text text-c-sm line-through select-none">
              $199.99
            </p>
          </div>
        </div>

        {/* product ratings */}
        <div className="flex gap-1 items-center mt-4">
          <Image
            src="/icons/star.svg"
            alt="rating star icon"
            width={14}
            height={14}
          />
          <p className="text-c-sm text-body-text">
            <span>4.9</span> (<span>98</span>)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
