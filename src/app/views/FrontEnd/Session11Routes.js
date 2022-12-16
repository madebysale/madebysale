import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const ShopSettings = Loadable(lazy(() => import('./ShopSettings')));
const SliderSettings = Loadable(lazy(() => import('./SliderSettings')));
const ListPages = Loadable(lazy(() => import('./ListPages')));
const AddPage = Loadable(lazy(() => import('./AddPage')));
const SMSSettings = Loadable(lazy(() => import('./SMSSettings')));
const SendSMS = Loadable(lazy(() => import('./SendSMS')));
const SMSLog = Loadable(lazy(() => import('./SMSLog')));

const Session11Routes = [
  { path: '/FrontEnd/ShopSettings', element: <ShopSettings /> },
  { path: '/FrontEnd/SliderSettings', element: <SliderSettings /> },
  { path: '/FrontEnd/ListPages', element: <ListPages /> },
  { path: '/FrontEnd/AddPage', element: <AddPage /> },
  { path: '/FrontEnd/SMSSettings', element: <SMSSettings /> },
  { path: '/FrontEnd/SendSMS', element: <SendSMS /> },
  { path: '/FrontEnd/SMSLog', element: <SMSLog /> },

];

export default Session11Routes;
