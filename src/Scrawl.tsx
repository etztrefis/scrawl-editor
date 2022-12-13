import React, { HTMLAttributes } from 'react';
import { BoldIcon, ItalicIcon, UnderlineIcon } from './icons';
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
        <button className="menu-button">
          <ItalicIcon className="menu-icon" />
        </button>
        <button className="menu-button">
          <UnderlineIcon className="menu-icon" />
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
