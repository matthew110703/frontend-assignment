import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={`bg-accent-gradient ring-accent-2/50 text-background rounded-sm border-2 px-8 py-3 font-medium tracking-[3%] transition-all duration-300 hover:ring-2 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
