import React, {
  ReactNode,
  cloneElement,
  isValidElement,
  ReactElement,
} from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "gradient";
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
      ? "bg-primary-50 text-white hover:bg-primary-400 active:bg-primary-400"
      : variant === "gradient"
      ? "bg-gradient-to-r from-gradient-start to-gradient-end text-white hover:opacity-90 active:opacity-80 hover:scale-105 active:scale-100"
      : "border border-primary-500 text-primary-500 hover:bg-primary-50 active:bg-primary-100";

  // Size styles
  const sizeStyles =
    size === "sm"
      ? "px-2 py-1 text-sm"
      : size === "md"
      ? "px-4 py-2 text-base"
      : size === "lg"
      ? "px-6 py-3 text-lg"
      : "";

  // Inset 3D Shadow styles
  const shadowStyles =
    "shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(255,255,255,0.1)]";

  // Hover and Active state shadow variations
  const activeShadowStyles =
    "active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.3),inset_0_-4px_8px_rgba(255,255,255,0.3)] active:scale-[0.98]";

  // Combine all styles
  const combinedStyles = `${baseStyles} ${variantStyles} ${sizeStyles} ${shadowStyles} ${activeShadowStyles} ${className} transition-all duration-300`;

  // Safe icon rendering
  const renderIcon = (icon: React.ReactNode) => {
    // Only process if it's a valid React element
    if (!isValidElement(icon)) return icon;

    // Type-safe way to handle icon props
    const iconElement = icon as ReactElement;
    const iconProps = iconElement.props as Record<string, unknown>;

    // Construct new props carefully
    const enhancedProps: Record<string, unknown> = {
      ...iconProps,
      className: `ml-2 ${iconProps.className || ""}`.trim(),
      size: 20, // Default icon size
    };

    // Clone the element with new props
    return cloneElement(iconElement, enhancedProps);
  };

  return (
    <button className={combinedStyles} {...props}>
      {children}
      {iconRight && renderIcon(iconRight)}
    </button>
  );
};
