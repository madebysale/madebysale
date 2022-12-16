import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import SimpleFormNew from '../material-kit/forms/SimpleFormNew';
import { makeStyles } from '@material-ui/styles';
import AutocompleteComboNew from '../material-kit/auto-complete/AutocompleteComboNew';
import AutocompleteComboWithIdValue from '../material-kit/auto-complete/AutocompleteComboWithIdValue';
import Showhideformcheckbox from '../material-kit/checkbox/Showhideformcheckbox';
import SearchwithAadtable from '../material-kit/checkbox/SearchwithAadtable';
import SimpleCheckbox from '../material-kit/checkbox/SimpleCheckbox';
import FormGroupCheckbox from '../material-kit/checkbox/FormGroupCheckbox';
import Singleimage from '../material-kit/uploadimage/Singleimage';
import Multipleimage from '../material-kit/uploadimage/Multipleimage';
import Addfeild from '../material-kit/forms/Addfeild';
import { Grid, styled } from '@mui/material';
import Label from '../material-kit/tables/Label';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import useAuth from 'app/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios.js'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import useBrand from 'app/hooks/useBrand';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const useStyles = makeStyles((theme) => ({
  text1: {
    // bottom: "10px",
    margin: '0px 0px 8px 0px',
  },
  btn2: {
    // marginTop: '14px',
    padding: '7px 23px',
    border: 'none',
    color: '#fff',
    background: '#303f9f',
  },
}));


// inital login credentials
const initialValues = {
  ProductName: '',
  SecondaryName: '',
  BarcodeSymbology: '',
  ProductCost: '',
  ProductUnit: '',
  Category: '',
  DefaultSaleUnit: '',
  ProductTax: '',
  ProductCode: '',
  ProductType: '',
  Slug: '',
  Weight: '',
  ProductPrice: '',
  HSNCode: '',
  SubCategory: '',
  DefaultPurchaseUnit: '',
  TaxMethod: '',
  AlertQuantity: '',
  Brand: '',
  // AttachDocument: '',
  // Note: ''
};

