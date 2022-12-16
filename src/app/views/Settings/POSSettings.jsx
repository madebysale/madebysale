import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Box, styled } from '@mui/system';
import AutocompleteComboNew from '../material-kit/auto-complete/AutocompleteComboNew';
// import AutocompleteComboNew from '../material-kit/forms/AutocompleteComboNew';
import { Breadcrumb, SimpleCard } from 'app/components';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SimpleFormNew from '../material-kit/forms/SimpleFormNew';
import { makeStyles } from '@material-ui/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import useAuth from 'app/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
  DisplayProducts: '',
  DefaultBiller: '',
  OnScreenKeyboard: '',
  Rounding: '',
  DisplayCustomer: '',
  POSPinCode: '',
  DefaultCustomer: '',
  ProductButtonColor: '',
  ItemOrder: '',
  DefaultCategory: '',
  DisplayTime: '',
  Tooltips: '',
  AfterSalePage: '',
  Printing: '',
  Custom1: 'GST Reg',
  Custom2: 'VAT Reg',
  CustomValue: '123456789',
  CustomValue1: '987654321',
  FocusAddItemInput: 'Ctrl+F3',
  AddCustomer: 'Ctrl+Shift+A',
  ToggleBrandsSlider: '',
  Printitemslist: 'F9',
  OpenSuspendedSales: 'Ctrl+F2',
  AddManualItemtoSale: 'Ctrl+Shift+M',
  ToggleCategoriesSlider: 'Ctrl+F11',
  CancelSale: 'F4',
  FinalizeSale: 'F8',
  CloseRegister: 'Ctrl+F10',
  CustomerInput: 'Ctrl+Shift+C',
  ToggleSubcategoriesSlider: 'Ctrl+F12',
  SuspendSale: 'F7',
  TodaysSale: 'Ctrl+F1',
  Authorizenet: '',
  PaypalPro: '',
  Stripe: '',
  // AttachDocument: '',
  // Note: ''
};

// form field validation schema
const validationSchema = Yup.object().shape({
  DisplayProducts: Yup.string()
    .min(6, 'DisplayProducts must be 6 character length')
    .required('Display Products is required!'),
  DefaultBiller: Yup.string()
    .min(6, 'DefaultBiller must be 6 character length')
    .required('Default Biller is required!'),
  OnScreenKeyboard: Yup.string()
    .min(6, 'OnScreenKeyboard must be 6 character length')
    .required('On Screen Keyboard is required!'),

  Rounding: Yup.string()
    .min(6, 'Rounding must be 6 character length')
    .required('Rounding is required!'),
  DisplayCustomer: Yup.string()
    .min(6, 'DisplayCustomer must be 6 character length')
    .required('Display Customer is required!'),

  POSPinCode: Yup.number()
    .min(6, 'POSPinCode must be 6 character length')
    .required('POS Pin Code is required!'),

  DefaultCustomer: Yup.string()
    .min(6, 'DefaultCustomer must be 6 character length')
    .required('Default Customer is required!'),

  ProductButtonColor: Yup.string()
    .min(6, 'ProductButtonColor must be 6 character length')
    .required('Product Button Color is required!'),

  ItemOrder: Yup.string()
    .min(6, 'ItemOrder must be 6 character length')
    .required('Item Order is required!'),

  DefaultCategory: Yup.string()
    .min(6, 'DefaultCategory must be 6 character length')
    .required('Default Category is required!'),

  DisplayTime: Yup.string()
    .min(6, 'DisplayTime must be 6 character length')
    .required('Display Time is required!'),
  Tooltips: Yup.string()
    .min(6, 'Tooltips must be 6 character length')
    .required('Tool tips is required!'),

  AfterSalePage: Yup.string()
    .min(6, 'AfterSalePage must be 6 character length')
    .required('After SalePage is required!'),

  Printing: Yup.string()
    .min(6, 'Printing must be 6 character length')
    .required('Printing is required!'),

  Custom1: Yup.string()
    .min(6, 'Custom1 must be 6 character length')
    .required('Custom1 is required!'),

  Custom2: Yup.string()
    .min(6, 'Custom2 must be 6 character length')
    .required('Custom2 is required!'),

  CustomValue: Yup.string()
    .min(6, 'CustomValue must be 6 character length')
    .required('CustomValue is required!'),

  CustomValue1: Yup.string()
    .min(6, 'CustomValue1 must be 6 character length')
    .required('CustomValue1 is required!'),

  FocusAddItemInput: Yup.string()
    .min(6, 'FocusAddItemInput must be 6 character length')
    .required('FocusAddItemInput is required!'),
  AddCustomer: Yup.string()
    .min(6, 'AddCustomer must be 6 character length')
    .required('AddCustomer is required!'),
  ToggleBrandsSlider: Yup.string()
    .min(6, 'ToggleBrandsSlider must be 6 character length')
    .required('Toggle Brands Slider is required!'),

  Printitemslist: Yup.string()
    .min(6, 'Printitemslist must be 6 character length')
    .required('Print items list is required!'),

  OpenSuspendedSales: Yup.string()
    .min(6, 'OpenSuspendedSales must be 6 character length')
    .required('Open Suspended Sales is required!'),
  AddManualItemtoSale: Yup.string()
    .min(6, 'AddManualItemtoSale must be 6 character length')
    .required('Add Manual Item to Sale is required!'),

  ToggleCategoriesSlider: Yup.string()
    .min(6, 'ToggleCategoriesSlider must be 6 character length')
    .required('Toggle Categories Slider is required!'),

  CancelSale: Yup.string()
    .min(6, 'CancelSale must be 6 character length')
    .required('Cancel Sale is required!'),
  FinalizeSale: Yup.string()
    .min(6, 'FinalizeSale must be 6 character length')
    .required('FinalizeSale is required!'),
  CloseRegister: Yup.string()
    .min(6, 'CloseRegister must be 6 character length')
    .required('Close Register is required!'),

  CustomerInput: Yup.string()
    .min(6, 'CustomerInput must be 6 character length')
    .required('Customer Input is required!'),

  ToggleSubcategoriesSlider: Yup.string()
    .min(6, 'ToggleSubcategoriesSlider must be 6 character length')
    .required('Toggle Subcategories Slider is required!'),

  SuspendSale: Yup.string()
    .min(6, 'SuspendSale must be 6 character length')
    .required('SuspendSale is required!'),

  TodaysSale: Yup.string()
    .min(6, 'TodaysSale must be 6 character length')
    .required('Todays Sale is required!'),

  Authorizenet: Yup.string()
    .min(6, 'Authorizenet must be 6 character length')
    .required('Authorizenet is required!'),

  PaypalPro: Yup.string()
    .min(6, 'PaypalPro must be 6 character length')
    .required('PaypalPro is required!'),

  Stripe: Yup.string()
    .min(6, 'Stripe must be 6 character length')
    .required('Stripe is required!'),
});

