import Image from "../../../components/common/Image";

const ProductImagePreview = () => {
  return (
    <div className="flex gap-6 mb-3">
      <div className="space-y-4">
        <div
          role="presentation"
          className="w-[140px] overflow-hidden border border-vibrant rounded-[16px]"
        >
          <Image src="/product/image.png" alt="product" />
        </div>
      </div>

      {/* Image Preview */}
      <div className="w-[640px] h-[678px] rounded-[16px] overflow-hidden">
        <Image src="/product/image.png" alt="product" />
      </div>
    </div>
  );
};

export default ProductImagePreview;
