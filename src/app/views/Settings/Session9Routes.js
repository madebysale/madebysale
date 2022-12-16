import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
// import Addpromos from './Addpromos';

const SystemSettings = Loadable(lazy(() => import('./SystemSettings')));
const POSSettings = Loadable(lazy(() => import('./POSSettings')));
const Promos = Loadable(lazy(() => import('./Promos')));
const AddPromos= Loadable(lazy(() => import('./AddPromos')));

const ListPromos= Loadable(lazy(() => import('./ListPromos')));
const EditPromos= Loadable(lazy(() => import('./EditPromos')));



const ListPrinters = Loadable(lazy(() => import('./ListPrinters')));
const ListPrint= Loadable(lazy(() => import('./ListPrint')));
const AddPrinter = Loadable(lazy(() => import('./AddPrinter')));
const EditPrinter = Loadable(lazy(() => import('./EditPrinter')));
const ChangeLogo = Loadable(lazy(() => import('./ChangeLogo')));
const Currencies = Loadable(lazy(() => import('./Currencies')));
const AddCurrencies = Loadable(lazy(() => import('./AddCurrencies')));
const ListCurrenies = Loadable(lazy(() => import('./ListCurrenies')));
const EditCurrencies = Loadable(lazy(() => import('./EditCurrencies')));



const CustomerGroups = Loadable(lazy(() => import('./CustomerGroups')));
const AddCustomerGroups = Loadable(lazy(() => import('./AddCustomerGroups')));
const ListCustomerGroups = Loadable(lazy(() => import('./ListCustomerGroups')));
const EditCustomerGroups = Loadable(lazy(() => import('./EditCustomerGroups')));


const PriceGroups = Loadable(lazy(() => import('./PriceGroups')));
const AddPriceGroups = Loadable(lazy(() => import('./AddPriceGroups')));
const ListPriceGroups = Loadable(lazy(() => import('./ListPriceGroups')));
const EditPriceGroups = Loadable(lazy(() => import('./EditPriceGroups')));
const GroupProductPrices = Loadable(lazy(() => import('./GroupProductPrices')));

const Categories = Loadable(lazy(() => import('./Categories')));
const AddCategories = Loadable(lazy(() => import('./AddCategories')));
const ListCategories = Loadable(lazy(() => import('./ListCategories')));
const EditCategories = Loadable(lazy(() => import('./EditCategories')));
const PrintBarcode = Loadable(lazy(() => import('./PrintBarcode')));


const ExpenseCategories = Loadable(lazy(() => import('./ExpenseCategories')));
const AddExpenseCategories = Loadable(lazy(() => import('./AddExpenseCategories')));
const ListExpenseCategories = Loadable(lazy(() => import('./ListExpenseCategories')));
const EditExpenseCategories = Loadable(lazy(() => import('./EditExpenseCategories')));

const Units = Loadable(lazy(() => import('./Units')));
const AddUnits = Loadable(lazy(() => import('./AddUnits')));
const ListUnits = Loadable(lazy(() => import('./ListUnits')));
const EditUnits = Loadable(lazy(() => import('./EditUnits')));

const Brands = Loadable(lazy(() => import('./Brands')));
const AddBrands = Loadable(lazy(() => import('./AddBrands')));
const ListBrands = Loadable(lazy(() => import('./ListBrands')));
const EditBrands = Loadable(lazy(() => import('./EditBrands')));


const Variants = Loadable(lazy(() => import('./Variants')));
const AddVariants = Loadable(lazy(() => import('./AddVariants')));
const ListVariants = Loadable(lazy(() => import('./ListVariants')));
const EditVariants = Loadable(lazy(() => import('./EditVariants')));
const TaxRates = Loadable(lazy(() => import('./TaxRates')));
const AddTaxRates = Loadable(lazy(() => import('./AddTaxRates')));
const ListTaxRates = Loadable(lazy(() => import('./ListTaxRates')));
const EditTaxRates = Loadable(lazy(() => import('./EditTaxRates')));
const Warehouses = Loadable(lazy(() => import('./Warehouses')));
const AddWareHouses = Loadable(lazy(() => import('./AddWareHouses')));
const ListWareHouses = Loadable(lazy(() => import('./ListWareHouses')));
const EditWareHouses = Loadable(lazy(() => import('./EditWareHouses')));
const EmailTemplates = Loadable(lazy(() => import('./EmailTemplates')));
const GroupPermissions = Loadable(lazy(() => import('./GroupPermissions')));
const Backups = Loadable(lazy(() => import('./Backups')));

