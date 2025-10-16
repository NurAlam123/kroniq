import Image from "../../../components/common/Image";

const BrandInfo = () => {
  return (
    <div className="h-[182] py-[52px]">
      <div className="border rounded-[16px] border-gray-450 flex px-10 py-6 justify-between divide-x divide-gray-450">
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
    <div className="flex gap-4 items-center w-full not-first:px-7">
      <div>
        <Image src={src} alt={alt} width={24} height={24} />
      </div>
      <div>
        <p className="text-c-md font-semibold">{title}</p>
        <p className="text-c-sm text-body-text">{subtitle}</p>
      </div>
    </div>
  );
};

export default BrandInfo;
