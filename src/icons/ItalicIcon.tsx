import React from 'react';

export const ItalicIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      style={{ fill: 'currentColor', stroke: 'currentcolor', strokeWidth: 0 }}
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 7V4H9v3h2.868L9.012 17H5v3h10v-3h-2.868l2.856-10z"></path>
    </svg>
  );
};

export default ItalicIcon;
