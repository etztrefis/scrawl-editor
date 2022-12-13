import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Scrawl, IOScrawlProps } from '../src/Scrawl';

const meta: Meta = {
  title: 'Scrawl',
  component: Scrawl,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IOScrawlProps> = (args) => (
  <Scrawl {...args} width="50%" />
);

export const Default = Template.bind({});

Default.args = {};
