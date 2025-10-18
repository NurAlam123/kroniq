const SizeSelector = () => {
  return (
    <div>
      <p className="text-c-base font-semibold">Size: S</p>
      <div className="flex mt-[12px] gap-[8.5px]">
        <button className="w-[72px] h-[44px] bg-vibrant font-semibold rounded-[12px] text-white">
          S
        </button>
        <button className="w-[72px] h-[44px] font-semibold rounded-[12px] text-body-text border border-gray-450">
          M
        </button>
      </div>
    </div>
  );
};

export default SizeSelector;
