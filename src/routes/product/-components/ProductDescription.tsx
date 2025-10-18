import Chip from "../../../components/common/Chip";
import Image from "../../../components/common/Image";

const ProductDescription = () => {
  return (
    <div className="space-y-[60px]">
      <div className="space-y-2">
        <h1 className="text-c-3xl font-semibold text-primary mb-4">
          Black Automatic Watch
        </h1>
        <p className="text-c-base text-body-text">
          The St. Louis Meramec Canoe Company was founded by Alfred Wickett in
          1922. Wickett had previously worked for the Old Town Canoe Co from
          1900 to 1914. Manufacturing of the classic wooden canoes in Valley
          Park, Missouri ceased in 1978.
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
  );
};

export default ProductDescription;
