// Avatar.tsx
import React from "react";

export type AvatarSize = "sm" | "md" | "lg" | "xl";

export interface AvatarProps {
  /** Text to display inside the avatar (usually initials) */
  text: string;
  /** Size of the avatar */
  size?: AvatarSize;
  /** Background color - defaults to primary orange */
  bgColor?: string;
  /** Text color - defaults to white */
  textColor?: string;
  /** Custom CSS class */
  className?: string;
  /** Optional image source (if provided, will show image instead of text) */
  src?: string;
  /** Alternative text for image */
  alt?: string;
  /** Whether to show a status indicator dot */
  showStatus?: boolean;
  /** Status type */
  status?: "online" | "offline" | "busy" | "away";
  /** Click handler */
  onClick?: () => void;
}

const sizeClasses: Record<
  AvatarSize,
  {
    container: string;
    text: string;
    status: string;
  }
> = {
  sm: {
    container: "w-8 h-8",
    text: "text-xs",
    status: "w-2 h-2",
  },
  md: {
    container: "w-12 h-12",
    text: "text-base",
    status: "w-2.5 h-2.5",
  },
  lg: {
    container: "w-16 h-16",
    text: "text-xl",
    status: "w-3 h-3",
  },
  xl: {
    container: "w-24 h-24",
    text: "text-2xl",
    status: "w-4 h-4",
  },
};

const statusColors = {
  online: "bg-green-500",
  offline: "bg-gray-400",
  busy: "bg-red-500",
  away: "bg-yellow-500",
};

export const Avatar: React.FC<AvatarProps> = ({
  text,
  size = "md",
  bgColor = "bg-primary",
  textColor = "text-white",
  className = "",
  src,
  alt = "",
  showStatus = false,
  status = "online",
  onClick,
}) => {
  const sizeConfig = sizeClasses[size];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const initials = getInitials(text);

  const Container = onClick ? "button" : "div";

  return (
    <Container
      className={`
        ${sizeConfig.container}
        ${bgColor}
        ${textColor}
        rounded-full
        flex items-center justify-center
        font-semibold
        relative
        ${onClick ? "cursor-pointer hover:opacity-90 transition-opacity" : ""}
        ${className}
      `}
      onClick={onClick}
      type={onClick ? "button" : undefined}
    >
      {src ? (
        <img
          src={src}
          alt={alt || `Avatar of ${text}`}
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <span className={`${sizeConfig.text} font-semibold`}>{initials}</span>
      )}

      {/* Status Indicator */}
      {showStatus && (
        <div className="absolute bottom-0 right-0 flex items-center justify-center">
          <div
            className={`${statusColors[status]} ${sizeConfig.status} rounded-full border-2 border-white`}
          />
        </div>
      )}
    </Container>
  );
};

export const AvatarGroup: React.FC<{
  children: React.ReactNode;
  /** Maximum number of avatars to show before showing +X count */
  max?: number;
  /** Spacing between stacked avatars (negative margin) */
  spacing?: number;
  className?: string;
}> = ({ children, max, spacing = -2, className = "" }) => {
  const childrenArray = React.Children.toArray(children);
  const totalChildren = childrenArray.length;

  if (max && totalChildren > max) {
    const visibleAvatars = childrenArray.slice(0, max - 1);
    const remainingCount = totalChildren - (max - 1);

    return (
      <div className={`flex items-center ${className}`}>
        {visibleAvatars.map((child, index) => (
          <div
            key={index}
            className={`${index > 0 ? `-ml-${spacing}` : ""}`}
            style={{ zIndex: totalChildren - index }}
          >
            {child}
          </div>
        ))}
        <div className={`-ml-${spacing}`} style={{ zIndex: 1 }}>
          <Avatar
            text={`+${remainingCount}`}
            size="md"
            bgColor="bg-gray-200"
            textColor="text-gray-700"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          className={`${index > 0 ? `-ml-${spacing}` : ""}`}
          style={{ zIndex: totalChildren - index }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default Avatar;