const POSSettings = (props) => {
  const classes = useStyles();
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'POS Settings' }]}
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
                  POS Configuration
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
                        name: 'DisplayProducts',
                        label: 'Display Products',
                        value: values.DisplayProducts,
                        onBlur: handleBlur,
                        onChange: handleChange('DisplayProducts'),
                        helperText: touched.DisplayProducts && errors.DisplayProducts,
                        error: Boolean(errors.DisplayProducts && touched.DisplayProducts),
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
                        name: 'OnScreenKeyboard',
                        label: 'On-Screen Keyboard',
                        value: values.OnScreenKeyboard,
                        onBlur: handleBlur,
                        onChange: handleChange('OnScreenKeyboard'),
                        helperText: touched.OnScreenKeyboard && errors.OnScreenKeyboard,
                        error: Boolean(errors.OnScreenKeyboard && touched.OnScreenKeyboard),
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
                        name: 'Rounding',
                        label: 'Rounding',
                        value: values.Rounding,
                        onBlur: handleBlur,
                        onChange: handleChange('Rounding'),
                        helperText: touched.Rounding && errors.Rounding,
                        error: Boolean(errors.Rounding && touched.Rounding),
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
                        name: 'DisplayCustomer',
                        label: 'Display Customer Details ',
                        value: values.DisplayCustomer,
                        onBlur: handleBlur,
                        onChange: handleChange('DisplayCustomer'),
                        helperText: touched.DisplayCustomer && errors.DisplayCustomer,
                        error: Boolean(errors.DisplayCustomer && touched.DisplayCustomer),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'number',
                        name: 'POSPinCode',
                        label: 'POS Pin Code',
                        value: values.POSPinCode,
                        onBlur: handleBlur,
                        onChange: handleChange('POSPinCode'),
                        helperText: touched.POSPinCode && errors.POSPinCode,
                        error: Boolean(errors.POSPinCode && touched.POSPinCode),
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
                        name: 'DefaultCustomer',
                        label: 'Default Customer',
                        value: values.DefaultCustomer,
                        onBlur: handleBlur,
                        onChange: handleChange('DefaultCustomer'),
                        helperText: touched.DefaultCustomer && errors.DefaultCustomer,
                        error: Boolean(errors.DefaultCustomer && touched.DefaultCustomer),
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
                        name: 'ProductButtonColor ',
                        label: 'Product Button Color',
                        value: values.ProductButtonColor,
                        onBlur: handleBlur,
                        onChange: handleChange('ProductButtonColor'),
                        helperText: touched.ProductButtonColor && errors.ProductButtonColor,
                        error: Boolean(errors.ProductButtonColor && touched.ProductButtonColor),
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
                        name: 'ItemOrder ',
                        label: 'Item Order',
                        value: values.ItemOrder,
                        onBlur: handleBlur,
                        onChange: handleChange('ItemOrder'),
                        helperText: touched.ItemOrder && errors.ItemOrder,
                        error: Boolean(errors.ItemOrder && touched.ItemOrder),
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
                        name: 'DefaultCategory',
                        label: 'Default Category',
                        value: values.DefaultCategory,
                        onBlur: handleBlur,
                        onChange: handleChange('DefaultCategory'),
                        helperText: touched.DefaultCategory && errors.DefaultCategory,
                        error: Boolean(errors.DefaultCategory && touched.DefaultCategory),
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
                        name: 'DisplayTime',
                        label: 'Display Time',
                        value: values.DisplayTime,
                        onBlur: handleBlur,
                        onChange: handleChange('DisplayTime'),
                        helperText: touched.DisplayTime && errors.DisplayTime,
                        error: Boolean(errors.DisplayTime && touched.DisplayTime),
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
                        name: 'Tooltips',
                        label: 'Tool tips',
                        value: values.Tooltips,
                        onBlur: handleBlur,
                        onChange: handleChange('Tooltips'),
                        helperText: touched.Tooltips && errors.Tooltips,
                        error: Boolean(errors.Tooltips && touched.Tooltips),
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
                        name: 'AfterSalePage',
                        label: 'After Sale Page',
                        value: values.AfterSalePage,
                        onBlur: handleBlur,
                        onChange: handleChange('AfterSalePage'),
                        helperText: touched.AfterSalePage && errors.AfterSalePage,
                        error: Boolean(errors.AfterSalePage && touched.AfterSalePage),
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
                  POS Printing
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
                        name: 'Printing',
                        label: 'Printing',
                        value: values.Printing,
                        onBlur: handleBlur,
                        onChange: handleChange('Printing'),
                        helperText: touched.Printing && errors.Printing,
                        error: Boolean(errors.Printing && touched.Printing),
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
                  Custom fields for receipt
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: ' Custom1',
                        label: 'Custom Field 1 Title',
                        onBlur: handleBlur,
                        value: values.Custom1,
                        onChange: handleChange,
                        helperText: touched.Custom1 && errors.Custom1,
                        error: Boolean(errors.Custom1 && touched.Custom1),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'Custom2',
                        label: 'Custom Field 2 Title',
                        onBlur: handleBlur,
                        value: values.Custom2,
                        onChange: handleChange,
                        helperText: touched.Custom2 && errors.Custom2,
                        error: Boolean(errors.Custom2 && touched.Custom2),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'CustomValue',
                        label: 'Custom Field 1 Value',
                        onBlur: handleBlur,
                        value: values.CustomValue,
                        onChange: handleChange,
                        helperText: touched.CustomValue && errors.CustomValue,
                        error: Boolean(errors.CustomValue && touched.CustomValue),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'CustomValue1',
                        label: 'Custom Field 2 Value',
                        onBlur: handleBlur,
                        value: values.CustomValue1,
                        onChange: handleChange,
                        helperText: touched.CustomValue1 && errors.CustomValue1,
                        error: Boolean(errors.CustomValue1 && touched.CustomValue1),
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
                  Shortcuts
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'FocusAddItemInput',
                        label: 'Focus Add Item Input',
                        onBlur: handleBlur,
                        value: values.FocusAddItemInput,
                        onChange: handleChange,
                        helperText: touched.FocusAddItemInput && errors.FocusAddItemInput,
                        error: Boolean(errors.FocusAddItemInput && touched.FocusAddItemInput),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'AddCustomer',
                        label: 'Add Customer',
                        onBlur: handleBlur,
                        value: values.AddCustomer,
                        onChange: handleChange,
                        helperText: touched.AddCustomer && errors.AddCustomer,
                        error: Boolean(errors.AddCustomer && touched.AddCustomer),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'ToggleBrandsSlider',
                        label: 'Toggle Brands Slider',
                        onBlur: handleBlur,
                        value: values.ToggleBrandsSlider,
                        onChange: handleChange,
                        helperText: touched.ToggleBrandsSlider && errors.ToggleBrandsSlider,
                        error: Boolean(errors.ToggleBrandsSlider && touched.ToggleBrandsSlider),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'Printitemslist',
                        label: 'Print items list',
                        onBlur: handleBlur,
                        value: values.Printitemslist,
                        onChange: handleChange,
                        helperText: touched.Printitemslist && errors.Printitemslist,
                        error: Boolean(errors.Printitemslist && touched.Printitemslist),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'OpenSuspendedSales',
                        label: 'Open Suspended Sales',
                        onBlur: handleBlur,
                        value: values.OpenSuspendedSales,
                        onChange: handleChange,
                        helperText: touched.OpenSuspendedSales && errors.OpenSuspendedSales,
                        error: Boolean(errors.OpenSuspendedSales && touched.OpenSuspendedSales),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'AddManualItemtoSale',
                        label: 'Add Manual Item to Sale',
                        onBlur: handleBlur,
                        value: values.AddManualItemtoSale,
                        onChange: handleChange,
                        helperText: touched.AddManualItemtoSale && errors.AddManualItemtoSale,
                        error: Boolean(errors.AddManualItemtoSale && touched.AddManualItemtoSale),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'ToggleCategoriesSlider',
                        label: 'Toggle Categories Slider',
                        onBlur: handleBlur,
                        value: values.ToggleCategoriesSlider,
                        onChange: handleChange,
                        helperText: touched.ToggleCategoriesSlider && errors.ToggleCategoriesSlider,
                        error: Boolean(
                          errors.ToggleCategoriesSlider && touched.ToggleCategoriesSlider
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'CancelSale',
                        label: 'Cancel Sale',
                        onBlur: handleBlur,
                        value: values.CancelSale,
                        onChange: handleChange,
                        helperText: touched.CancelSale && errors.CancelSale,
                        error: Boolean(errors.CancelSale && touched.CancelSale),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'FinalizeSale',
                        label: 'Finalize Sale',
                        onBlur: handleBlur,
                        value: values.FinalizeSale,
                        onChange: handleChange,
                        helperText: touched.FinalizeSale && errors.FinalizeSale,
                        error: Boolean(errors.FinalizeSale && touched.FinalizeSale),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'CloseRegister',
                        label: 'Close Register',
                        onBlur: handleBlur,
                        value: values.CloseRegister,
                        onChange: handleChange,
                        helperText: touched.CloseRegister && errors.CloseRegister,
                        error: Boolean(errors.CloseRegister && touched.CloseRegister),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'CustomerInput',
                        label: 'Customer Input',
                        onBlur: handleBlur,
                        value: values.CustomerInput,
                        onChange: handleChange,
                        helperText: touched.CustomerInput && errors.CustomerInput,
                        error: Boolean(errors.CustomerInput && touched.CustomerInput),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'ToggleSubcategoriesSlider',
                        label: 'Toggle Subcategories Slider',
                        onBlur: handleBlur,
                        value: values.ToggleSubcategoriesSlider,
                        onChange: handleChange,
                        helperText:
                          touched.ToggleSubcategoriesSlider && errors.ToggleSubcategoriesSlider,
                        error: Boolean(
                          errors.ToggleSubcategoriesSlider && touched.ToggleSubcategoriesSlider
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'SuspendSale',
                        label: 'Suspend Sale',
                        onBlur: handleBlur,
                        value: values.SuspendSale,
                        onChange: handleChange,
                        helperText: touched.SuspendSale && errors.SuspendSale,
                        error: Boolean(errors.SuspendSale && touched.SuspendSale),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'TodaysSale',
                        label: "Today's Sale",
                        onBlur: handleBlur,
                        value: values.TodaysSale,
                        onChange: handleChange,
                        helperText: touched.TodaysSale && errors.TodaysSale,
                        error: Boolean(errors.TodaysSale && touched.TodaysSale),
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
                  Payment Gateways
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
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
                        name: 'Authorizenet ',
                        label: 'Authorize.net ',
                        value: values.Authorizenet,
                        onBlur: handleBlur,
                        onChange: handleChange('Authorizenet'),
                        helperText: touched.Authorizenet && errors.Authorizenet,
                        error: Boolean(errors.Authorizenet && touched.Authorizenet),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
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
                        name: 'PaypalPro',
                        label: 'Paypal Pro',
                        value: values.PaypalPro,
                        onBlur: handleBlur,
                        onChange: handleChange('PaypalPro'),
                        helperText: touched.PaypalPro && errors.PaypalPro,
                        error: Boolean(errors.PaypalPro && touched.PaypalPro),
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
                        name: 'Stripe',
                        label: 'Stripe',
                        value: values.Stripe,
                        onBlur: handleBlur,
                        onChange: handleChange('Stripe'),
                        helperText: touched.Stripe && errors.Stripe,
                        error: Boolean(errors.Stripe && touched.Stripe),
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

export default POSSettings;
