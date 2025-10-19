import { useState } from "react";
import { cn } from "../../../lib/utils";

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState("S");

  const AVAILABLE_SIZES = ["S", "M", "L", "XL"];

  return (
    <div>
      <p className="text-c-sm lg:text-c-base font-semibold">
        Size: {selectedSize}
      </p>
      <div className="flex flex-wrap mt-[12px] gap-[8.5px]">
        {["S", "M", "L", "XL", "2XL"].map((size) => (
          <button
            key={`size-${size}`}
            onClick={() => setSelectedSize(size)}
            className={cn(
              "w-[68px] h-[36px] lg:w-[72px] lg:h-[44px] font-semibold rounded-[12px] transition-all not-disabled:active:scale-95 not-disabled:cursor-pointer will-change-transform disabled:text-body-text/40 max-lg:text-c-xs",
              selectedSize === size
                ? "bg-vibrant text-white border border-transparent"
                : "text-body-text border border-gray-450",
            )}
            disabled={!AVAILABLE_SIZES.includes(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
