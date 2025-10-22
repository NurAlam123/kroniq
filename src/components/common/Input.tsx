import type { HTMLProps } from "react";
import { cn } from "../../lib/utils";

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  divClassName?: string;
}

const Input = ({
  label,
  name,
  className,
  divClassName,
  type,
  ...props
}: InputProps) => {
  return (
    <div className={cn("flex flex-col gap-2", divClassName)}>
      <label
        htmlFor={name}
        className="text-c-sm lg:text-c-base text-primary font-semibold"
      >
        {label}
      </label>

      <input
        name={name}
        className={cn(
          "border border-gray-450 rounded-[12px] px-4 py-3 w-full",
          className,
        )}
        type={type || "text"}
        {...props}
      />
    </div>
  );
};

export default Input;
