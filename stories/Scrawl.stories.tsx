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

const Template: Story<IOScrawlProps> = args => (
  <Scrawl {...args} width="40rem" height="20rem" style={{ margin: '2rem' }} />
);

export const Default = Template.bind({});

Default.args = {};
