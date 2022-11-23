import React, { HTMLAttributes } from 'react';

export interface IOScrawlProps extends HTMLAttributes<HTMLTextAreaElement> {
  width?: number | string;
  height?: number | string;
}

export const Scrawl = ({
  width = '100%',
  height = '100%',
  ...props
}: IOScrawlProps) => {
  return (
    <textarea {...props} style={{ width: width, height: height }}></textarea>
  );
};
