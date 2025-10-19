import Chip from "../../../components/common/Chip";
import Image from "../../../components/common/Image";
import ProductTitle from "./ProductTitle";

const ProductDescription = () => {
  return (
    <div className="space-y-[40px] lg:space-y-[60px]">
      <div className="space-y-1 lg:space-y-2">
        <ProductTitle title="Black Automatic Watch" />
        <p className="text-c-sm lg:text-c-base text-body-text">
          The St. Louis Meramec Canoe Company was founded by Alfred Wickett in
          1922. Wickett had previously worked for the Old Town Canoe Co from
          1900 to 1914. Manufacturing of the classic wooden canoes in Valley
          Park, Missouri ceased in 1978.
        </p>
      </div>

      <div className="space-y-1 lg:space-y-2">
        <h2 className="text-c-lg lg:text-c-xl font-semibold">Fabric + Care</h2>
        <div className="text-c-sm lg:text-c-base text-body-text">
          <p>Material: Soft wool blend</p>
          <p>Color: Various</p>
        </div>
      </div>

      <div className="space-y-1 lg:space-y-2">
        <h2 className="text-c-lg lg:text-c-xl font-semibold">
          Sale performance
        </h2>
        <div className="text-c-sm lg:text-c-base text-body-text">
          <p>Sales: 0</p>
          <p>Review Count: -</p>
          <p>Review Average: -</p>
        </div>
      </div>

      <div className="space-y-1 lg:space-y-2">
        <h2 className="text-c-lg lg:text-c-xl font-semibold">Keywords</h2>
        <div className="flex flex-wrap items-center gap-2">
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
  );
};

export default ProductDescription;
