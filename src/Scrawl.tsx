import React, { HTMLAttributes, useCallback, useState } from 'react';
import ScrawlTooltipWrapper from './Components/Tooltip';
import { BoldIcon, ItalicIcon, UnderlineIcon } from './icons';
import './scrawl.default.css';

export interface IOScrawlProps extends HTMLAttributes<HTMLDivElement> {
  width?: number | string;
  height?: number | string;
  placeholder?: string;
  toolbarVisibility?: 'always' | 'focus';
}

export const Scrawl = ({
  width = '100%',
  height = '100%',
  placeholder = 'Compose an epic...',
  toolbarVisibility: toolbarVisible = 'always',
  ...props
}: IOScrawlProps) => {
  const [toolbarVisibleState, setToolbarVisibleState] = useState(false);
  const showToolbar = toolbarVisible === 'always' || toolbarVisibleState;
  const changeToolbarVisibility = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      if (toolbarVisible === 'focus') {
        if (event.type === 'focus') {
          setToolbarVisibleState(true);
          props.onFocus && props.onFocus;
        } else if (event.type === 'blur') {
          setToolbarVisibleState(false);
          props.onBlur && props.onBlur;
        }
      }
    },
    []
  );

  return (
    <div
      style={{ width: width, height: height, ...props.style }}
      className="scrawl-wrapper"
    >
      {showToolbar && (
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
      )}
      <div
        {...props}
        contentEditable
        className="scrawl"
        onFocus={event => changeToolbarVisibility(event)}
        onBlur={changeToolbarVisibility}
        style={{ height: showToolbar ? `calc(${height} - 2rem)` : height }}
      ></div>
    </div>
  );
};
