import { useState } from "react";
import { cn } from "../../../lib/utils";

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState("S");

  return (
    <div>
      <p className="text-c-base font-semibold">Size: {selectedSize}</p>
      <div className="flex mt-[12px] gap-[8.5px]">
        {["S", "M", "L", "XL", "2XL"].map((size) => (
          <button
            key={`size-${size}`}
            onClick={() => setSelectedSize(size)}
            className={cn(
              "w-[72px] h-[44px] font-semibold rounded-[12px] transition-all active:scale-[0.98] cursor-pointer",
              selectedSize === size
                ? "bg-vibrant text-white"
                : "text-body-text border border-gray-450",
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
