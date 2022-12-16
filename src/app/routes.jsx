import AuthGuard from 'app/auth/AuthGuard';
import chartsRoute from 'app/views/charts/ChartsRoute';
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes';
import materialRoutes from 'app/views/material-kit/MaterialRoutes';
import NotFound from 'app/views/sessions/NotFound';
import sessionRoutes from 'app/views/sessions/SessionRoutes';
import session1Routes from 'app/views/Product/Session1Routes';
import session2Routes from 'app/views/Sales/Session2Routes';
import session3Routes from 'app/views/Quotations/session3Routes';
import Session4Routes from 'app/views/Purchases/Session4Routes';
import Session5Routes from 'app/views/Transfers/Session5Routes';
import Session6Routes from 'app/views/Return/Session6Routes';
import Session7Routes from 'app/views/People/Session7Routes';
import Session8Routes from 'app/views/Notifications/Session8Routes';
import Session9Routes from 'app/views/Settings/Session9Routes';
import Session10Routes from 'app/views/Reports/Session10Routes';
import Session11Routes from 'app/views/FrontEnd/Session11Routes';
import Session12Routes from 'app/views/Calendar/Session12Routes';
import { Navigate } from 'react-router-dom';
import MatxLayout from './components/MatxLayout/MatxLayout';

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...dashboardRoutes,
      ...chartsRoute,
      ...materialRoutes,
      ...session1Routes,
      ...session2Routes,
      ...session3Routes,
      ...Session4Routes,
      ...Session5Routes,
      ...Session6Routes,
      ...Session7Routes,
      ...Session8Routes,
      ...Session9Routes,
      ...Session10Routes,
      ...Session11Routes,
      ...Session12Routes,
    ],
  },
  ...sessionRoutes,

  { path: '/', element: <Navigate to="dashboard/default" /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
