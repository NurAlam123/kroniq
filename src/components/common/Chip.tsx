const Chip = ({ children }: { children: React.ReactElement[] }) => {
  return (
    <div className="border border-gray-450 bg-white px-[14px] py-[8px] rounded-full w-fit flex items-center justify-center gap-1">
      {children}
    </div>
  );
};

Chip.Text = function ChipText({ children }: { children: string }) {
  return <p className="text-c-xs text-body-text select-none">{children}</p>;
};

Chip.Icon = function ChipIcon({ children }: { children: React.ReactElement }) {
  return <div>{children}</div>;
};

export default Chip;
