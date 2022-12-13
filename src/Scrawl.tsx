import React, { HTMLAttributes } from 'react';
import { BoldIcon } from './icons';
import './scrawl.default.css';

export interface IOScrawlProps extends HTMLAttributes<HTMLTextAreaElement> {
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
    <div style={{ width: width, height: height }} className="scrawl-wrapper">
      <div className="scrawl-menu">
        <button className="menu-button">
          <BoldIcon className="menu-icon" />
        </button>
      </div>
      <textarea
        {...props}
        className="scrawl"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};
