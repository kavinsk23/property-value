import React from "react";
import { ShieldCheckIcon } from "lucide-react";

export interface TrustBadgeProps {
  label?: string;
  className?: string;
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({
  label = "Trusted by 10,000+ Property Owners",
  className = "",
}) => {
  return (
    <div
      className={`
      inline-flex items-center 
      bg-white 
      rounded-lg 
      border border-gray-100
      shadow-[inset_0_2px_6px_rgba(0,0,0,0.1)]
      px-3 py-2
      ${className}
    `}
    >
      <div className="flex items-center mr-2">
        <ShieldCheckIcon className="text-success" size={20} />
      </div>
      <span className="text-sm text-gray-800 font-medium">{label}</span>
    </div>
  );
};
