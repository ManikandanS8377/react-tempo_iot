import * as React from 'react';
import { BrowserRouter as Router, Routes as ReactRoutes, Route} from 'react-router-dom';

import Dashboard  from '../../views/pages/Dashboard'
import NotFound  from '../../views/pages/NotFound/NotFound'

type Route = {
  path: string;
  element: React.ReactNode;
};

const routes: Route[] = [
  { path: '/', element: <Dashboard /> },
  { path: '/dashboard/dashboard', element: <Dashboard /> },
  { path: '/management/assert', element: <Dashboard /> },
  { path: '/not-found', element: <NotFound /> },
];


export const isValidPath = (path: string): boolean => {
  // return routes.some((route) => route.path !== '/not-found' && route.path === path);
  return routes.some((route) => route.path === path);
};
const Routes = () => {
    return (
      <Router>
        <ReactRoutes>
          {routes.map((route: Route, index: number) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </ReactRoutes>
      </Router>
    );
  };
  
  export default Routes;
