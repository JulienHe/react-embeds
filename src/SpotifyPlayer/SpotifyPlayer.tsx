import React from 'react';

import { SpotifyPlayerProps } from './SpotifyPlayerProps';

const SpotifyPlayer = ({
  link,
  title = 'Spotify Player',
  style = {},
  compact = false,
  frameBorder = 0,
  noTheme = false,
  width = '100%',
  allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture',
}: SpotifyPlayerProps) => {
  const url = new URL(link);

  return (
    <iframe
      title={title}
      src={`https://open.spotify.com/embed${url.pathname}${
        noTheme ? '?theme=0' : ''
      }`}
      width={width}
      height={compact ? 80 : 380}
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
