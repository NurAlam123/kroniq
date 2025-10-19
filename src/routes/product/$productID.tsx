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
import { useEffect, useState } from "react";
import ProductTitle from "./-components/ProductTitle";

export const Route = createFileRoute("/product/$productID")({
  component: RouteComponent,
});

function RouteComponent() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    scrollTo({ top: 0 });
  }, []);

  return (
    <div className="py-[40px] max-screen px-[24px] lg:px-[120px] lg:space-y-24 pb-24">
      <div className="flex max-lg:flex-col gap-8">
        <div className="grid gap-[40px] lg:gap-[52px]">
          {/* Product Images */}
          <ProductImagePreview />

          <div className="mt-[12px] space-y-8">
            <ProductTitle title="Black Automatic Watch" />
            <PriceAndRatings />
            <SizeSelector />
            <AddToCart count={count} setCount={setCount} />
          </div>

          <Seperator />
          {/* Product description */}
          <ProductDescription />
        </div>

        {/* Add to cart section // Desktop */}
        <div className="w-full hidden">
          <div className="border border-gray-450 w-[460px] h-[462px] rounded-[16px] p-[32px] space-y-8">
            <PriceAndRatings />
            {/* Size selection */}
            <SizeSelector />
            {/* Add to cart button */}
            <AddToCart count={count} setCount={setCount} />
            {/* Total */}
            <TotalCost price={169.99} quantity={count} tax={0} />
          </div>
        </div>
      </div>

      <div className="space-y-6 lg:space-y-10 max-lg:mt-[52px]">
        <Title title="Recommended products" />
        <div>
          <ProductCarousel>
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
