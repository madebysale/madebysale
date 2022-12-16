import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const ListUsers = Loadable(lazy(() => import('./ListUsers')));
const AddUser = Loadable(lazy(() => import('./AddUser')));
const ListBillers = Loadable(lazy(() => import('./ListBillers')));
const AddBiller = Loadable(lazy(() => import('./AddBiller')));
const ListCustomers = Loadable(lazy(() => import('./ListCustomers')));
const AddCustomer = Loadable(lazy(() => import('./AddCustomer')));
const ListSuppliers = Loadable(lazy(() => import('./ListSuppliers')));
const AddSupplier = Loadable(lazy(() => import('./AddSupplier')));

const Session7Routes = [
  { path: '/People/ListUsers', element: <ListUsers /> },
  { path: '/People/AddUser', element: <AddUser /> },
  { path: '/People/ListBillers', element: <ListBillers /> },
  { path: '/People/AddBiller', element: <AddBiller /> },
  { path: '/People/ListCustomers', element: <ListCustomers /> },
  { path: '/People/AddCustomer', element: <AddCustomer /> },
  { path: '/People/ListSuppliers', element: <ListSuppliers /> },
  { path: '/People/AddSupplier', element: <AddSupplier /> },
];

export default Session7Routes;
