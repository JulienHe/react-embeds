import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SpotifyPlayer } from '../index';

export default {
  title: 'Spotify',
  component: SpotifyPlayer,

  argTypes: {
    link: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    width: { control: { type: 'text', defaultValue: '100%' } },
    compact: { control: { type: 'boolean', defaultValue: true } },
    noTheme: { control: { type: 'boolean', defaultValue: false } },
    frameBorder: { control: { type: 'text', defaultValue: '0' } },
  },
} as ComponentMeta<typeof SpotifyPlayer>;

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
