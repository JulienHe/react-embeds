import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpotifyPlayer } from '../src';

const App = () => {
  return (
    <div>
      <SpotifyPlayer link="https://open.spotify.com/track/1oHh0DAi8nJDORn90H97QA?si=0007d187196d4f56" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
