import React, { ReactNode } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "md",
  children,
  iconRight,
  className = "",
  ...props
}) => {
  // Base styles
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Variant styles
  const variantStyles =
    variant === "default"
      ? "bg-primary-50 text-white hover:bg-primary-500 hover:text-black active:bg-primary-600"
      : "";

  // Size styles
  const sizeStyles =
    size === "sm"
      ? "px-2 py-2 text-sm"
      : size === "md"
      ? "px-4 py-2 text-base"
      : size === "lg"
      ? "px-6 py-3 text-md"
      : "";

  // Inset 3D Shadow styles
  const shadowStyles =
    "shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(255,255,255,0.1)]";

  // Hover and Active state shadow variations
  const activeShadowStyles =
    "active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.3),inset_0_-4px_8px_rgba(255,255,255,0.3)] active:scale-[0.98]";

  // Combine all styles
  const combinedStyles = `${baseStyles} ${variantStyles} ${sizeStyles} ${shadowStyles} ${activeShadowStyles} ${className} hover:text-black transition-all duration-300`;

  return (
    <button className={combinedStyles} {...props}>
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};
