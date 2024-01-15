import React from "react";

const sizeClasses = {
  txtAxiformaExtraBold72: "font-axiforma font-extrabold",
  txtHelvetica20: "font-helvetica font-normal",
  txtAxiformaBlack40: "font-axiforma font-black",
  txtAxiformaBold32: "font-axiforma font-bold",
  txtHelveticaBold28: "font-bold font-helvetica",
  txtHelvetica20WhiteA7006d: "font-helvetica font-normal",
  txtAxiformaSemiBold22: "font-axiforma font-semibold",
  txtPoppinsBold24: "font-bold font-poppins",
  txtAxiformaMedium22WhiteA700a2: "font-axiforma font-medium",
  txtAxiformaSemiBold28: "font-axiforma font-semibold",
  txtHelvetica20WhiteA700: "font-helvetica font-normal",
  txtAxiformaMedium22: "font-axiforma font-medium",
  txtAxiformaExtraBold72_1: "font-axiforma font-extrabold",
  txtAxiformaBlack5574: "font-axiforma font-black",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
