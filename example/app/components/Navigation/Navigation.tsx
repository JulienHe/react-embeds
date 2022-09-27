import { Link } from '@remix-run/react';

export default function Navigation() {
  return (
    <nav className="nav min-w-[280px] h-screen p-4 shadow-md">
      <ul>
        <li>Welcome</li>
        <Link to="/Spotify">Spotify</Link>
      </ul>
    </nav>
  );
}
