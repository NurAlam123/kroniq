import Image from "../../../components/common/Image";

const InputBox = ({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <div className="flex flex-col border rounded-[16px] border-gray-450">
      <div className="flex gap-3 p-6 border-b border-b-gray-450">
        <Image src={icon} width={24} height={24} />

        <p className="text-c-base font-medium text-body-text uppercase">
          {title}
        </p>
      </div>

      <div className="px-6 pt-6 pb-8 space-y-6">{children}</div>
    </div>
  );
};

export default InputBox;
