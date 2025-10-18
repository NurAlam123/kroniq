import { createFileRoute } from "@tanstack/react-router";

import PriceAndRatings from "./-components/PriceAndRatings";
import SizeSelector from "./-components/SizeSelector";
import AddToCart from "./-components/AddToCart";
import TotalCost from "./-components/TotalCost";
import Seperator from "../../components/common/Seperator";
import ProductDescription from "./-components/ProductDescription";
import ProductImagePreview from "./-components/ProductImagePreview";
import Title from "../../components/common/Title";
import ProductCarousel from "../../components/product/ProductCarousel";
import ProductCard from "../../components/product/ProductCard";

export const Route = createFileRoute("/product/$productID")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="py-[40px] max-screen px-[120px] space-y-24 pb-24">
      <div className="flex gap-8">
        <div className="grid gap-[52px]">
          {/* Product Images */}
          <ProductImagePreview />

          <Seperator />

          {/* Product description */}
          <ProductDescription />
        </div>

        {/* Add to cart section */}
        <div className="w-full">
          <div className="border border-gray-450 w-[460px] h-[462px] rounded-[16px] p-[32px] space-y-8">
            <PriceAndRatings />

            {/* Size selection */}
            <SizeSelector />

            {/* Add to cart button */}
            <AddToCart />

            {/* Total */}
            <TotalCost />
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <Title title="Recommended products" />
        <div>
          <ProductCarousel>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </ProductCarousel>
        </div>
      </div>
    </div>
  );
}