// form field validation schema
const validationSchema = Yup.object().shape({
  ProductName: Yup.string()
    .min(6, 'ProductName must be 6 character length')
    .required('Product Name is required!'),

  SecondaryName: Yup.string()
    .min(6, 'SecondaryName must be 6 character length')
    .required('Secondary Name is required!'),

  BarcodeSymbology: Yup.string()
    .min(6, 'BarcodeSymbology must be 6 character length')
    .required('Barcode is required!'),

  ProductCost: Yup.string()
    .min(6, 'ProductCost must be 6 character length')
    .required('Product Cost is required!'),

  ProductUnit: Yup.string()
    .min(6, 'ProductUnit must be 6 character length')
    .required('Product Unit is required!'),

  Category: Yup.string()
    .min(6, 'Category must be 6 character length')
    .required('Category is required!'),

  DefaultSaleUnit: Yup.string()
    .min(6, 'DefaultSaleUnit must be 6 character length')
    .required('Default Sale Unit  is required!'),

  ProductTax: Yup.string()
    .min(6, 'ProductTax must be 6 character length')
    .required('Product Tax  is required!'),

  ProductCode: Yup.string()
    .min(6, 'ProductCode must be 6 character length')
    .required('Product Code is required!'),

  ProductType: Yup.string()
    .min(6, 'ProductType must be 6 character length')
    .required('Product Type is required!'),

  Slug: Yup.string()
    .min(6, 'Slug must be 6 character length')
    .required('Slug is required!'),

  Weight: Yup.string()
    .min(6, 'Weight must be 6 character length')
    .required('Weight is required!'),

  ProductPrice: Yup.string()
    .min(6, 'ProductPrice must be 6 character length')
    .required('Product Price is required!'),

  HSNCode: Yup.string()
    .min(6, 'HSNCode must be 6 character length')
    .required('HSN Code  is required!'),

  SubCategory: Yup.string()
    .min(6, 'SubCategory must be 6 character length')
    .required('Sub Category  is required!'),

  DefaultPurchaseUnit: Yup.string()
    .min(6, 'DefaultPurchaseUnit must be 6 character length')
    .required('Default Purchase Unit  is required!'),

  TaxMethod: Yup.string()
    .min(6, 'TaxMethod must be 6 character length')
    .required('Tax Method  is required!'),

  AlertQuantity: Yup.string()
    .min(6, 'AlertQuantity must be 6 character length')
    .required('Alert Quantity is required!'),

  Brand: Yup.string()
    .min(6, 'Brand must be 6 character length')
    .required('Brand is required!'),
});
const AddProduct = () => {
  const { getBrands, brands } = useBrand();


  const classes = useStyles();
  const handleChange = (event) => {
    console.log(event);
  };
  const handleChange1 = (event) => { };
  const handleChange2 = (event) => { };
  const [value, setValue] = useState('Controlled');
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState('');
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  useEffect(() => {
    getBrands()
    // const response = axios.post('http://localhost:3000/api/admin/listbrand')
    // console.log(response)
    // axios.post('http://localhost:3000/api/admin/listbrand')
    //   .then((response) => {
    //     const outlook = response
    //     console.log(outlook.data.data.ListstockbrandsResponce)
    //     // if((outlook.data.status===400) || (outlook.data.status===401) || (outlook.data.status===403)){
    //     //     navigate('/login', { replace: true });
    //     //     localStorage.setItem("token", "");
    //     //     localStorage.setItem("userid", '0');
    //     //     localStorage.setItem("email", '');
    //     //     toast.warning(outlook.data.message)
    //     // }
    //     // else{
    //     // setPremiumContent(outlook.data.data.rows);
    //     // }
    //   })
  }, [])
  console.log(brands)
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Add Product' }]}
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
              <Grid container spacing={2}>
                <Grid item lg={6} xs={12}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'ProductName',
                      label: 'Product Name',
                      onBlur: handleBlur,
                      value: values.ProductName,
                      onChange: handleChange,
                      helperText: touched.ProductName && errors.ProductName,
                      error: Boolean(errors.ProductName && touched.ProductName),
                    }}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'SecondaryName',
                      label: 'Secondary Name',
                      onBlur: handleBlur,
                      value: values.SecondaryName,
                      onChange: handleChange,
                      helperText: touched.SecondaryName && errors.SecondaryName,
                      error: Boolean(errors.SecondaryName && touched.SecondaryName),
                    }}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <AutocompleteComboWithIdValue
                    props={{
                      names: [
                        { id: 'Code25', value: 'Code25' },
                        { id: 'Code39', value: 'Code39' },
                        { id: 'Code128', value: 'Code128' },
                        { id: 'EAN8', value: 'EAN8' },
                        { id: 'EAN13', value: 'EAN13' },
                        { id: 'UPC-A', value: 'UPC-A' },
                        { id: 'UPC-E', value: 'UPC-E' }
                      ],
                      name: 'BarcodeSymbology',
                      label: 'Barcode Symbology',
                      value: values.BarcodeSymbology,
                      onBlur: handleBlur,
                      onChange: handleChange('BarcodeSymbology'),
                      helperText: touched.BarcodeSymbology && errors.BarcodeSymbology,
                      error: Boolean(errors.BarcodeSymbology && touched.BarcodeSymbology),
                    }}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'ProductCost',
                      label: 'Product Cost',
                      onBlur: handleBlur,
                      value: values.ProductCost,
                      onChange: handleChange,
                      helperText: touched.ProductCost && errors.ProductCost,
                      error: Boolean(errors.ProductCost && touched.ProductCost),
                    }}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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
                      name: 'ProductUnit',
                      label: 'Product Unit',
                      value: values.ProductUnit,
                      onBlur: handleBlur,
                      onChange: handleChange('ProductUnit'),
                      helperText: touched.ProductUnit && errors.ProductUnit,
                      error: Boolean(errors.ProductUnit && touched.ProductUnit),
                    }}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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
                      name: 'Category',
                      label: 'Category',
                      value: values.Category,
                      onBlur: handleBlur,
                      onChange: handleChange('Category'),
                      helperText: touched.Category && errors.Category,
                      error: Boolean(errors.Category && touched.Category),
                    }}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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
                      name: 'DefaultSaleUnit',
                      label: 'Default Sale Unit',
                      value: values.DefaultSaleUnit,
                      onBlur: handleBlur,
                      onChange: handleChange('DefaultSaleUnit'),
                      helperText: touched.DefaultSaleUnit && errors.DefaultSaleUnit,
                      error: Boolean(errors.DefaultSaleUnit && touched.DefaultSaleUnit),
                    }}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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
                <Grid item lg={6} xs={12}>
                  <TextField
                    fullWidth
                    type="text"
                    name="Product Code"
                    label="Product Code"
                    variant="outlined"
                    onBlur={handleBlur}
                    value={values.ProductCode}
                    className={classes.main2}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment>
                          <ShuffleIcon />
                        </InputAdornment>
                      ),
                    }}
                    helperText={touched.ProductCode && errors.ProductCode}
                    error={Boolean(errors.ProductCode && touched.ProductCode)}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <AutocompleteComboNew
                    props={{
                      names: [
                        'Standard',
                        'Digital',
                        'Combo',
                        'Service'
                      ],
                      name: 'ProductType',
                      label: 'Product Type',
                      value: values.ProductType,
                      onBlur: handleBlur,
                      onChange: handleChange('ProductType'),
                      helperText: touched.ProductType && errors.ProductType,
                      error: Boolean(errors.ProductType && touched.ProductType),
                    }}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Slug',
                      label: 'Slug',
                      onBlur: handleBlur,
                      value: values.Slug,
                      onChange: handleChange,
                      helperText: touched.Slug && errors.Slug,
                      error: Boolean(errors.Slug && touched.Slug),
                    }}
                  />
                </Grid>

                <Grid item lg={6} xs={12}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Weight',
                      label: 'Weight',
                      onBlur: handleBlur,
                      value: values.Weight,
                      onChange: handleChange,
                      helperText: touched.Weight && errors.Weight,
                      error: Boolean(errors.Weight && touched.Weight),
                    }}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'ProductPrice',
                      label: 'Product Price',
                      onBlur: handleBlur,
                      value: values.ProductPrice,
                      onChange: handleChange,
                      helperText: touched.ProductPrice && errors.ProductPrice,
                      error: Boolean(errors.ProductPrice && touched.ProductPrice),
                    }}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'HSNCode',
                      label: 'HSN Code',
                      onBlur: handleBlur,
                      value: values.HSNCode,
                      onChange: handleChange,
                      helperText: touched.HSNCode && errors.HSNCode,
                      error: Boolean(errors.HSNCode && touched.HSNCode),
                    }}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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
                      name: 'SubCategory',
                      label: 'Sub Category',
                      value: values.SubCategory,
                      onBlur: handleBlur,
                      onChange: handleChange('SubCategory'),
                      helperText: touched.SubCategory && errors.SubCategory,
                      error: Boolean(errors.SubCategory && touched.SubCategory),
                    }}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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
                      name: 'DefaultPurchaseUnit',
                      label: 'Default Purchase Unit',
                      value: values.DefaultPurchaseUnit,
                      onBlur: handleBlur,
                      onChange: handleChange('DefaultPurchaseUnit'),
                      helperText: touched.DefaultPurchaseUnit && errors.DefaultPurchaseUnit,
                      error: Boolean(errors.DefaultPurchaseUnit && touched.DefaultPurchaseUnit),
                    }}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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
                      name: 'TaxMethod',
                      label: 'Tax Method',
                      value: values.TaxMethod,
                      onBlur: handleBlur,
                      onChange: handleChange('TaxMethod'),
                      helperText: touched.TaxMethod && errors.TaxMethod,
                      error: Boolean(errors.TaxMethod && touched.TaxMethod),
                    }}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SimpleCheckbox />
                </Grid>
                <Grid item lg={12} xs={12}>
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
                      name: 'Brand',
                      label: 'Brand',
                      value: values.Brand,
                      onBlur: handleBlur,
                      onChange: handleChange('Brand'),
                      helperText: touched.Brand && errors.Brand,
                      error: Boolean(errors.Brand && touched.Brand),
                    }}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <Singleimage />
                </Grid>

                <Grid item lg={6} xs={12}>
                  <Multipleimage />
                </Grid>
                <Grid item lg={12} xs={12}>
                  <FormGroupCheckbox />
                </Grid>
                <Grid item lg={6} xs={12}>
                  {' '}
                  <SearchwithAadtable />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <Showhideformcheckbox />
                </Grid>

                <Grid item lg={12} xs={12}>
                  <Addfeild />
                </Grid>
                {/* <Grid item lg={12} xs={12}>
            <FormGroupCheckbox />
          </Grid> */}
                <Grid item lg={6} xs={12}>
                  <Label className={classes.text1}>Product Details</Label>
                  <CKEditor
                    editor={ClassicEditor}
                    data={note}
                    onReady={(editor) => {
                      console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setNote(data);
                      console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                      handleBlur();
                      console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                      console.log('Focus.', editor);
                    }}
                  />
                  <div className="content-invalid-feedback">
                    {note === '' ? <span style={{ color: 'red' }}>Required</span> : null}
                  </div>
                </Grid>
                <Grid item lg={6} xs={12}>
                  <Label className={classes.text1}>Product details for invoice</Label>
                  <CKEditor
                    editor={ClassicEditor}
                    data={note}
                    onReady={(editor) => {
                      console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setNote(data);
                      console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                      handleBlur();
                      console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                      console.log('Focus.', editor);
                    }}
                  />
                  <div className="content-invalid-feedback">
                    {note === '' ? <span style={{ color: 'red' }}>Required</span> : null}
                  </div>
                </Grid>
                <Grid item lg={12}>
                  <LoadingButton
                    variant="contained"
                    type="submit"
                    loading={loading}
                    className={classes.btn2}
                  >
                    Add Product
                  </LoadingButton>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default AddProduct;
