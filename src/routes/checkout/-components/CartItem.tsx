import { useState } from "react";
import Image from "../../../components/common/Image";
import QuantitySelector from "../../../components/common/QuantitySelector";

const CartItem = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="pt-6 border-t border-t-gray-450 flex gap-6 items-center">
      <div className="w-[96px] h-[108px] overflow-hidden rounded-[12px] aspect-square">
        <Image
          src="/watch.png"
          alt="watch"
          className="w-full h-full aspect-square"
        />
      </div>

      <div className="space-y-1 w-full">
        <p className="text-c-sm lg:text-c-base font-semibold text-primary">
          Black Automatic Watch
        </p>

        <div className="space-y-5">
          <div className="flex gap-1 items-center">
            <Image src="/icons/resize.svg" alt="resize" />
            <p className="text-body-text text-c-xs lg:text-c-sm">Size</p>
          </div>

          <div className="max-lg:flex justify-between">
            <div className="lg:hidden">
              <p className="text-c-sm text-primary font-semibold">$169.99</p>
              <p className="text-c-xs text-body-text text-end line-through">
                $199.99
              </p>
            </div>

            <QuantitySelector count={count} setCount={setCount} />
          </div>
        </div>
      </div>

      <div className="max-lg:hidden">
        <p className="text-c-base text-primary font-semibold">$169.99</p>
        <p className="text-c-sm text-body-text text-end line-through">
          $199.99
        </p>
      </div>
    </div>
  );
};

export default CartItem;
