import { createFileRoute } from "@tanstack/react-router";
import Image from "../../components/common/Image";
import PriceAndRatings from "./-components/PriceAndRatings";
import SizeSelector from "./-components/SizeSelector";
import AddToCart from "./-components/AddToCart";
import TotalCost from "./-components/TotalCost";
import Seperator from "../../components/common/Seperator";
import Chip from "../../components/common/Chip";

export const Route = createFileRoute("/product/$productID")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="py-[40px] max-screen px-[120px]">
      <div className="flex gap-8">
        <div className="grid gap-[52px]">
          {/* Product Images */}
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

          <Seperator />

          {/* Product description */}
          <div className="space-y-[60px]">
            <div className="space-y-2">
              <h1 className="text-c-3xl font-semibold text-primary mb-4">
                Black Automatic Watch
              </h1>
              <p className="text-c-base text-body-text">
                The St. Louis Meramec Canoe Company was founded by Alfred
                Wickett in 1922. Wickett had previously worked for the Old Town
                Canoe Co from 1900 to 1914. Manufacturing of the classic wooden
                canoes in Valley Park, Missouri ceased in 1978.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-c-xl font-semibold">Fabric + Care</h2>
              <div className="text-c-base text-body-text">
                <p>Material: Soft wool blend</p>
                <p>Color: Various</p>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-c-xl font-semibold">Sale performance</h2>
              <div className="text-c-base text-body-text">
                <p>Sales: 0</p>
                <p>Review Count: -</p>
                <p>Review Average: -</p>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-c-xl font-semibold">Keywords</h2>
              <div className="flex items-center gap-2">
                {[
                  "men's fashion",
                  "winter hat",
                  "colorful accessory",
                  "warm headwear",
                ].map((keyword: string, i: number) => (
                  <Chip key={`keywords-${keyword}-${i}`}>
                    <Chip.Icon>
                      <Image
                        src="/icons/sparkle.svg"
                        alt="sparkle icon"
                        width={16}
                        height={16}
                      />
                    </Chip.Icon>
                    <Chip.Text>{keyword}</Chip.Text>
                  </Chip>
                ))}
              </div>
            </div>
          </div>
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
    </div>
  );
}
