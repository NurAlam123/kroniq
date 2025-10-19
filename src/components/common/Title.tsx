const Title = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <h2 className="text-c-xl lg:text-c-3xl font-semibold flex gap-2">
      {title}
      {subtitle && (
        <span className="text-body-text/80 max-lg:hidden">{subtitle}</span>
      )}
    </h2>
  );
};

export default Title;
