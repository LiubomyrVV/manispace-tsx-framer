import { Route, Routes } from 'react-router';

import { Layout } from './Layout';

import { Home } from './views/Home';
import { Blog } from './views/Blog';
import { About } from './views/About';
import { Contact } from './views/Contact';

export const Routing = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  </Routes>
);
