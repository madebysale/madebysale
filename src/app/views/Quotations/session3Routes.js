import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

 const  Listquotation = Loadable(lazy(() => import('./Listquotation')));
  const Addquotation = Loadable(lazy(() => import('./Addquotation')));


const session3Routes = [
  { path: '/Quotations/Listquotation', element: <Listquotation/> },
  { path: '/Quotations/Addquotation', element: <Addquotation/> },
];

export default session3Routes;
