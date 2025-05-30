import React from 'react';

interface LogoIconProps extends React.SVGProps<SVGSVGElement> {
  // color prop is already part of SVGProps, but we can be explicit
}

const LogoIcon: React.FC<LogoIconProps> = ({ className, color = "#00FF88", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100" // This viewBox works for the new design
      className={className}
      fill={color} // The color prop will apply to the rects
      {...props}
    >
      {/* New placeholder SVG content: Three vertical bars */}
      <rect x="20" y="25" width="15" height="50" rx="3" ry="3" />
      <rect x="42.5" y="25" width="15" height="50" rx="3" ry="3" />
      <rect x="65" y="25" width="15" height="50" rx="3" ry="3" />
    </svg>
  );
};

export default LogoIcon;