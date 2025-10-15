import type { HTMLProps } from "react";

const FeatureBox = ({
  children,
  className,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div className={`py-[88px] space-y-10 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default FeatureBox;
