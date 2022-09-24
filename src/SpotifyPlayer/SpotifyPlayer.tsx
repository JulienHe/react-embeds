import React from 'react';

import { SpotifyPlayerProps } from './SpotifyPlayerProps';

const SpotifyPlayer = ({
  link,
  title = 'Spotify Player',
  style = {},
  compact = false,
  height = compact ? 80 : 380,
  frameBorder = 0,
  neutralTheme = false,
  allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture',
}: SpotifyPlayerProps) => {
  const url = new URL(link);
  const theme = neutralTheme ? '?theme=0' : '';

  return (
    <iframe
      title={title}
      src={`https://open.spotify.com/embed${url.pathname}${theme}`}
      width="100%"
      height={height}
      frameBorder={frameBorder}
      allow={allow}
      style={{
        borderRadius: 12,
        ...style,
      }}
    />
  );
};

export default SpotifyPlayer;
