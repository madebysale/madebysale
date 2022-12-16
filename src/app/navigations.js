export const navigations = [
  { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
  // { label: 'PAGES', type: 'label' },
  {
    name: 'Session/Auth',
    icon: 'locked',
    children: [
      { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
      { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
      { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
      { name: 'Error', iconText: '404', path: '/session/404' },
    ],
  },
  ///
  {
    name: 'Product',
    icon: 'card_giftcard',
    children: [
      { name: 'List Products', iconText: 'SI', path: '/Product/ListProducts' },
      { name: 'Add Product', iconText: 'SU', path: '/Product/AddProduct' },
      { name: 'Import Products', iconText: 'FP', path: '/Product/ImportProducts' },
      { name: 'Print Barcode/Label', iconText: '404', path: '/Product/PrintBarcode' },
      { name: 'Quantity Adjustments', iconText: '404', path: '/Product/QuantityAdjustments' },
      { name: 'Add Adjustment', iconText: '404', path: '/Product/AddAdjustment' },
      { name: 'Stock Counts', iconText: '404', path: '/Product/StockCounts' },
      { name: 'Count Stock', iconText: '404', path: '/Product/Conutstock' },
    ],
  },

  {
    name: 'Sales',
    icon: 'add_shopping_cart',
    children: [
      { name: 'List Sales', iconText: 'SI', path: '/Sales/SalesList' },
      { name: 'Pos Sales', iconText: 'SI', path: '/Sales/PosSales' },
      { name: 'Add Sale', iconText: 'SI', path: '/Sales/Addsales' },
      { name: 'Add Sale by CSV', iconText: 'SI', path: '/Sales/Addsalecsv' },
      { name: 'Deliveries', iconText: 'SI', path: '/Sales/Deliveries' },
      { name: 'List Gift Cards', iconText: 'SI', path: '/Sales/GiftCards' },
    ],
  },
  {
    name: 'Quotations ',
    icon: 'question_answer',
    children: [
      { name: 'List Quotation', iconText: 'SI', path: '/Quotations/Listquotation' },
      { name: 'Add Quotation', iconText: 'SI', path: '/Quotations/Addquotation' },
    ],
  },

  {
    name: 'Purchases ',
    icon: 'shopping_cart',
    children: [
      { name: 'Add Expense', iconText: 'SI', path: '/Purchases/AddExpense' },
      { name: 'Add Purchase', iconText: 'SI', path: '/Purchases/AddPurchase' },
      { name: 'Add Purchase CSV', iconText: 'SI', path: '/Purchases/AddPurchaseCSV' },
      { name: 'List Expenses', iconText: 'SI', path: '/Purchases/ListExpenses' },
      { name: 'List Purchases', iconText: 'SI', path: '/Purchases/ListPurchases' },
    ],
  },

  {
    name: 'Transfers',
    icon: 'transform',
    children: [
      { name: 'List Transfers', iconText: 'SI', path: '/Transfers/ListTransfers' },
      { name: 'Add Transfer', iconText: 'SI', path: '/Transfers/AddTransfer' },
      { name: 'Add Transfer by CSV', iconText: 'SI', path: '/Transfers/AddTransferCSV' },
    ],
  },
  {
    name: 'Returns',
    icon: 'assignment_return',
    children: [
      { name: 'List Returns', iconText: 'SI', path: '/Return/ListReturns' },
      { name: 'Add Return', iconText: 'SI', path: '/Return/AddReturn' },
    ],
  },

  {
    name: 'People',
    icon: 'people',
    children: [
      { name: 'List Users', iconText: 'SI', path: '/People/ListUsers' },
      { name: 'Add User', iconText: 'SI', path: '/People/AddUser' },
      { name: 'List Billers', iconText: 'SI', path: '/People/ListBillers' },
      { name: 'Add Biller', iconText: 'SI', path: '/People/AddBiller' },
      { name: 'List Customers', iconText: 'SI', path: '/People/ListCustomers' },
      { name: 'Add Customer', iconText: 'SI', path: '/People/AddCustomer' },
      { name: 'List Suppliers', iconText: 'SI', path: '/People/ListSuppliers' },
      { name: 'Add Supplier', iconText: 'SI', path: '/People/AddSupplier' },
    ],
  },

  { name: 'Notifications', icon: 'notifications', path: '/Notifications/Notifications' },

  { name: 'Calendar', icon: 'perm_contact_calendar', path: '/Calendar/Calendar' },

  {
    name: 'Settings',
    icon: 'settings',
    children: [
      { name: 'System Settings', iconText: 'SI', path: '/Settings/SystemSettings' },
      { name: 'POS Settings', iconText: 'SI', path: '/Settings/POSSettings' },
      { name: 'Promos', iconText: 'SI', path: '/Settings/Promos' },
      { name: 'Add Promos', iconText: 'SI', path: '/Settings/AddPromos' },
      { name: 'List Promos', iconText: 'SI', path: '/Settings/ListPromos' },

      { name: 'List Printers', iconText: 'SI', path: '/Settings/ListPrinters' },
      { name: 'List Print', iconText: 'SI', path: '/Settings/ListPrint' },
      { name: 'Add Printer', iconText: 'SI', path: '/Settings/AddPrinter' },
      
      { name: 'Change Logo', iconText: 'SI', path: '/Settings/ChangeLogo' },
      { name: 'Currencies', iconText: 'SI', path: '/Settings/Currencies' },
      { name: 'Add Currencies', iconText: 'SI', path: '/Settings/AddCurrencies' },
      { name: 'List Currenies', iconText: 'SI', path: '/Settings/ListCurrenies' },
      // { name: 'Edit Currenies', iconText: 'SI', path: '/Settings/Currency/EditCurrencies/:id' },

      { name: 'Customer Groups', iconText: 'SI', path: '/Settings/CustomerGroups' },
      { name: 'Add Customer Groups', iconText: 'SI', path: '/Settings/AddCustomerGroups' },
      { name: 'List Customer Groups', iconText: 'SI', path: '/Settings/ListCustomerGroups' },
      { name: 'Price Groups', iconText: 'SI', path: '/Settings/PriceGroups' },
      { name: 'Add Price Groups', iconText: 'SI', path: '/Settings/AddPriceGroups' },
      { name: 'List Price Groups', iconText: 'SI', path: '/Settings/ListPriceGroups' },
      { name: 'Categories', iconText: 'SI', path: '/Settings/Categories' },
      { name: 'Add Categories', iconText: 'SI', path: '/Settings/AddCategories' },
      { name: 'List Categories', iconText: 'SI', path: '/Settings/ListCategories' },
      { name: 'Expense Categories', iconText: 'SI', path: '/Settings/ExpenseCategories' },
      { name: 'Add ExpenseCategories', iconText: 'SI', path: '/Settings/AddExpenseCategories' },
      { name: 'List ExpenseCategories', iconText: 'SI', path: '/Settings/ListExpenseCategories' },

      { name: 'Units', iconText: 'SI', path: '/Settings/Units' },
      { name: 'Add Units', iconText: 'SI', path: '/Settings/AddUnits' },
      { name: 'List Units', iconText: 'SI', path: '/Settings/ListUnits' },

      { name: 'Brands', iconText: 'SI', path: '/Settings/Brands' },
      { name: 'Add Brands', iconText: 'SI', path: '/Settings/AddBrands' },
      { name: 'List Brands', iconText: 'SI', path: '/Settings/ListBrands' },

      { name: 'Variants', iconText: 'SI', path: '/Settings/Variants' },
      { name: 'Add Variants', iconText: 'SI', path: '/Settings/AddVariants' },
      { name: 'List Variants', iconText: 'SI', path: '/Settings/ListVariants' },

      { name: 'Tax Rates', iconText: 'SI', path: '/Settings/TaxRates' },
      { name: 'Add Tax Rates', iconText: 'SI', path: '/Settings/AddTaxRates' },
      { name: 'List Tax Rates', iconText: 'SI', path: '/Settings/ListTaxRates' },


      { name: 'Warehouses', iconText: 'SI', path: '/Settings/Warehouses' },
      { name: 'Add WareHouses', iconText: 'SI', path: '/Settings/AddWareHouses' },
      { name: 'List WareHouses', iconText: 'SI', path: '/Settings/ListWareHouses' },

      { name: 'Email Templates', iconText: 'SI', path: '/Settings/EmailTemplates' },
      { name: 'Group Permissions', iconText: 'SI', path: '/Settings/GroupPermissions' },
      { name: 'Backups', iconText: 'SI', path: '/Settings/Backups' },
    ],
  },

  {
    name: 'Reports',
    icon: 'report',
    children: [
      { name: 'Overview Chart', iconText: 'SI', path: '/Reports/OverviewChart' },
      { name: 'Warehouse Stock ', iconText: 'SI', path: '/Reports/WarehouseStockChart' },
      { name: 'Best Sellers', iconText: 'SI', path: '/Reports/BestSellers' },
      { name: 'Register Report', iconText: 'SI', path: '/Reports/RegisterReport' },
      { name: 'Product Quantity ', iconText: 'SI', path: '/Reports/ProductQuantityAlerts' },
      { name: 'Products Report', iconText: 'SI', path: '/Reports/ProductsReport' },
      { name: 'Adjustments Report', iconText: 'SI', path: '/Reports/AdjustmentsReport' },
      { name: 'Categories Report', iconText: 'SI', path: '/Reports/CategoriesReport' },
      { name: 'Brands Report', iconText: 'SI', path: '/Reports/BrandsReport' },
      { name: 'Daily Sales', iconText: 'SI', path: '/Reports/DailySales' },
      { name: 'Monthly Sales', iconText: 'SI', path: '/Reports/MonthlySales' },
      { name: 'Sales Report', iconText: 'SI', path: '/Reports/SalesReport' },
      { name: 'Payments Report', iconText: 'SI', path: '/Reports/PaymentsReport' },
      { name: 'Tax Report', iconText: 'SI', path: '/Reports/TaxReport' },
      { name: 'Profit and/or Loss', iconText: 'SI', path: '/Reports/ProfitLoss' },
      { name: 'Daily Purchases', iconText: 'SI', path: '/Reports/DailyPurchases' },
      { name: 'Monthly Purchases', iconText: 'SI', path: '/Reports/MonthlyPurchases' },
      { name: 'Purchases Report', iconText: 'SI', path: '/Reports/PurchasesReport' },
      { name: 'Expenses Report', iconText: 'SI', path: '/Reports/ExpensesReport' },
      { name: 'Customers Report', iconText: 'SI', path: '/Reports/CustomersReport' },
      { name: 'Suppliers Report', iconText: 'SI', path: '/Reports/SuppliersReport' },
      { name: 'Staff Report', iconText: 'SI', path: '/Reports/StaffReport' },
    ],
  },

  {
    name: 'Front End ',
    icon: 'assignment_return',
    children: [
      { name: 'Shop Settings', iconText: 'SI', path: '/FrontEnd/ShopSettings' },
      { name: 'Slider Settings', iconText: 'SI', path: '/FrontEnd/SliderSettings' },
      { name: 'List Pages', iconText: 'SI', path: '/FrontEnd/ListPages' },
      { name: 'Add Page', iconText: 'SI', path: '/FrontEnd/AddPage' },
      { name: 'SMS Settings', iconText: 'SI', path: '/FrontEnd/SMSSettings' },
      { name: 'Send SMS', iconText: 'SI', path: '/FrontEnd/SendSMS' },
      { name: 'SMS Log', iconText: 'SI', path: '/FrontEnd/SMSLog' },
    ],
  },

  ////
  { label: 'Components', type: 'label' },
  {
    name: 'Components',
    icon: 'favorite',
    badge: { value: '30+', color: 'secondary' },
    children: [
      { name: 'Auto Complete', path: '/material/autocomplete', iconText: 'A' },
      { name: 'Buttons', path: '/material/buttons', iconText: 'B' },
      { name: 'Checkbox', path: '/material/checkbox', iconText: 'C' },
      { name: 'Dialog', path: '/material/dialog', iconText: 'D' },
      { name: 'Expansion Panel', path: '/material/expansion-panel', iconText: 'E' },
      { name: 'Form', path: '/material/form', iconText: 'F' },
      { name: 'Icons', path: '/material/icons', iconText: 'I' },
      { name: 'Menu', path: '/material/menu', iconText: 'M' },
      { name: 'Progress', path: '/material/progress', iconText: 'P' },
      { name: 'Radio', path: '/material/radio', iconText: 'R' },
      { name: 'Switch', path: '/material/switch', iconText: 'S' },
      { name: 'Slider', path: '/material/slider', iconText: 'S' },
      { name: 'Snackbar', path: '/material/snackbar', iconText: 'S' },
      { name: 'Table', path: '/material/table', iconText: 'T' },
      { name: 'uploadimage', path: '/material/uploadimage', iconText: 'u' },
      { name: 'editor', path: '/material/ck', iconText: 'E' },
    ],
  },
  // {
  //   name: 'Charts',
  //   icon: 'trending_up',
  //   children: [{ name: 'Echarts', path: '/charts/echarts', iconText: 'E' }],
  // },
  // {
  //   name: 'Documentation',
  //   icon: 'launch',
  //   type: 'extLink',
  //   path: 'http://demos.ui-lib.com/matx-react-doc/',
  // },
];
