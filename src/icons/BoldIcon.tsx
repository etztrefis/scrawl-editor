import React from 'react';

export const BoldIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      style={{ fill: 'currentColor', stroke: 'currentcolor', strokeWidth: 0 }}
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.061 11.22A4.46 4.46 0 0 0 18 8.5C18 6.019 15.981 4 13.5 4H6v15h8c2.481 0 4.5-2.019 4.5-4.5a4.48 4.48 0 0 0-1.439-3.28zM13.5 7c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5H9V7h4.5zm.5 9H9v-3h5c.827 0 1.5.673 1.5 1.5S14.827 16 14 16z"></path>
    </svg>
  );
};

export default BoldIcon;
