import React, { useState } from "react";

export interface TabMenuProps {
  tabs: string[];
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  className?: string;
}

export const TabMenu: React.FC<TabMenuProps> = ({
  tabs,
  activeTab: initialActiveTab,
  onTabChange,
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab || tabs[0]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <div className={`flex items-center border-b border-gray-200 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabChange(tab)}
          className={`
            px-4 py-2 
            text-base 
            font-medium 
            transition-all 
            duration-300
            relative
            ${
              activeTab === tab
                ? "text-primary-500"
                : "text-grey hover:text-primary-500"
            }
          `}
        >
          {tab}
          {activeTab === tab && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"></span>
          )}
        </button>
      ))}
    </div>
  );
};
