import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpotifyPlayer } from '../src';

describe('it', () => {
  it('renders <SpotifyPlayer>  without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <SpotifyPlayer link="https://open.spotify.com/track/1oHh0DAi8nJDORn90H97QA?si=0007d187196d4f56" />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
