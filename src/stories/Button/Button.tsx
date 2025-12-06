import React from "react";

export interface ButtonProps {
  /** Button variant */
  variant?: "primary" | "secondary" | "accent";
  /** Button size */
  size?: "small" | "medium" | "large";
  /** Is the button disabled? */
  disabled?: boolean;
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Simple Button component using our custom color palette */
export const Button = ({
  variant = "primary",
  size = "medium",
  disabled = false,
  label,
  onClick,
  ...props
}: ButtonProps) => {
  // Define base classes
  const baseClasses =
    "font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Define variant classes
  const variantClasses = {
    primary:
      "bg-primary text-neutral-50 hover:bg-primary-dark focus:ring-primary",
    secondary:
      "bg-neutral-200 text-neutral-900 hover:bg-neutral-300 focus:ring-neutral-400",
    accent:
      "bg-primary-dark text-neutral-50 hover:bg-primary-light focus:ring-primary-light",
  };

  // Define size classes
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2.5 text-base",
    large: "px-6 py-3 text-lg",
  };

  // Define disabled classes
  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer hover:shadow-md active:scale-[0.98]";

  // Combine all classes
  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabledClasses,
  ].join(" ");

  return (
    <button
      type="button"
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
