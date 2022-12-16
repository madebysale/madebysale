import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const ListTransfers = Loadable(lazy(() => import('./ListTransfers')));
const AddTransfer = Loadable(lazy(() => import('./AddTransfer')));
const AddTransferCSV = Loadable(lazy(() => import('./AddTransferCSV')));

const Session5Routes = [
  { path: '/Transfers/ListTransfers', element: <ListTransfers /> },
  { path: '/Transfers/AddTransfer', element: <AddTransfer /> },
  { path: '/Transfers/AddTransferCSV', element: <AddTransferCSV /> },
];

export default Session5Routes;
