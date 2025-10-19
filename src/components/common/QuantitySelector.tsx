import { cn } from "../../lib/utils";

const QuantitySelector = ({
  count,
  setCount,
}: {
  count: number;
  setCount: (value: number) => void;
}) => {
  return (
    <div className="w-[110px] h-[40px] bg-gray-150 border border-gray-450 rounded-full flex gap-2 items-center px-3 py-2">
      <button
        className={cn(
          "rounded-full size-[24px] min-w-[24px] min-h-[24px] border border-gray-450 bg-white flex items-center justify-center disabled:opacity-50",
        )}
        onClick={() => count > 1 && setCount(count - 1)}
        disabled={count <= 1}
      >
        <MinusIcon className="fill-primary" />
      </button>

      <div className="w-full h-full relative">
        <p className="absolute text-c-sm lg:text-c-base text-center font-medium select-none text-body-text inset-0">
          {count}
        </p>
      </div>

      <button
        className={cn(
          "rounded-full size-[24px] min-w-[24px] min-h-[24px] border border-gray-450 bg-white flex items-center justify-center disabled:opacity-50",
        )}
        onClick={() => count < 9 && setCount(count + 1)}
        disabled={count >= 9}
      >
        <PlusIcon className="fill-primary" />
      </button>
    </div>
  );
};

const MinusIcon = ({ className }: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="10"
      height="2"
      viewBox="0 0 10 2"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1C0 0.867392 0.0478894 0.740215 0.133133 0.646447C0.218377 0.552679 0.333993 0.5 0.454545 0.5H9.54545C9.66601 0.5 9.78162 0.552679 9.86687 0.646447C9.95211 0.740215 10 0.867392 10 1C10 1.13261 9.95211 1.25978 9.86687 1.35355C9.78162 1.44732 9.66601 1.5 9.54545 1.5H0.454545C0.333993 1.5 0.218377 1.44732 0.133133 1.35355C0.0478894 1.25978 0 1.13261 0 1Z"
      />
    </svg>
  );
};

const PlusIcon = ({ className }: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 0C5.12055 0 5.23617 0.0478894 5.32141 0.133133C5.40666 0.218377 5.45455 0.333993 5.45455 0.454545V4.54545H9.54545C9.66601 4.54545 9.78162 4.59334 9.86687 4.67859C9.95211 4.76383 10 4.87945 10 5C10 5.12055 9.95211 5.23617 9.86687 5.32141C9.78162 5.40666 9.66601 5.45455 9.54545 5.45455H5.45455V9.54545C5.45455 9.66601 5.40666 9.78162 5.32141 9.86687C5.23617 9.95211 5.12055 10 5 10C4.87945 10 4.76383 9.95211 4.67859 9.86687C4.59334 9.78162 4.54545 9.66601 4.54545 9.54545V5.45455H0.454545C0.333993 5.45455 0.218377 5.40666 0.133133 5.32141C0.0478894 5.23617 0 5.12055 0 5C0 4.87945 0.0478894 4.76383 0.133133 4.67859C0.218377 4.59334 0.333993 4.54545 0.454545 4.54545H4.54545V0.454545C4.54545 0.333993 4.59334 0.218377 4.67859 0.133133C4.76383 0.0478894 4.87945 0 5 0Z"
      />
    </svg>
  );
};

export default QuantitySelector;
