import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const AddExpense = Loadable(lazy(() => import('./AddExpense')));
const AddPurchase = Loadable(lazy(() => import('./AddPurchase')));
const AddPurchaseCSV = Loadable(lazy(() => import('./AddPurchaseCSV')));
const ListExpenses = Loadable(lazy(() => import('./ListExpenses')));
const ListPurchases = Loadable(lazy(() => import('./ListPurchases')));

const session4Routes = [
  { path: '/Purchases/AddExpense', element: <AddExpense /> },
  { path: '/Purchases/AddPurchase', element: <AddPurchase /> },
  { path: '/Purchases/AddPurchaseCSV', element: <AddPurchaseCSV /> },
  { path: '/Purchases/ListExpenses', element: <ListExpenses /> },
  { path: '/Purchases/ListPurchases', element: <ListPurchases /> },
];

export default session4Routes;
