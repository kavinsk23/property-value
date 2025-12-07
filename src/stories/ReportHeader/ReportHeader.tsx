// ReportHeader.tsx
import React from "react";

export type ReportHeaderColor =
  | "headerblue"
  | "headergreen"
  | "headeryellow"
  | "headerorange"
  | "headerteal"
  | "headerpurple";

export type ReportHeaderSize = "sm" | "md" | "lg";

export interface ReportHeaderProps {
  /** The text content of the header */
  children: React.ReactNode;
  /** The background color variant */
  color?: ReportHeaderColor;
  /** The size of the header */
  size?: ReportHeaderSize;
  /** Custom CSS class */
  className?: string;
  /** Whether the header is clickable */
  onClick?: () => void;
}

const sizeClasses: Record<ReportHeaderSize, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const colorClasses: Record<ReportHeaderColor, string> = {
  headerblue: "bg-headerblue text-black",
  headergreen: "bg-headergreen text-black",
  headeryellow: "bg-headeryellow text-black",
  headerorange: "bg-headerorange text-black",
  headerteal: "bg-headerteal text-white",
  headerpurple: "bg-headerpurple text-black",
};

export const ReportHeader: React.FC<ReportHeaderProps> = ({
  children,
  color = "headerblue",
  size = "md",
  className = "",
  onClick,
}) => {
  const baseClasses = "rounded-lg font-medium inline-block";

  const combinedClasses = [
    baseClasses,
    sizeClasses[size],
    colorClasses[color],
    onClick ? "cursor-pointer hover:opacity-90 transition-opacity" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const Component = onClick ? "button" : "div";

  return (
    <Component
      className={combinedClasses}
      onClick={onClick}
      type={onClick ? "button" : undefined}
    >
      {children}
    </Component>
  );
};

export default ReportHeader;
