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
    <div className="flex max-lg:flex-col-reverse gap-4 lg:gap-6 mb-3">
      <div className="lg:space-y-4 max-lg:flex max-lg:justify-between gap-4">
        {PRODUCT_IMAGES.map((src, i) => (
          <div
            key={`product-image-${i}`}
            role="presentation"
            className={cn(
              "w-fit lg:w-[140px] overflow-hidden rounded-[16px] h-fit",
              selectedImage === src && "ring ring-vibrant",
            )}
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt="product"
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Image Preview */}
      <div className="w-full lg:w-[640px] md:h-[678px] rounded-[16px] overflow-hidden">
        <Image src={selectedImage} alt="product" className="w-full h-full" />
      </div>
    </div>
  );
};

export default ProductImagePreview;
