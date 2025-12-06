import React from "react";
import { ZapIcon, ShieldCheckIcon, UserCheckIcon } from "lucide-react";

export interface FeatureBadgeProps {
  icon: React.ReactNode;
  text: string;
}

export const FeatureBadge: React.FC<FeatureBadgeProps> = ({ icon, text }) => {
  return (
    <div className="inline-flex items-center gap-2 text-gray-800">
      {icon}
      <span className="text-base font-medium">{text}</span>
    </div>
  );
};

export const FeatureBadgeGroup: React.FC = () => {
  const features = [
    {
      icon: <ZapIcon className="text-green-500" size={20} />,
      text: "Fast Delivery",
    },
    {
      icon: <ShieldCheckIcon className="text-green-500" size={20} />,
      text: "100% Secure",
    },
    {
      icon: <UserCheckIcon className="text-green-500" size={20} />,
      text: "Backed by Experts",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-4 py-4">
      {features.map((feature, index) => (
        <FeatureBadge key={index} icon={feature.icon} text={feature.text} />
      ))}
    </div>
  );
};
