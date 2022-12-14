import React from 'react';

export const UnderlineIcon: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <svg
      style={{ fill: 'currentColor', stroke: 'currentcolor', strokeWidth: 0 }}
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 18h14v2H5zM6 4v6c0 3.309 2.691 6 6 6s6-2.691 6-6V4h-2v6c0 2.206-1.794 4-4 4s-4-1.794-4-4V4H6z"></path>
    </svg>
  );
};

export default UnderlineIcon;
