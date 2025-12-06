import React from "react";

export interface BadgeProps {
  variant?: "residential" | "quick" | "automated";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "residential",
  className = "",
}) => {
  const badgeVariants = {
    residential: {
      text: "RESIDENTIAL",
      textColor: "text-blue",
      bgColor: "bg-bluebg",
    },
    quick: {
      text: "QUICK",
      textColor: "text-red",
      bgColor: "bg-redbg",
    },
    automated: {
      text: "AUTOMATED",
      textColor: "text-purple",
      bgColor: "bg-purplebg",
    },
  };

  const { text, textColor, bgColor } = badgeVariants[variant];

  return (
    <div
      className={`
      inline-flex items-center 
      px-3 py-1 
      rounded-lg 
      ${bgColor} 
      ${textColor} 
      font-medium 
      text-xs
      shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]
      ${className}
    `}
    >
      {text}
    </div>
  );
};

export const BadgeGroup: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Badge variant="residential" />
      <Badge variant="quick" />
      <Badge variant="automated" />
    </div>
  );
};
