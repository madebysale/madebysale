import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const Calendar = Loadable(lazy(() => import('./Calendar')));

const Session12Routes = [{ path: '/Calendar/Calendar', element: <Calendar /> }];

export default Session12Routes;
