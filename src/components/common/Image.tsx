import type { HTMLProps } from "react";
import { cn } from "../../lib/utils";

const Image = ({ className, ...props }: HTMLProps<HTMLImageElement>) => {
  return (
    <img
      className={cn("select-none object-cover", className)}
      draggable={false}
      {...props}
    />
  );
};

export default Image;
