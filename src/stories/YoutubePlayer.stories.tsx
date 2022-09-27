import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { YoutubePlayer } from '../index';

export default {
  title: 'Youtube',
  component: YoutubePlayer,

  argTypes: {
    videoID: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    width: { control: { type: 'text', defaultValue: '560' } },
    height: { control: { type: 'text', defaultValue: '315' } },
    frameBorder: { control: { type: 'text', defaultValue: '0' } },
  },
} as ComponentMeta<typeof YoutubePlayer>;

const Template: ComponentStory<typeof YoutubePlayer> = args => (
  <YoutubePlayer {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  videoID: '56STvMBKYdw',
};
