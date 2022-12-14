import React, { HTMLAttributes } from 'react';
import ScrawlTooltipWrapper from './Components/Tooltip';
import { BoldIcon, ItalicIcon, UnderlineIcon } from './icons';
import './scrawl.default.css';

export interface IOScrawlProps extends HTMLAttributes<HTMLDivElement> {
  width?: number | string;
  height?: number | string;
  placeholder?: string;
}

export const Scrawl = ({
  width = '100%',
  height = '100%',
  placeholder = 'Compose an epic...',
  ...props
}: IOScrawlProps) => {
  return (
    <div
      style={{ width: width, height: height, ...props.style }}
      className="scrawl-wrapper"
    >
      <div className="scrawl-menu">
        <ScrawlTooltipWrapper
          content={
            <p className="scrawl-tooltip-content">
              Bold <kbd>Ctrl+B</kbd>
            </p>
          }
          position="top"
        >
          <button className="menu-button">
            <BoldIcon className="menu-icon" />
          </button>
        </ScrawlTooltipWrapper>
        <ScrawlTooltipWrapper
          content={
            <p className="scrawl-tooltip-content">
              Italic <kbd>Ctrl+I</kbd>
            </p>
          }
          position="top"
        >
          <button className="menu-button">
            <ItalicIcon className="menu-icon" />
          </button>
        </ScrawlTooltipWrapper>
        <ScrawlTooltipWrapper
          content={
            <p className="scrawl-tooltip-content">
              Underline <kbd>Ctrl+U</kbd>
            </p>
          }
          position="top"
        >
          <button className="menu-button">
            <UnderlineIcon className="menu-icon" />
          </button>
        </ScrawlTooltipWrapper>
      </div>
      <div
        {...props}
        contentEditable
        className="scrawl"
        style={{ height: `calc(${height} - 2rem)` }}
      ></div>
    </div>
  );
};