const Session9Routes = [
  { path: '/Settings/SystemSettings', element: <SystemSettings /> },
  { path: '/Settings/POSSettings', element: <POSSettings /> },
  { path: '/Settings/Promos', element: <Promos /> },
  { path: '/Settings/AddPromos', element: <AddPromos/> },
  { path: '/Settings/ListPromos', element: <ListPromos/> },
  { path: '/Settings/Promos/EditPromos/:id', element: <EditPromos/> },


  { path: '/Settings/ListPrinters', element: <ListPrinters /> },
  { path: '/Settings/ListPrint', element: <ListPrint /> },
  { path: '/Settings/AddPrinter', element: <AddPrinter /> },
  { path: '/Settings/EditPrinter/:id', element: <EditPrinter /> },

  { path: '/Settings/ChangeLogo', element: <ChangeLogo /> },
  { path: '/Settings/Currencies', element: <Currencies /> },
  { path: '/Settings/AddCurrencies', element: <AddCurrencies/> },
  { path: '/Settings/ListCurrenies', element: <ListCurrenies/> },
  { path: '/Settings/Currencies/EditCurrencies/:id', element: <EditCurrencies/> },

  { path: '/Settings/CustomerGroups', element: <CustomerGroups /> },
  { path: '/Settings/AddCustomerGroups', element: <AddCustomerGroups/> },
  { path: '/Settings/ListCustomerGroups', element: <ListCustomerGroups/> },
  { path: '/Settings/CustomerGroups/EditCustomerGroups/:id', element: <EditCustomerGroups/> },

  { path: '/Settings/PriceGroups', element: <PriceGroups /> },
  { path: '/Settings/AddPriceGroups', element: <AddPriceGroups /> },
  { path: '/Settings/PriceGroups/EditPriceGroups/:id', element: <EditPriceGroups /> },
  { path: '/Settings/PriceGroups/GroupProductPrices/:id', element: <GroupProductPrices /> },
  { path: '/Settings/ListPriceGroups', element: <ListPriceGroups /> },
  { path: '/Settings/Categories', element: <Categories /> },
  { path: '/Settings/AddCategories', element: <AddCategories /> },
  { path: '/Settings/ListCategories', element: <ListCategories /> },
  { path: '/Settings/Categories/EditCategories/:id', element: <EditCategories /> },
  { path: '/Settings/Categories/PrintBarcode/:id', element: <PrintBarcode /> },
  

  { path: '/Settings/ExpenseCategories', element: <ExpenseCategories /> },

  { path: '/Settings/AddExpenseCategories', element: <AddExpenseCategories /> },
  { path: '/Settings/ListExpenseCategories', element: <ListExpenseCategories/>},
  { path: '/Settings/ExpenseCategories/EditExpenseCategories/:id', element: <EditExpenseCategories/>},



  { path: '/Settings/Units', element: <Units /> },
  { path: '/Settings/AddUnits', element: <AddUnits /> },
  { path: '/Settings/ListUnits', element: <ListUnits /> },
  { path: '/Settings/Units/EditUnits/:id', element: <EditUnits /> },
  { path: '/Settings/Brands', element: <Brands /> },
  { path: '/Settings/AddBrands', element: <AddBrands /> },
  { path: '/Settings/ListBrands', element: <ListBrands /> },
  { path: '/Settings/Brands/EditBrands/:id', element: <EditBrands /> },

  { path: '/Settings/Variants', element: <Variants /> },
  { path: '/Settings/AddVariants', element: <AddVariants /> },
  { path: '/Settings/ListVariants', element: <ListVariants /> },
  { path: '/Settings/Variants/EditVariants/:id', element: <EditVariants /> },

  { path: '/Settings/TaxRates', element: <TaxRates /> },
  { path: '/Settings/AddTaxRates', element: <AddTaxRates /> },
  { path: '/Settings/ListTaxRates', element: <ListTaxRates /> },
  { path: '/Settings/TaxRates/EditTaxRates/:id', element: <EditTaxRates /> },

  { path: '/Settings/Warehouses', element: <Warehouses /> },
  { path: '/Settings/AddWareHouses', element: <AddWareHouses /> },
  { path: '/Settings/ListWareHouses', element: <ListWareHouses /> },
  { path: '/Settings/WareHouses/EditWareHouses/:id', element: <EditWareHouses /> },


  { path: '/Settings/EmailTemplates', element: <EmailTemplates /> },
  { path: '/Settings/GroupPermissions', element: <GroupPermissions /> },
  { path: '/Settings/Backups', element: <Backups /> },
];

export default Session9Routes;
