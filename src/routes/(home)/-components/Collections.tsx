import FeatureBox from "../../../components/common/FeatureBox";
import Image from "../../../components/common/Image";
import Title from "../../../components/common/Title";

const Collections = () => {
  return (
    <FeatureBox>
      <Title
        title="Start exploring."
        subtitle="Good things are waiting for you"
      />

      <div className="flex gap-5">
        <CollectionCard title="For Men's" subtitle="Starting at $24" href="#" />
        <CollectionCard
          title="For Women's"
          subtitle="Starting at $19"
          href="#"
        />
        <CollectionCard
          title="Accessories"
          subtitle="Explore accessories"
          href="#"
        />
      </div>
    </FeatureBox>
  );
};

const CollectionCard = ({
  title,
  subtitle,
  href,
}: {
  title: string;
  subtitle: string;
  href: string;
}) => {
  return (
    <div className="border border-gray-450 rounded-[16px] p-[40px] w-full flex justify-between divide-x-2 divide-gray-450 gap-3 items-center">
      <div className="w-full">
        <p className="text-c-xl font-semibold">{title}</p>
        <p className="text-c-sm text-body-text">{subtitle}</p>
      </div>
      <div className="min-w-[114px]">
        <a
          href={href}
          className="text-body-text text-c-sm flex gap-2 font-medium uppercase"
        >
          SHOP NOW
          <Image src="/icons/arrow-right.svg" alt="right arrow icon" />
        </a>
      </div>
    </div>
  );
};

export default Collections;
