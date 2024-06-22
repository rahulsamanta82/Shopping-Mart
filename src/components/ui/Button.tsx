import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  onClick?: () => void;
};

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex justify-center items-center font-semibold transition-all duration-200 border rounded-md";
  const variantStyles = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 focus:bg-slate-800",
    secondary: "bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700",
    tertiary: "bg-gray-200 text-black hover:bg-gray-300 focus:bg-gray-300",
  };

  const sizeStyles = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${
    sizeStyles[size]
  } ${fullWidth ? "w-full" : ""}`;

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
