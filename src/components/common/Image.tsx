import type { HTMLProps } from "react";

const Image = ({ className, ...props }: HTMLProps<HTMLImageElement>) => {
  return (
    <img
      className={`select-none object-cover ${className}`}
      draggable={false}
      {...props}
    />
  );
};

export default Image;
