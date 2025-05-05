import { Outlet } from 'react-router';
import { Footer, Header } from '../widgets';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
