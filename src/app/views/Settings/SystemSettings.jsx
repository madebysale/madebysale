import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Box, styled } from '@mui/system';
import AutocompleteComboNew from '../material-kit/auto-complete/AutocompleteComboNew';
import { Breadcrumb, SimpleCard } from 'app/components';
import Label from '../material-kit/tables/Label';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SimpleFormNew from '../material-kit/forms/SimpleFormNew';
import { makeStyles } from '@material-ui/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import useAuth from 'app/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const useStyles = makeStyles((theme) => ({
  btn2: {
    marginTop: '20px',
    padding: '7px 23px',
    border: 'none',
    fontSize: '15px',
    color: '#fff',
    background: '#303f9f',
  },
  textnew1: {
    fontSize: '15px',
    fontWeight: '600',
    paddingBottom: '20px',
  },
}));

const handleChange = (event) => {
  console.log(event);
};

// inital login credentials
const initialValues = {
  SiteName: 'Stock Manager Advance with All Modules',
  Language: 'English',
  AccountingMethod: '',
  MaintenanceMode: '',
  LoginCaptcha: '',
  DateFormat: '',
  DefaultWarehouse: '',
  DefaultEmail: '',
  DefaultCustomerGroup: '',
  Default: '',
  Rowsperpage: '',
  Timezone: '',
  DefaultBiller: '',
  Numberofdays: 'Number of days to disable editing ',
  DefaultCurrency: '',
  DefaultPriceGroup: '',
  RTLSupport: '',
  Calender: '',
  PDFLibrary: '',
  APIsFeature: '',
  ProductTax: '',
  Barcodeseparator: '',
  ProductExpiry: '',
  Racks: '',
  BarcodeRenderer: '',
  Removeexpired: '',
  ProductVariants: '',
  Updatecost: '',
  Displaywarehouse: '',
  Watermark: '',
  Thumbnail: '150',
  Thumbnail1: '150',
  Image: '180',
  Image1: '180',
  OverSelling: '',
  ProductLevelDiscount: '',
  Productscount: '',
  InvoiceView: '',
  ReferenceFormat: '',
  ProductSerial: '',
  CartItemAddition: '',
  BusinessState: '',
  OrderTax: '',
  AutoDetectBarcode: '',
  DefaultOrderPage: '',
  SalesReferencePrefix: 'Sales',
  PurchasePaymentPrefix: 'pop',
  PurchaseReferencePrefix: '',
  ExpensePrefix: '',
  ReturnSalePrefix: 'SR',
  DeliveryReferencePrefix: 'DO',
  ReturnPurchasePrefix: 'PR',
  QuantityAdjustmentPrefix: '',
  PaymentReferencePrefix: 'IPAY',
  QuotationReferencePrefix: 'QUOTE',
  TransferReferencePrefix: 'TR',
  Decimals: '',
  DecimalsSeparator: '',
  CurrencySymbol: 'admin@stock.com',
  QuantityDecimals: '',
  ThousandsSeparator: '',
  SouthAsianCountries: '',
  DisplayCurrencySymbol: '',
  EmailProtocol: '',
  CustomerAwardPoints: '',
  StaffAwardPoints: '',
  AwardPoints: '',
  AwardPoints1: '',
  // AttachDocument: '',
  // Note: ''
};

