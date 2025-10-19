import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

const Button = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "group w-fit rounded-full bg-primary hover:bg-primary/90 py-5 px-8 text-white font-medium flex items-center justify-center gap-2 active:scale-[0.98] transition-[scale] will-change-transform",
        className,
      )}
      {...props}
    />
  );
};

export default Button;
