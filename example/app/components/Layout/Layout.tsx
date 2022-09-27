import Navigation from '~/components/Navigation/Navigation';

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex items-start">
      <Navigation />
      <main className="container mx-auto m-h-screen flex p-4">{children}</main>
    </div>
  );
};

export default Layout;
