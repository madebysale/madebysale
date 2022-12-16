import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const Notifications = Loadable(lazy(() => import('./Notifications')));
const Addnotification = Loadable(lazy(() => import('./Addnotification')));

const Session8Routes = [
  { path: '/Notifications/Notifications', element: <Notifications /> },
  { path: '/Notifications/Addnotification', element: <Addnotification /> },
];

export default Session8Routes;
