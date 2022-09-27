import Layout from '~/components/Layout/Layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { SpotifyPlayer } from '../../../src/index';

export default function Index() {
  return (
    <Layout>
      <div className="flex-1">
        <h1 className="text-3xl">Spotify</h1>
        <h2 className="text-2xl">Base</h2>
        <SpotifyPlayer link="https://open.spotify.com/track/1oHh0DAi8nJDORn90H97QA?si=0007d187196d4f56" />
        <h2 className="text-2xl">Compact</h2>
        <SpotifyPlayer
          link="https://open.spotify.com/track/1oHh0DAi8nJDORn90H97QA?si=0007d187196d4f56"
          compact
        />
      </div>
      <div className="w-1/2 text-sm">
        <SyntaxHighlighter language="javascript" style={dracula}>
          {`<SpotifyPlayer
  link="https://open.spotify.com/track/1oHh0DAi8nJDORn90H97QA?si=0007d187196d4f56"
  compact
  />`}
        </SyntaxHighlighter>
      </div>
    </Layout>
  );
}
