import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

const SliderButton = ({
  active = false,
  ...props
}: { active?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "size-4 rounded-full bg-primary/50",
        active && "bg-primary",
      )}
      {...props}
    ></button>
  );
};

export default SliderButton;