// form field validation schema
const validationSchema = Yup.object().shape({
  SiteName: Yup.string()
    .min(6, 'SiteName must be 6 character length')
    .required('Site Name is required!'),

  Language: Yup.string()
    .min(6, 'Language must be 6 character length')
    .required('Language is required!'),

  AccountingMethod: Yup.string()
    .min(6, 'AccountingMethod must be 6 character length')
    .required('Accounting Method is required!'),

  MaintenanceMode: Yup.string()
    .min(6, 'MaintenanceMode must be 6 character length')
    .required('Maintenance Mode is required!'),
  LoginCaptcha: Yup.string()
    .min(6, 'LoginCaptcha must be 6 character length')
    .required('Login Captcha is required!'),
  DateFormat: Yup.string()
    .min(6, 'DateFormat must be 6 character length')
    .required('Date Format is required!'),

  DefaultWarehouse: Yup.string()
    .min(6, 'DefaultWarehouse must be 6 character length')
    .required('Default Warehouse is required!'),

  DefaultEmail: Yup.string()
    .min(6, 'DefaultEmail must be 6 character length')
    .required('Default Email is required!'),
  DefaultCustomerGroup: Yup.string()
    .min(6, 'DefaultCustomerGroup must be 6 character length')
    .required('Default Customer Group is required!'),

  Default: Yup.string()
    .min(6, 'Default must be 6 character length')
    .required('Default is required!'),

  Rowsperpage: Yup.string()
    .min(6, 'Rowsperpage must be 6 character length')
    .required('Rows per page is required!'),
  Timezone: Yup.string()
    .min(6, 'Timezone must be 6 character length')
    .required('Time zone is required!'),
  DefaultBiller: Yup.string()
    .min(6, 'DefaultBiller must be 6 character length')
    .required('Default Biller is required!'),
  Numberofdays: Yup.string()
    .min(6, 'Numberofdays must be 6 character length')
    .required('Number of days is required!'),
  DefaultCurrency: Yup.string()
    .min(6, 'DefaultCurrency must be 6 character length')
    .required('Default Currency is required!'),
  DefaultPriceGroup: Yup.string()
    .min(6, 'DefaultPriceGroup must be 6 character length')
    .required('Default Price Group is required!'),
  RTLSupport: Yup.string()
    .min(6, 'RTLSupport must be 6 character length')
    .required('RTL Support is required!'),
  Calender: Yup.string()
    .min(6, 'Calender must be 6 character length')
    .required('Calender is required!'),
  PDFLibrary: Yup.string()
    .min(6, 'PDFLibrary must be 6 character length')
    .required('PDF Library is required!'),

  APIsFeature: Yup.string()
    .min(6, 'APIsFeature must be 6 character length')
    .required('APIs Feature is required!'),

  ProductTax: Yup.string()
    .min(6, 'ProductTax must be 6 character length')
    .required('Product Tax is required!'),
  Barcodeseparator: Yup.string()
    .min(6, 'Barcodeseparator must be 6 character length')
    .required('Barcode separator is required!'),
  ProductExpiry: Yup.string()
    .min(6, 'ProductExpiry must be 6 character length')
    .required('Product Expiry is required!'),

  Racks: Yup.string()
    .min(6, 'Racks must be 6 character length')
    .required('Racks is required!'),
  BarcodeRenderer: Yup.string()
    .min(6, 'BarcodeRenderer must be 6 character length')
    .required('Barcode Renderer is required!'),

  Removeexpired: Yup.string()
    .min(6, 'Removeexpired must be 6 character length')
    .required('Remove expired is required!'),
  ProductVariants: Yup.string()
    .min(6, 'ProductVariants must be 6 character length')
    .required('Product Variants is required!'),

  Updatecost: Yup.string()
    .min(6, 'Updatecost must be 6 character length')
    .required('Update cost is required!'),
  Displaywarehouse: Yup.string()
    .min(6, 'Displaywarehouse must be 6 character length')
    .required('Display warehouse is required!'),
  Watermark: Yup.string()
    .min(6, 'Watermark must be 6 character length')
    .required('Watermark is required!'),

  Thumbnail: Yup.string()
    .min(6, 'Thumbnail must be 6 character length')
    .required('Thumbnail is required!'),
  Thumbnail1: Yup.string()
    .min(6, 'Thumbnail1 must be 6 character length')
    .required('Thumbnail1 is required!'),

  Image: Yup.string()
    .min(6, 'Image must be 6 character length')
    .required('Image is required!'),

  Image1: Yup.string()
    .min(6, 'Image1 must be 6 character length')
    .required('Image1 is required!'),

  OverSelling: Yup.string()
    .min(6, 'OverSelling must be 6 character length')
    .required('Over Selling is required!'),

  InvoiceView: Yup.string()
    .min(6, 'InvoiceView must be 6 character length')
    .required('Invoice View is required!'),
  ReferenceFormat: Yup.string()
    .min(6, 'ReferenceFormat must be 6 character length')
    .required('Reference Format is required!'),
  ProductSerial: Yup.string()
    .min(6, 'ProductSerial must be 6 character length')
    .required('Product Serial is required!'),
  CartItemAddition: Yup.string()
    .min(6, 'CartItemAddition must be 6 character length')
    .required('CartItem Addition is required!'),
  BusinessState: Yup.string()
    .min(6, 'BusinessState must be 6 character length')
    .required('Business State is required!'),

  ProductLevelDiscount: Yup.string()
    .min(6, 'ProductLevelDiscount must be 6 character length')
    .required('Product Level Discount is required!'),

  OrderTax: Yup.string()
    .min(6, 'OrderTax must be 6 character length')
    .required('Order Tax is required!'),
  AutoDetectBarcode: Yup.string()
    .min(6, 'AutoDetectBarcode must be 6 character length')
    .required('AutoDetect Barcode is required!'),
  DefaultOrderPage: Yup.string()
    .min(6, 'DefaultOrderPage must be 6 character length')
    .required('Default Order Page is required!'),

  SalesReferencePrefix: Yup.string()
    .min(6, 'SalesReferencePrefix must be 6 character length')
    .required('Sales Reference Prefix is required!'),

  PurchasePaymentPrefix: Yup.string()
    .min(6, 'PurchasePaymentPrefix must be 6 character length')
    .required('Purchase Payment Prefix is required!'),
  PurchaseReferencePrefix: Yup.string()
    .min(6, 'PurchaseReferencePrefix must be 6 character length')
    .required('Purchase Reference Prefix is required!'),

  ExpensePrefix: Yup.string()
    .min(6, 'ExpensePrefix must be 6 character length')
    .required('Expense Prefix is required!'),
  ReturnSalePrefix: Yup.string()
    .min(6, 'ReturnSalePrefix must be 6 character length')
    .required('Return Sale Prefix is required!'),
  DeliveryReferencePrefix: Yup.string()
    .min(6, 'DeliveryReferencePrefix must be 6 character length')
    .required('Delivery Reference Prefix is required!'),
  ReturnPurchasePrefix: Yup.string()
    .min(6, 'ReturnPurchasePrefix must be 6 character length')
    .required('Return Purchase Prefix is required!'),
  QuantityAdjustmentPrefix: Yup.string()
    .min(6, 'QuantityAdjustmentPrefix must be 6 character length')
    .required('Quantity Adjustment Prefix is required!'),
  PaymentReferencePrefix: Yup.string()
    .min(6, 'PaymentReferencePrefix must be 6 character length')
    .required('Payment Reference Prefix is required!'),
  QuotationReferencePrefix: Yup.string()
    .min(6, 'QuotationReferencePrefix must be 6 character length')
    .required('Quotation Reference Prefix is required!'),
  TransferReferencePrefix: Yup.string()
    .min(6, 'TransferReferencePrefix must be 6 character length')
    .required('Transfer Reference Prefix is required!'),
  Decimals: Yup.string()
    .min(6, 'Decimals must be 6 character length')
    .required('Decimals is required!'),
  DecimalsSeparator: Yup.string()
    .min(6, 'DecimalsSeparator must be 6 character length')
    .required('Decimals Separator is required!'),

  CurrencySymbol: Yup.string()
    .min(6, 'CurrencySymbol must be 6 character length')
    .required('Currency Symbol is required!'),
  QuantityDecimals: Yup.string()
    .min(6, 'QuantityDecimals must be 6 character length')
    .required('Quantity Decimals is required!'),
  ThousandsSeparator: Yup.string()
    .min(6, 'ThousandsSeparator must be 6 character length')
    .required('Thousands Separator is required!'),
  SouthAsianCountries: Yup.string()
    .min(6, 'SouthAsianCountries must be 6 character length')
    .required('South Asian Countries is required!'),
  DisplayCurrencySymbol: Yup.string()
    .min(6, 'DisplayCurrencySymbol must be 6 character length')
    .required('Display Currency Symbol is required!'),
  EmailProtocol: Yup.string()
    .min(6, 'EmailProtocol must be 6 character length')
    .required('Email Protocol is required!'),

  CustomerAwardPoints: Yup.string()
    .min(6, 'CustomerAwardPoints must be 6 character length')
    .required('Customer Award Points is required!'),
  StaffAwardPoints: Yup.string()
    .min(6, 'StaffAwardPoints must be 6 character length')
    .required('Staff Award Points is required!'),
  AwardPoints: Yup.string()
    .min(6, 'AwardPoints must be 6 character length')
    .required('Award Points is required!'),
  AwardPoints1: Yup.string()
    .min(6, 'AwardPoints1 must be 6 character length')
    .required('Award Points is required!'),

  Productscount: Yup.string()
    .min(6, 'Productscount must be 6 character length')
    .required('Products count is required!'),
});

