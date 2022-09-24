import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SpotifyPlayer } from '../index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/SpotifyPlayer',
  component: SpotifyPlayer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    link: { control: { type: 'text' } },
    compact: { control: { type: 'boolean', defaultValue: true } },
    title: { control: { type: 'text' } },
  },
} as ComponentMeta<typeof SpotifyPlayer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SpotifyPlayer> = args => (
  <SpotifyPlayer {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  link:
    'https://open.spotify.com/track/1oHh0DAi8nJDORn90H97QA?si=0007d187196d4f56',
  compact: false,
};

export const Compact = Template.bind({});
Compact.args = {
  link:
    'https://open.spotify.com/track/1oHh0DAi8nJDORn90H97QA?si=0007d187196d4f56',
  compact: true,
};
