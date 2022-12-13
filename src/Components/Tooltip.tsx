import React, { ReactNode, useState } from 'react';
import './tooltip.scrawl.default.css';

export interface IOScrawlTooltipProps {
  content: ReactNode;
  position?: 'top' | 'bottom' | 'right' | 'left';
  delay?: number;
  children?: ReactNode;
}

export const ScrawlTooltipWrapper = ({
  content,
  position,
  delay,
  children,
}: IOScrawlTooltipProps) => {
  let timeout: number | ReturnType<typeof setTimeout>;
  const [show, setShow] = useState(false);

  const showTooltip = () => {
    timeout = setTimeout(() => {
      setShow(true);
    }, delay || 100);
  };

  const hideTooltip = () => {
    clearInterval(timeout);
    setShow(false);
  };

  return (
    <div
      className="scrawl-tooltip-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {show && (
        <div className={`scrawl-tooltip-tip ${position || 'top'}`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default ScrawlTooltipWrapper;
