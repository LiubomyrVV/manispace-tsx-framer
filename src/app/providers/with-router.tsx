import { Suspense } from 'react';
import { BrowserRouter } from 'react-router';
import { Spin } from 'antd'; // ~ shared/ui/sping

export const withRouter = (component: () => React.ReactNode) => () => (
  <BrowserRouter>
    <Suspense fallback={<Spin delay={300} className="overlay" size="large" />}>
      {component()}
    </Suspense>
  </BrowserRouter>
);
