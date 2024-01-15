import React from "react";

const shapes = { round: "rounded-lg" } as const;
const variants = {
  gradient: {
    white_A700_cyan_A200_00: "bg-gradient  text-white-A700_a2",
    purple_A400_pink_A400: "bg-gradient1  shadow-bs1 text-white-A700",
  },
  fill: {
    white_A700_0c: "bg-white-A700_0c shadow-bs text-white-A700",
    gray_900_03: "bg-gray-900_03",
    white_A700_16: "bg-white-A700_16",
  },
} as const;
const sizes = { xs: "p-[11px]", sm: "p-[15px]" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
