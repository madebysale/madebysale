import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const SalesList = Loadable(lazy(() => import('./SalesList')));
const PosSales = Loadable(lazy(() => import('./PosSales')));
const Addsales = Loadable(lazy(() => import('./Addsales')));
const Addsalecsv = Loadable(lazy(() => import('./Addsalecsv')));
const Deliveries = Loadable(lazy(() => import('./Deliveries')));
const GiftCards = Loadable(lazy(() => import('./GiftCards')));
// const StockCounts = Loadable(lazy(() => import('./StockCounts')));
// const Conutstock = Loadable(lazy(() => import('./Conutstock')));

const session2Routes = [
  { path: '/Sales/SalesList', element: <SalesList /> },
  { path: '/Sales/PosSales', element: <PosSales /> },
  { path: '/Sales/Addsales', element: <Addsales /> },
  { path: '/Sales/Addsalecsv', element: <Addsalecsv /> },
  { path: '/Sales/Deliveries', element: <Deliveries /> },
  { path: '/Sales/GiftCards', element: <GiftCards /> },
];

export default session2Routes;
