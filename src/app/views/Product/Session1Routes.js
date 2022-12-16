import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const ListProducts = Loadable(lazy(() => import('./ListProducts')));
const AddProduct = Loadable(lazy(() => import('./AddProduct')));
const ImportProducts = Loadable(lazy(() => import('./ImportProducts')));
const PrintBarcode = Loadable(lazy(() => import('./PrintBarcode')));
const QuantityAdjustments = Loadable(lazy(() => import('./QuantityAdjustments')));
const AddAdjustment = Loadable(lazy(() => import('./AddAdjustment')));
const StockCounts = Loadable(lazy(() => import('./StockCounts')));
const Conutstock = Loadable(lazy(() => import('./Conutstock')));
const Profile = Loadable(lazy(() => import('./Profile')));
const Productdetail = Loadable(lazy(() => import('./Productdetail')));
const Editproduct = Loadable(lazy(() => import('./Editproduct')));
const Stockdetails = Loadable(lazy(() => import('./Stockdetails')));

const session1Routes = [
  { path: '/Product/ListProducts', element: <ListProducts /> },
  { path: '/Product/AddProduct', element: <AddProduct /> },
  { path: '/Product/ImportProducts', element: <ImportProducts /> },
  { path: '/Product/PrintBarcode', element: <PrintBarcode /> },
  { path: '/Product/QuantityAdjustments', element: <QuantityAdjustments /> },
  { path: '/Product/AddAdjustment', element: <AddAdjustment /> },
  { path: '/Product/StockCounts', element: <StockCounts /> },
  { path: '/Product/Conutstock', element: <Conutstock /> },
  { path: '/Product/Profile', element: <Profile /> },
  { path: '/Product/Productdetail', element: <Productdetail /> },
  { path: '/Product/Editproduct', element: <Editproduct /> },
  { path: '/Product/Stockdetails', element: <Stockdetails /> },
];

export default session1Routes;
