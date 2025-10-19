import type { HTMLProps } from "react";
import { cn } from "../../lib/utils";

const FeatureBox = ({
  children,
  className,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div className={cn("py-[88px] space-y-10", className)} {...props}>
      {children}
    </div>
  );
};

export default FeatureBox;
