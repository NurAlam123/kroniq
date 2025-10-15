import type { ButtonHTMLAttributes } from "react";

const Button = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`w-fit rounded-full bg-[#111827] py-5 px-8 text-white font-medium flex items-center justify-center gap-2 active:scale-95 transition-[scale] ${className}`}
      {...props}
    />
  );
};

export default Button;
