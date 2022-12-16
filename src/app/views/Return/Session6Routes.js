import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const ListReturns = Loadable(lazy(() => import('./ListReturns')));
const AddReturn = Loadable(lazy(() => import('./AddReturn')));


const Session6Routes = [
  { path: '/Return/ListReturns', element: <ListReturns /> },
  { path: '/Return/AddReturn', element: <AddReturn /> },
];

export default Session6Routes;
