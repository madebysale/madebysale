import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const OverviewChart = Loadable(lazy(() => import('./OverviewChart')));
const WarehouseStockChart = Loadable(lazy(() => import('./WarehouseStockChart')));
const BestSellers = Loadable(lazy(() => import('./BestSellers')));
const RegisterReport = Loadable(lazy(() => import('./RegisterReport')));
const ProductQuantityAlerts = Loadable(lazy(() => import('./ProductQuantityAlerts')));
const ProductsReport = Loadable(lazy(() => import('./ProductsReport')));
const AdjustmentsReport = Loadable(lazy(() => import('./AdjustmentsReport')));
const CategoriesReport = Loadable(lazy(() => import('./CategoriesReport')));
const BrandsReport = Loadable(lazy(() => import('./BrandsReport')));
const DailySales = Loadable(lazy(() => import('./DailySales')));
const MonthlySales = Loadable(lazy(() => import('./MonthlySales')));
const SalesReport = Loadable(lazy(() => import('./SalesReport')));
const PaymentsReport = Loadable(lazy(() => import('./PaymentsReport')));
const TaxReport = Loadable(lazy(() => import('./TaxReport')));
const ProfitLoss = Loadable(lazy(() => import('./ProfitLoss')));
const DailyPurchases = Loadable(lazy(() => import('./DailyPurchases')));
const MonthlyPurchases = Loadable(lazy(() => import('./MonthlyPurchases')));
const PurchasesReport = Loadable(lazy(() => import('./PurchasesReport')));
const ExpensesReport = Loadable(lazy(() => import('./ExpensesReport')));
const CustomersReport = Loadable(lazy(() => import('./CustomersReport')));
const SuppliersReport = Loadable(lazy(() => import('./SuppliersReport')));
const StaffReport = Loadable(lazy(() => import('./StaffReport')));


const Session10Routes = [
  { path: '/Reports/OverviewChart', element: <OverviewChart /> },
  { path: '/Reports/WarehouseStockChart', element: <WarehouseStockChart /> },
  { path: '/Reports/BestSellers', element: <BestSellers /> },
  { path: '/Reports/RegisterReport', element: <RegisterReport /> },
  { path: '/Reports/ProductQuantityAlerts', element: <ProductQuantityAlerts /> },
  { path: '/Reports/ProductsReport', element: <ProductsReport /> },
  { path: '/Reports/AdjustmentsReport', element: <AdjustmentsReport /> },
  { path: '/Reports/CategoriesReport', element: <CategoriesReport /> },
  { path: '/Reports/BrandsReport', element: <BrandsReport /> },
  { path: '/Reports/DailySales', element: <DailySales /> },
  { path: '/Reports/MonthlySales', element: <MonthlySales /> },
  { path: '/Reports/SalesReport', element: <SalesReport /> },
  { path: '/Reports/PaymentsReport', element: <PaymentsReport /> },
  { path: '/Reports/TaxReport', element: <TaxReport /> },
  { path: '/Reports/ProfitLoss', element: <ProfitLoss /> },
  { path: '/Reports/DailyPurchases', element: <DailyPurchases /> },
  { path: '/Reports/OverviewChart', element: <OverviewChart /> },
  { path: '/Reports/MonthlyPurchases', element: <MonthlyPurchases /> },
  { path: '/Reports/PurchasesReport', element: <PurchasesReport /> },
  { path: '/Reports/ExpensesReport', element: <ExpensesReport /> },
  { path: '/Reports/CustomersReport', element: <CustomersReport /> },
  { path: '/Reports/SuppliersReport', element: <SuppliersReport /> },
  { path: '/Reports/StaffReport', element: <StaffReport /> },


];

export default Session10Routes;
