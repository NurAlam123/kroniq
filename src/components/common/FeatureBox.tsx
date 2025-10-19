import type { HTMLProps } from "react";
import { cn } from "../../lib/utils";

const FeatureBox = ({
  children,
  className,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "py-[52px] lg:py-[88px] space-y-6 lg:space-y-10",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default FeatureBox;
