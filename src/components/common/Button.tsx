import type { ButtonHTMLAttributes } from "react";

const Button = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`w-fit rounded-full bg-primary hover:bg-primary/90 py-5 px-8 text-white font-medium flex items-center justify-center gap-2 active:scale-95 transition-all ${className}`}
      {...props}
    />
  );
};

export default Button;
