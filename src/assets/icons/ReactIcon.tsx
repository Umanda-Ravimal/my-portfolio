import React from "react";

interface IconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const ReactIcon: React.FC<IconProps> = ({
  className = "",
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="2" fill="#00D8FF" />
      <ellipse
        cx="12"
        cy="12"
        rx="11"
        ry="4.2"
        stroke="#00D8FF"
        strokeWidth="1"
        fill="none"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="11"
        ry="4.2"
        stroke="#00D8FF"
        strokeWidth="1"
        fill="none"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="11"
        ry="4.2"
        stroke="#00D8FF"
        strokeWidth="1"
        fill="none"
        transform="rotate(-60 12 12)"
      />
    </svg>
  );
};

