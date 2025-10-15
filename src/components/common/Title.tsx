const Title = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <h2 className="text-[36px]/[40px] font-semibold flex gap-2">
      {title}
      {subtitle && <span className="text-[#4B5563]/80">{subtitle}</span>}
    </h2>
  );
};

export default Title;
