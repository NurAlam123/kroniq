import type { ButtonHTMLAttributes } from "react";

const SliderButton = ({
  active = false,
  ...props
}: { active?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`size-4 rounded-full ${active ? "bg-primary" : "bg-primary/50"}`}
      {...props}
    ></button>
  );
};

export default SliderButton;
