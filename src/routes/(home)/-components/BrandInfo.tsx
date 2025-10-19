import Image from "../../../components/common/Image";

const BrandInfo = () => {
  return (
    <div className="h-[182] py-[52px]">
      <p className="text-c-base font-semibold text-primary lg:hidden mb-6">
        Kroniq&reg; always with you
      </p>
      <div className="lg:border rounded-[16px] lg:border-gray-450 grid max-lg:grid-cols-2 max-lg:grid-rows-2 lg:flex lg:px-10 lg:py-6 justify-between lg:divide-x lg:divide-gray-450 max-lg:gap-2">
        <BrandInfoCard
          src="/icons/truck.svg"
          alt="shipping truck icon"
          title="Free shipping"
          subtitle="On orders over $50.00"
        />
        <BrandInfoCard
          src="/icons/package.svg"
          alt="package box exchange icon"
          title="Very easy to return"
          subtitle="Just phone number"
        />
        <BrandInfoCard
          src="/icons/globe.svg"
          alt="globe icon"
          title="Worldwide delivery"
          subtitle="Fast delivery worldwide"
        />
        <BrandInfoCard
          src="/icons/refund.svg"
          alt="coin icon"
          title="Refunds policy"
          subtitle="60 days return for any reason"
        />
      </div>
    </div>
  );
};

const BrandInfoCard = ({
  src,
  alt,
  title,
  subtitle,
}: {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center w-full lg:not-first:px-7 max-lg:border max-lg:border-gray-450 max-lg:rounded-[16px] max-lg:py-4">
      <div>
        <Image src={src} alt={alt} width={24} height={24} />
      </div>
      <div className="text-center">
        <p className="text-c-sm lg:text-c-md font-semibold">{title}</p>
        <p className="text-c-xs lg:text-c-sm text-body-text">{subtitle}</p>
      </div>
    </div>
  );
};

export default BrandInfo;
