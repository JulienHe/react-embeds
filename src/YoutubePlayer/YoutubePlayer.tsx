import React from 'react';

import { SpotifyPlayerProps } from './YoutubePlayerProps';

const SpotifyPlayer = ({
  videoID,
  title = 'Youtube Video Player',
  frameBorder = 0,
  allowFullScreen = true,
  width = 560,
  height = 315,
  allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
}: SpotifyPlayerProps) => {
  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${videoID}`}
      title={title}
      frameBorder={frameBorder}
      allow={allow}
      allowFullScreen={allowFullScreen}
    />
  );
};

export default SpotifyPlayer;
