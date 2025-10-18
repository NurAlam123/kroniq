import { useState } from "react";
import Image from "../../../components/common/Image";
import { cn } from "../../../lib/utils";

const PRODUCT_IMAGES = [
  "/product/product-preview-1.png",
  "/product/product-preview-2.png",
  "/product/product-preview-3.png",
  "/product/product-preview-4.png",
];

const ProductImagePreview = () => {
  const [selectedImage, setSelectedImage] = useState("/product/image.png");

  return (
    <div className="flex gap-6 mb-3">
      <div className="space-y-4">
        {PRODUCT_IMAGES.map((src, i) => (
          <div
            key={`product-image-${i}`}
            role="presentation"
            className={cn(
              "w-[140px] overflow-hidden rounded-[16px]",
              selectedImage === src && "ring ring-vibrant",
            )}
            onClick={() => setSelectedImage(src)}
          >
            <Image src={src} alt="product" />
          </div>
        ))}
      </div>

      {/* Image Preview */}
      <div className="w-[640px] h-[678px] rounded-[16px] overflow-hidden">
        <Image src={selectedImage} alt="product" className="w-full h-full" />
      </div>
    </div>
  );
};

export default ProductImagePreview;