const SystemSettings = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState('Controlled');
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState('');
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'System Settings' }]}
        />
      </Box>
      <SimpleCard>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Paper
                style={{
                  boxShadow: 'none',
                  border: '1px solid rgb(229 217 217)',
                  padding: '15px',
                }}
              >
                <Typography variant="h6" className={classes.textnew1}>
                  Site Configuration
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'SiteName',
                        label: 'Site Name',
                        onBlur: handleBlur,
                        value: values.SiteName,
                        onChange: handleChange,
                        helperText: touched.SiteName && errors.SiteName,
                        error: Boolean(errors.SiteName && touched.SiteName),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'AccountingMethod',
                        label: 'Accounting Method',
                        value: values.AccountingMethod,
                        onBlur: handleBlur,
                        onChange: handleChange('AccountingMethod'),
                        helperText: touched.AccountingMethod && errors.AccountingMethod,
                        error: Boolean(errors.AccountingMethod && touched.AccountingMethod),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'MaintenanceMode',
                        label: 'Maintenance Mode',
                        value: values.MaintenanceMode,
                        onBlur: handleBlur,
                        onChange: handleChange('MaintenanceMode'),
                        helperText: touched.MaintenanceMode && errors.MaintenanceMode,
                        error: Boolean(errors.MaintenanceMode && touched.MaintenanceMode),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'LoginCaptcha',
                        label: 'Login Captcha',
                        value: values.LoginCaptcha,
                        onBlur: handleBlur,
                        onChange: handleChange('LoginCaptcha'),
                        helperText: touched.LoginCaptcha && errors.LoginCaptcha,
                        error: Boolean(errors.LoginCaptcha && touched.LoginCaptcha),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'DateFormat ',
                        label: 'Date Format',
                        value: values.DateFormat,
                        onBlur: handleBlur,
                        onChange: handleChange('DateFormat'),
                        helperText: touched.DateFormat && errors.DateFormat,
                        error: Boolean(errors.DateFormat && touched.DateFormat),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'DefaultWarehouse ',
                        label: 'Default Warehouse ',
                        value: values.DefaultWarehouse,
                        onBlur: handleBlur,
                        onChange: handleChange('DefaultWarehouse'),
                        helperText: touched.DefaultWarehouse && errors.DefaultWarehouse,
                        error: Boolean(errors.DefaultWarehouse && touched.DefaultWarehouse),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'DefaultEmail',
                        label: 'Default Email',
                        onBlur: handleBlur,
                        value: values.DefaultEmail,
                        onChange: handleChange,
                        helperText: touched.DefaultEmail && errors.DefaultEmail,
                        error: Boolean(errors.DefaultEmail && touched.DefaultEmail),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Language',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],

                        name: 'Language',
                        label: 'Language',
                        defaultValue: 'English',
                        value: values.Language,
                        onBlur: handleBlur,
                        onChange: handleChange('Language'),
                        helperText: touched.Language && errors.Language,
                        error: Boolean(errors.Language && touched.Language),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'DefaultCustomerGroup ',
                        label: 'Default Customer Group ',
                        value: values.DefaultCustomerGroup,
                        onBlur: handleBlur,
                        onChange: handleChange('DefaultCustomerGroup'),
                        helperText: touched.DefaultCustomerGroup && errors.DefaultCustomerGroup,
                        error: Boolean(errors.DefaultCustomerGroup && touched.DefaultCustomerGroup),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'Default',
                        label: 'Default',
                        value: values.Default,
                        onBlur: handleBlur,
                        onChange: handleChange('Default'),
                        helperText: touched.Default && errors.Default,
                        error: Boolean(errors.Default && touched.Default),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'Rowsperpage ',
                        label: 'Rows per page ',
                        value: values.Rowsperpage,
                        onBlur: handleBlur,
                        onChange: handleChange('Rowsperpage'),
                        helperText: touched.Rowsperpage && errors.Rowsperpage,
                        error: Boolean(errors.Rowsperpage && touched.Rowsperpage),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'Timezone',
                        label: 'Time zone',
                        value: values.Timezone,
                        onBlur: handleBlur,
                        onChange: handleChange('Timezone'),
                        helperText: touched.Timezone && errors.Timezone,
                        error: Boolean(errors.Timezone && touched.Timezone),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'DefaultBiller',
                        label: 'Default Biller',
                        value: values.DefaultBiller,
                        onBlur: handleBlur,
                        onChange: handleChange('DefaultBiller'),
                        helperText: touched.DefaultBiller && errors.DefaultBiller,
                        error: Boolean(errors.DefaultBiller && touched.DefaultBiller),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'Numberofdays',
                        label: 'Number of days to disable editing ',
                        onBlur: handleBlur,
                        value: values.Numberofdays,
                        onChange: handleChange,
                        helperText: touched.Numberofdays && errors.Numberofdays,
                        error: Boolean(errors.Numberofdays && touched.Numberofdays),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'DefaultCurrency',
                        label: 'Default Currency',
                        value: values.DefaultCurrency,
                        onBlur: handleBlur,
                        onChange: handleChange('DefaultCurrency'),
                        helperText: touched.DefaultCurrency && errors.DefaultCurrency,
                        error: Boolean(errors.DefaultCurrency && touched.DefaultCurrency),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'DefaultPriceGroup',
                        label: 'Default Price Group',
                        value: values.DefaultPriceGroup,
                        onBlur: handleBlur,
                        onChange: handleChange('DefaultPriceGroup'),
                        helperText: touched.DefaultPriceGroup && errors.DefaultPriceGroup,
                        error: Boolean(errors.DefaultPriceGroup && touched.DefaultPriceGroup),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'RTLSupport ',
                        label: 'RTL Support ',
                        value: values.RTLSupport,
                        onBlur: handleBlur,
                        onChange: handleChange('RTLSupport'),
                        helperText: touched.RTLSupport && errors.RTLSupport,
                        error: Boolean(errors.RTLSupport && touched.RTLSupport),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'Calender',
                        label: 'Calender',
                        value: values.Calender,
                        onBlur: handleBlur,
                        onChange: handleChange('Calender'),
                        helperText: touched.Calender && errors.Calender,
                        error: Boolean(errors.Calender && touched.Calender),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'PDFLibrary',
                        label: 'PDF Library',
                        value: values.PDFLibrary,
                        onBlur: handleBlur,
                        onChange: handleChange('PDFLibrary'),
                        helperText: touched.PDFLibrary && errors.PDFLibrary,
                        error: Boolean(errors.PDFLibrary && touched.PDFLibrary),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'APIsFeature',
                        label: 'APIs Feature',
                        value: values.APIsFeature,
                        onBlur: handleBlur,
                        onChange: handleChange('APIsFeature'),
                        helperText: touched.APIsFeature && errors.APIsFeature,
                        error: Boolean(errors.APIsFeature && touched.APIsFeature),
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>
              {/* /// */}
              <Paper
                style={{
                  marginTop: '20px',
                  boxShadow: 'none',
                  border: '1px solid rgb(229 217 217)',
                  padding: '15px',
                }}
              >
                <Typography variant="h6" className={classes.textnew1}>
                  Products
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'ProductTax',
                        label: 'Product Tax',
                        value: values.ProductTax,
                        onBlur: handleBlur,
                        onChange: handleChange('ProductTax'),
                        helperText: touched.ProductTax && errors.ProductTax,
                        error: Boolean(errors.ProductTax && touched.ProductTax),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'Barcodeseparator ',
                        label: 'Barcode separator',
                        value: values.Barcodeseparator,
                        onBlur: handleBlur,
                        onChange: handleChange('Barcodeseparator'),
                        helperText: touched.Barcodeseparator && errors.Barcodeseparator,
                        error: Boolean(errors.Barcodeseparator && touched.Barcodeseparator),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'ProductExpiry',
                        label: 'Product Expiry',
                        value: values.ProductExpiry,
                        onBlur: handleBlur,
                        onChange: handleChange('ProductExpiry'),
                        helperText: touched.ProductExpiry && errors.ProductExpiry,
                        error: Boolean(errors.ProductExpiry && touched.ProductExpiry),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'Racks',
                        label: 'Racks',
                        value: values.Racks,
                        onBlur: handleBlur,
                        onChange: handleChange('Racks'),
                        helperText: touched.Racks && errors.Racks,
                        error: Boolean(errors.Racks && touched.Racks),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'BarcodeRenderer ',
                        label: 'Barcode Renderer ',
                        value: values.Racks,
                        onBlur: handleBlur,
                        onChange: handleChange('Racks'),
                        helperText: touched.Racks && errors.Racks,
                        error: Boolean(errors.Racks && touched.Racks),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'Removeexpired',
                        label: 'Remove expired products from stock',
                        value: values.Removeexpired,
                        onBlur: handleBlur,
                        onChange: handleChange('Removeexpired'),
                        helperText: touched.Removeexpired && errors.Removeexpired,
                        error: Boolean(errors.Removeexpired && touched.Removeexpired),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'ProductVariants',
                        label: 'Product Variants',
                        value: values.ProductVariants,
                        onBlur: handleBlur,
                        onChange: handleChange('ProductVariants'),
                        helperText: touched.ProductVariants && errors.ProductVariants,
                        error: Boolean(errors.ProductVariants && touched.ProductVariants),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'Updatecost',
                        label: 'Update cost with purchase',
                        value: values.Updatecost,
                        onBlur: handleBlur,
                        onChange: handleChange('Updatecost'),
                        helperText: touched.Updatecost && errors.Updatecost,
                        error: Boolean(errors.Updatecost && touched.Updatecost),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'Displaywarehouse',
                        label: 'Display warehouse products',
                        value: values.Displaywarehouse,
                        onBlur: handleBlur,
                        onChange: handleChange('Displaywarehouse'),
                        helperText: touched.Displaywarehouse && errors.Displaywarehouse,
                        error: Boolean(errors.Displaywarehouse && touched.Displaywarehouse),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'Watermark',
                        label: 'Watermark',
                        value: values.Watermark,
                        onBlur: handleBlur,
                        onChange: handleChange('Watermark'),
                        helperText: touched.Watermark && errors.Watermark,
                        error: Boolean(errors.Watermark && touched.Watermark),
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Label style={{ margin: '10px 0px 0px' }}>Thumbnail Size (W:H)</Label>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'Thumbnail',
                        label: 'Thumbnail',
                        onBlur: handleBlur,
                        value: values.Thumbnail,
                        onChange: handleChange,
                        helperText: touched.Thumbnail && errors.Thumbnail,
                        error: Boolean(errors.Thumbnail && touched.Thumbnail),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'Thumbnail1',
                        label: 'Thumbnail1',
                        onBlur: handleBlur,
                        value: values.Thumbnail1,
                        onChange: handleChange,
                        helperText: touched.Thumbnail1 && errors.Thumbnail1,
                        error: Boolean(errors.Thumbnail1 && touched.Thumbnail1),
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Label style={{ margin: '10px 0px' }}>Image Size (W:H)</Label>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'Image',
                        label: 'Image',
                        onBlur: handleBlur,
                        value: values.Image,
                        onChange: handleChange,
                        helperText: touched.Image && errors.Image,
                        error: Boolean(errors.Image && touched.Image),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'Image1',
                        label: 'Image',
                        onBlur: handleBlur,
                        value: values.Image1,
                        onChange: handleChange,
                        helperText: touched.Image1 && errors.Image1,
                        error: Boolean(errors.Image1 && touched.Image1),
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>
              {/* /// */}
              <Paper
                style={{
                  marginTop: '20px',
                  boxShadow: 'none',
                  border: '1px solid rgb(229 217 217)',
                  padding: '15px',
                }}
              >
                <Typography variant="h6" className={classes.textnew1}>
                  Sales
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'OverSelling',
                        label: 'Over Selling',
                        value: values.OverSelling,
                        onBlur: handleBlur,
                        onChange: handleChange('OverSelling'),
                        helperText: touched.OverSelling && errors.OverSelling,
                        error: Boolean(errors.OverSelling && touched.OverSelling),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'ProductLevelDiscount',
                        label: 'Product Level Discount',
                        value: values.ProductLevelDiscount,
                        onBlur: handleBlur,
                        onChange: handleChange('ProductLevelDiscount'),
                        helperText: touched.ProductLevelDiscount && errors.ProductLevelDiscount,
                        error: Boolean(errors.ProductLevelDiscount && touched.ProductLevelDiscount),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'Productscount',
                        label: 'Products count ',
                        value: values.Productscount,
                        onBlur: handleBlur,
                        onChange: handleChange('Productscount'),
                        helperText: touched.Productscount && errors.Productscount,
                        error: Boolean(errors.Productscount && touched.Productscount),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'InvoiceView',
                        label: 'Invoice View',
                        value: values.InvoiceView,
                        onBlur: handleBlur,
                        onChange: handleChange('InvoiceView'),
                        helperText: touched.InvoiceView && errors.InvoiceView,
                        error: Boolean(errors.InvoiceView && touched.InvoiceView),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'ReferenceFormat',
                        label: 'Reference Format',
                        value: values.ReferenceFormat,
                        onBlur: handleBlur,
                        onChange: handleChange('ReferenceFormat'),
                        helperText: touched.ReferenceFormat && errors.ReferenceFormat,
                        error: Boolean(errors.ReferenceFormat && touched.ReferenceFormat),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'ProductSerial',
                        label: 'Product Serial',
                        value: values.ProductSerial,
                        onBlur: handleBlur,
                        onChange: handleChange('ProductSerial'),
                        helperText: touched.ProductSerial && errors.ProductSerial,
                        error: Boolean(errors.ProductSerial && touched.ProductSerial),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'CartItemAddition',
                        label: 'Cart Item Addition Method',
                        value: values.CartItemAddition,
                        onBlur: handleBlur,
                        onChange: handleChange('CartItemAddition'),
                        helperText: touched.CartItemAddition && errors.CartItemAddition,
                        error: Boolean(errors.CartItemAddition && touched.CartItemAddition),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'BusinessState',
                        label: 'Business State',
                        value: values.BusinessState,
                        onBlur: handleBlur,
                        onChange: handleChange('BusinessState'),
                        helperText: touched.BusinessState && errors.BusinessState,
                        error: Boolean(errors.BusinessState && touched.BusinessState),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'OrderTax',
                        label: 'Order Tax',
                        value: values.OrderTax,
                        onBlur: handleBlur,
                        onChange: handleChange('OrderTax'),
                        helperText: touched.OrderTax && errors.OrderTax,
                        error: Boolean(errors.OrderTax && touched.OrderTax),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'AutoDetectBarcode',
                        label: 'Auto Detect Barcode',
                        value: values.AutoDetectBarcode,
                        onBlur: handleBlur,
                        onChange: handleChange('AutoDetectBarcode'),
                        helperText: touched.AutoDetectBarcode && errors.AutoDetectBarcode,
                        error: Boolean(errors.AutoDetectBarcode && touched.AutoDetectBarcode),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'DefaultOrderPage',
                        label: 'Default Order Page Focus',
                        value: values.DefaultOrderPage,
                        onBlur: handleBlur,
                        onChange: handleChange('DefaultOrderPage'),
                        helperText: touched.DefaultOrderPage && errors.DefaultOrderPage,
                        error: Boolean(errors.DefaultOrderPage && touched.DefaultOrderPage),
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>
              {/* /// */}
              <Paper
                style={{
                  marginTop: '20px',
                  boxShadow: 'none',
                  border: '1px solid rgb(229 217 217)',
                  padding: '15px',
                }}
              >
                <Typography variant="h6" className={classes.textnew1}>
                  Prefix
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'SalesReferencePrefix',
                        label: 'Sales Reference Prefix',
                        onBlur: handleBlur,
                        value: values.SalesReferencePrefix,
                        onChange: handleChange,
                        helperText: touched.SalesReferencePrefix && errors.SalesReferencePrefix,
                        error: Boolean(errors.SalesReferencePrefix && touched.SalesReferencePrefix),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'PurchasePaymentPrefix',
                        label: 'Purchase Payment Prefix',
                        onBlur: handleBlur,
                        value: values.PurchasePaymentPrefix,
                        onChange: handleChange,
                        helperText: touched.PurchasePaymentPrefix && errors.PurchasePaymentPrefix,
                        error: Boolean(
                          errors.PurchasePaymentPrefix && touched.PurchasePaymentPrefix
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'PurchaseReferencePrefix',
                        label: 'Purchase Reference Prefix',
                        onBlur: handleBlur,
                        value: values.PurchaseReferencePrefix,
                        onChange: handleChange,
                        helperText:
                          touched.PurchaseReferencePrefix && errors.PurchaseReferencePrefix,
                        error: Boolean(
                          errors.PurchaseReferencePrefix && touched.PurchaseReferencePrefix
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'ExpensePrefix',
                        label: 'Expense Prefix',
                        onBlur: handleBlur,
                        value: values.ExpensePrefix,
                        onChange: handleChange,
                        helperText: touched.ExpensePrefix && errors.ExpensePrefix,
                        error: Boolean(errors.ExpensePrefix && touched.ExpensePrefix),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'ReturnSalePrefix',
                        label: 'Return Sale Prefix',
                        onBlur: handleBlur,
                        value: values.ReturnSalePrefix,
                        onChange: handleChange,
                        helperText: touched.ReturnSalePrefix && errors.ReturnSalePrefix,
                        error: Boolean(errors.ReturnSalePrefix && touched.ReturnSalePrefix),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'DeliveryReferencePrefix',
                        label: 'Delivery Reference Prefix',
                        onBlur: handleBlur,
                        value: values.DeliveryReferencePrefix,
                        onChange: handleChange,
                        helperText:
                          touched.DeliveryReferencePrefix && errors.DeliveryReferencePrefix,
                        error: Boolean(
                          errors.DeliveryReferencePrefix && touched.DeliveryReferencePrefix
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'ReturnPurchasePrefix',
                        label: 'Return Purchase Prefix',
                        onBlur: handleBlur,
                        value: values.ReturnPurchasePrefix,
                        onChange: handleChange,
                        helperText: touched.ReturnPurchasePrefix && errors.ReturnPurchasePrefix,
                        error: Boolean(errors.ReturnPurchasePrefix && touched.ReturnPurchasePrefix),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'QuantityAdjustmentPrefix',
                        label: 'Quantity Adjustment Prefix',
                        onBlur: handleBlur,
                        value: values.QuantityAdjustmentPrefix,
                        onChange: handleChange,
                        helperText:
                          touched.QuantityAdjustmentPrefix && errors.QuantityAdjustmentPrefix,
                        error: Boolean(
                          errors.QuantityAdjustmentPrefix && touched.QuantityAdjustmentPrefix
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'PaymentReferencePrefix',
                        label: 'Payment Reference Prefix',
                        onBlur: handleBlur,
                        value: values.PaymentReferencePrefix,
                        onChange: handleChange,
                        helperText: touched.PaymentReferencePrefix && errors.PaymentReferencePrefix,
                        error: Boolean(
                          errors.PaymentReferencePrefix && touched.PaymentReferencePrefix
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'QuotationReferencePrefix',
                        label: 'Quotation Reference Prefix',
                        onBlur: handleBlur,
                        value: values.QuotationReferencePrefix,
                        onChange: handleChange,
                        helperText:
                          touched.QuotationReferencePrefix && errors.QuotationReferencePrefix,
                        error: Boolean(
                          errors.QuotationReferencePrefix && touched.QuotationReferencePrefix
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'TransferReferencePrefix',
                        label: 'Transfer Reference Prefix',
                        onBlur: handleBlur,
                        value: values.QuotationReferencePrefix,
                        onChange: handleChange,
                        helperText:
                          touched.QuotationReferencePrefix && errors.QuotationReferencePrefix,
                        error: Boolean(
                          errors.QuotationReferencePrefix && touched.QuotationReferencePrefix
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>

              {/* /// */}
              <Paper
                style={{
                  marginTop: '20px',
                  boxShadow: 'none',
                  border: '1px solid rgb(229 217 217)',
                  padding: '15px',
                }}
              >
                <Typography variant="h6" className={classes.textnew1}>
                  Money and Number Format
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'Decimals',
                        label: 'Decimals',
                        value: values.Decimals,
                        onBlur: handleBlur,
                        onChange: handleChange('Decimals'),
                        helperText: touched.Decimals && errors.Decimals,
                        error: Boolean(errors.Decimals && touched.Decimals),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'DecimalsSeparator ',
                        label: 'Decimals Separator ',
                        value: values.DecimalsSeparator,
                        onBlur: handleBlur,
                        onChange: handleChange('DecimalsSeparator'),
                        helperText: touched.DecimalsSeparator && errors.DecimalsSeparator,
                        error: Boolean(errors.DecimalsSeparator && touched.DecimalsSeparator),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'CurrencySymbol',
                        label: 'Currency Symbol',
                        onBlur: handleBlur,
                        value: values.CurrencySymbol,
                        onChange: handleChange,
                        helperText: touched.CurrencySymbol && errors.CurrencySymbol,
                        error: Boolean(errors.CurrencySymbol && touched.CurrencySymbol),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'QuantityDecimals',
                        label: 'Quantity Decimals',
                        value: values.QuantityDecimals,
                        onBlur: handleBlur,
                        onChange: handleChange('QuantityDecimals'),
                        helperText: touched.QuantityDecimals && errors.QuantityDecimals,
                        error: Boolean(errors.QuantityDecimals && touched.QuantityDecimals),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'ThousandsSeparator',
                        label: 'Thousands Separator',
                        value: values.ThousandsSeparator,
                        onBlur: handleBlur,
                        onChange: handleChange('ThousandsSeparator'),
                        helperText: touched.ThousandsSeparator && errors.ThousandsSeparator,
                        error: Boolean(errors.ThousandsSeparator && touched.ThousandsSeparator),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'SouthAsianCountries',
                        label: 'South Asian Countries Currency Format',
                        value: values.SouthAsianCountries,
                        onBlur: handleBlur,
                        onChange: handleChange('SouthAsianCountries'),
                        helperText: touched.SouthAsianCountries && errors.SouthAsianCountries,
                        error: Boolean(errors.SouthAsianCountries && touched.SouthAsianCountries),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'DisplayCurrencySymbol',
                        label: 'Display Currency Symbol',
                        value: values.DisplayCurrencySymbol,
                        onBlur: handleBlur,
                        onChange: handleChange('DisplayCurrencySymbol'),
                        helperText: touched.DisplayCurrencySymbol && errors.DisplayCurrencySymbol,
                        error: Boolean(
                          errors.DisplayCurrencySymbol && touched.DisplayCurrencySymbol
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>

              {/* //// */}
              <Paper
                style={{
                  marginTop: '20px',
                  boxShadow: 'none',
                  border: '1px solid rgb(229 217 217)',
                  padding: '15px',
                }}
              >
                <Typography variant="h6" className={classes.textnew1}>
                  Email
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <AutocompleteComboNew
                      props={{
                        names: [
                          'Oliver Hansen',
                          'Van Henry',
                          'April Tucker',
                          'Ralph Hubbard',
                          'Omar Alexander',
                          'Carlos Abbott',
                          'Miriam Wagner',
                          'Bradley Wilkerson',
                          'Virginia Andrews',
                          'Kelly Snyder',
                        ],
                        name: 'EmailProtocol',
                        label: 'Email Protocol',
                        value: values.EmailProtocol,
                        onBlur: handleBlur,
                        onChange: handleChange('EmailProtocol'),
                        helperText: touched.EmailProtocol && errors.EmailProtocol,
                        error: Boolean(errors.EmailProtocol && touched.EmailProtocol),
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>
              {/* //// */}

              <Paper
                style={{
                  marginTop: '20px',
                  boxShadow: 'none',
                  border: '1px solid rgb(229 217 217)',
                  padding: '15px',
                }}
              >
                <Typography variant="h6" className={classes.textnew1}>
                  Award Points
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'CustomerAwardPoints',
                        label: 'Customer Award Points',
                        onBlur: handleBlur,
                        value: values.CustomerAwardPoints,
                        onChange: handleChange,
                        helperText: touched.CustomerAwardPoints && errors.CustomerAwardPoints,
                        error: Boolean(errors.CustomerAwardPoints && touched.CustomerAwardPoints),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'StaffAwardPoints',
                        label: 'Staff Award Points',
                        onBlur: handleBlur,
                        value: values.StaffAwardPoints,
                        onChange: handleChange,
                        helperText: touched.StaffAwardPoints && errors.StaffAwardPoints,
                        error: Boolean(errors.StaffAwardPoints && touched.StaffAwardPoints),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'AwardPoints',
                        label: 'Award Points',
                        onBlur: handleBlur,
                        value: values.AwardPoints,
                        onChange: handleChange,
                        helperText: touched.AwardPoints && errors.AwardPoints,
                        error: Boolean(errors.AwardPoints && touched.AwardPoints),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'AwardPoints1',
                        label: 'Award Points',
                        onBlur: handleBlur,
                        value: values.AwardPoints1,
                        onChange: handleChange,
                        helperText: touched.AwardPoints1 && errors.AwardPoints1,
                        error: Boolean(errors.AwardPoints1 && touched.AwardPoints1),
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>
              <LoadingButton
                variant="contained"
                type="submit"
                loading={loading}
                className={classes.btn2}
              >
                Update Setting
              </LoadingButton>
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default SystemSettings;
