import { Route, Routes } from 'react-router';

import { Home } from './Home';

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);
