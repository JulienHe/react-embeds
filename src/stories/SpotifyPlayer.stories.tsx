import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SpotifyPlayer } from '../index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spotify',
  component: SpotifyPlayer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    link: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    compact: { control: { type: 'boolean', defaultValue: true } },
    noTheme: { control: { type: 'boolean', defaultValue: false } },
    width: { control: { type: 'text', defaultValue: '100%' } },
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
  ...Basic.args,
  compact: true,
};

export const noTheme = Template.bind({});
noTheme.args = {
  ...Basic.args,
  noTheme: true,
};
