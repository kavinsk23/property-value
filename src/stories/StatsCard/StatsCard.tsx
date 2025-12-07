// StatsCard.tsx
import React from "react";
import {
  Building2,
  Star,
  ShieldCheck,
  TrendingUp,
  Users,
  CreditCard,
} from "lucide-react";

export type StatCardVariant = "primary" | "secondary" | "tertiary";

export interface StatsCardProps {
  /** The title/heading of the stat card */
  title: string;
  /** The main value/statistic to display */
  value: string;
  /** The variant/color theme of the card */
  variant?: StatCardVariant;
  /** Optional description or subtitle */
  description?: string;
  /** Whether to show a trend indicator */
  showTrend?: boolean;
  /** Trend value (positive or negative percentage) */
  trend?: number;
  /** Custom CSS class */
  className?: string;
}

const variantClasses: Record<
  StatCardVariant,
  {
    bg: string;
    iconColor: string;
    textColor: string;
    valueColor: string;
    shadow: string;
    titleColor: string;
  }
> = {
  primary: {
    bg: "bg-white",
    iconColor: "text-primary",
    textColor: "text-gray-600",
    valueColor: "text-primary",
    shadow:
      "shadow-[0_0_0_1px_rgba(250,115,21,0.1),0_4px_6px_-1px_rgba(250,115,21,0.1)]",
    titleColor: "text-gray-800",
  },
  secondary: {
    bg: "bg-white",
    iconColor: "text-primary",
    textColor: "text-gray-600",
    valueColor: "text-primary",
    shadow:
      "shadow-[0_0_0_1px_rgba(250,115,21,0.1),0_4px_6px_-1px_rgba(250,115,21,0.1)]",
    titleColor: "text-gray-800",
  },
  tertiary: {
    bg: "bg-white",
    iconColor: "text-primary",
    textColor: "text-gray-600",
    valueColor: "text-primary",
    shadow:
      "shadow-[0_0_0_1px_rgba(250,115,21,0.1),0_4px_6px_-1px_rgba(250,115,21,0.1)]",
    titleColor: "text-gray-800",
  },
};

const getIcon = (title: string) => {
  const lowerTitle = title.toLowerCase();

  if (lowerTitle.includes("propert") || lowerTitle.includes("valued")) {
    return Building2;
  }
  if (lowerTitle.includes("rating") || lowerTitle.includes("star")) {
    return Star;
  }
  if (
    lowerTitle.includes("secure") ||
    lowerTitle.includes("payment") ||
    lowerTitle.includes("safe")
  ) {
    return ShieldCheck;
  }
  if (lowerTitle.includes("trend") || lowerTitle.includes("growth")) {
    return TrendingUp;
  }
  if (lowerTitle.includes("customer") || lowerTitle.includes("user")) {
    return Users;
  }
  if (lowerTitle.includes("payment") || lowerTitle.includes("credit")) {
    return CreditCard;
  }

  return TrendingUp; // default icon
};

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  variant = "primary",
  description,
  showTrend = false,
  trend = 0,
  className = "",
}) => {
  const variantConfig = variantClasses[variant];
  const Icon = getIcon(title);

  return (
    <div
      className={`
        ${variantConfig.bg}
        ${variantConfig.shadow}
        aspect-square w-full
        rounded-lg
        transition-all duration-300
        flex flex-col items-center justify-center
        text-center
        p-6
        hover:shadow-[0_0_0_2px_rgba(250,115,21,0.15),0_6px_8px_-1px_rgba(250,115,21,0.15)]
        ${className}
      `}
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        {/* Icon Container - Primary Orange */}
        <div className={` p-3 rounded-2xl`}>
          <Icon className={`w-9 h-9 ${variantConfig.iconColor}`} />
        </div>

        {/* Value - Primary Orange */}
        <h3 className={`text-4xl font-bold ${variantConfig.valueColor} mb-2`}>
          {value}
        </h3>

        {/* Title */}
        <p className={`text-base font-medium ${variantConfig.titleColor} mb-1`}>
          {title}
        </p>

        {/* Description */}
        {description && (
          <p className={`text-xs ${variantConfig.textColor} mt-1`}>
            {description}
          </p>
        )}

        {/* Trend Indicator */}
        {showTrend && trend !== 0 && (
          <div
            className={`mt-3 text-sm font-medium ${
              trend > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}%
          </div>
        )}
      </div>
    </div>
  );
};

export const StatsCardGroup: React.FC<{
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}> = ({ children, columns = 3, className = "" }) => {
  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridClasses[columns]} gap-8 ${className}`}>
      {children}
    </div>
  );
};

export default StatsCard;
