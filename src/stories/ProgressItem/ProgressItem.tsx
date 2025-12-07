// ProgressItem.tsx
import React from "react";
import { Check } from "lucide-react";

export type ProgressStatus = "completed" | "upcoming";

export interface ProgressItemProps {
  /** Step number */
  step: number;
  /** Step title */
  title: string;
  /** Step description */
  description: string;
  /** Status of the progress item */
  status?: ProgressStatus;
  /** Whether to show a connecting line to next item */
  showConnector?: boolean;
  /** Custom CSS class */
  className?: string;
}

const statusClasses: Record<
  ProgressStatus,
  {
    circle: string;
    number: string;
    title: string;
    description: string;
  }
> = {
  completed: {
    circle:
      "bg-gradient-to-br from-gradient-start to-gradient-end border-transparent",
    number: "text-white",
    title: "text-gray-900 font-semibold",
    description: "text-gray-700",
  },
  upcoming: {
    circle: "bg-gray-100 border-gray-200",
    number: "text-gray-500",
    title: "text-gray-500 font-medium",
    description: "text-gray-500",
  },
};

export const ProgressItem: React.FC<ProgressItemProps> = ({
  step,
  title,
  description,
  status = "upcoming",
  showConnector = true,
  className = "",
}) => {
  const statusConfig = statusClasses[status];

  return (
    <div className={`flex items-start gap-4 relative ${className}`}>
      {/* Step Number Circle */}
      <div className="relative flex-shrink-0 mt-2">
        <div
          className={`
            w-8 h-8
            rounded-full
            border-2
            flex items-center justify-center
            transition-all duration-300
            shadow-sm
            ${statusConfig.circle}
            ${
              status === "completed"
                ? "shadow-[0_2px_8px_rgba(250,115,21,0.3)]"
                : ""
            }
          `}
        >
          {status === "completed" ? (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gradient-start to-gradient-end blur-sm opacity-50 rounded-full"></div>
              <Check className="w-6 h-6 text-white relative z-10" />
            </div>
          ) : (
            <span className={`text-sm font-semibold ${statusConfig.number}`}>
              {step}
            </span>
          )}
        </div>

        {/* Connector Line */}
        {showConnector && (
          <div
            className={`
              absolute top-8 left-1/2 -translate-x-1/2
              w-0.5 h-10
              transition-all duration-300
              ${
                status === "completed"
                  ? "bg-gradient-to-b from-gradient-start to-gradient-end"
                  : "bg-gray-200"
              }
            `}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pt-2">
        <h3 className={`text-lg font-semibold mb-2 ${statusConfig.title}`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed ${statusConfig.description}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export const ProgressTimeline: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={`space-y-10 ${className}`}>
      {childrenArray.map((child, index) => {
        if (React.isValidElement<ProgressItemProps>(child)) {
          return React.cloneElement(child, {
            ...child.props,
            showConnector: index < childrenArray.length - 1,
          });
        }
        return child;
      })}
    </div>
  );
};

export default ProgressItem;
