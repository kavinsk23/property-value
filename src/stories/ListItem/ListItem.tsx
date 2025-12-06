import React from "react";
import { CheckIcon } from "lucide-react";

export interface ListItemProps {
  text: string;
  subtext?: string;
  children?: ListItemProps[];
  icon?: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({
  text,
  subtext,
  children,
  icon = <CheckIcon className="text-primary-500" size={20} />,
}) => {
  return (
    <div>
      <div className="flex items-center gap-3 p-2">
        {icon}
        <div>
          <span className="text-base text-gray-800">{text}</span>
          {subtext && (
            <span className="text-xs text-gray-500 ml-2">{subtext}</span>
          )}
        </div>
      </div>

      {children && (
        <div className="pl-8 space-y-2">
          {children.map((childItem, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-gray-500 mr-2">-</span>
              <span className="text-base text-gray-600">
                {childItem.text}
                {childItem.subtext && (
                  <span className="text-xs text-gray-500 ml-2">
                    {childItem.subtext}
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const PropertyTypesList: React.FC = () => {
  const propertyTypes = [
    {
      text: "Multi-Storied",
      children: [
        { text: "Low rise Apartments", subtext: "(5 floors and less)" },
        { text: "Mid rise", subtext: "(6-10 floors)" },
        { text: "High rise", subtext: "(10-40 floors)" },
        { text: "Skyscraper", subtext: "(40+ floors)" },
      ],
    },
  ];

  return (
    <div className="space-y-2">
      {propertyTypes.map((item, index) => (
        <ListItem key={index} {...item} />
      ))}
    </div>
  );
};
