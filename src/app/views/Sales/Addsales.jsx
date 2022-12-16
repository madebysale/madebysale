import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Box, styled } from '@mui/system';
import AutocompleteComboNew from '../material-kit/auto-complete/AutocompleteComboNew';
import { Breadcrumb, SimpleCard } from 'app/components';
import Label from '../material-kit/tables/Label';
import Typography from '@mui/material/Typography';
import DDbutton from '../material-kit/buttons/DDbutton';
import Grid from '@mui/material/Grid';
import Date from '../material-kit/forms/Date';
import Appeditor from '../material-kit/ck/Appeditor';
import SimpleFormNew from '../material-kit/forms/SimpleFormNew';
import Searchtable from '../material-kit/checkbox/Searchtable';
import Fileattachment from '../material-kit/uploadimage/Fileattachment';
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
    padding: '7px 23px',
    border: 'none',
    fontSize: '15px',
    color: '#fff',
    background: '#303f9f',
  },
  btn3: {
    padding: '7px 23px',
    border: 'none',
    fontSize: '15px',
    marginLeft: '10px',
    color: '#fff',
    background: '#7b1fa2',
  },
}));

// inital login credentials
const initialValues = {
  OrderDiscount: '',
  Shipping: '',
  Biller: '',
  Reference: '',
  Customer: '',
  Warehouse: '',
  SaleStatus: '',
  Status: '',
  PaymentTerm: '',
  PaymentStatus: '',
  // AttachDocument: '',
  // Note: ''
};

// form field validation schema
const validationSchema = Yup.object().shape({
  OrderDiscount: Yup.string()
    .min(6, 'OrderDiscount must be 6 character length')
    .required('Order Discount is required!'),
  Shipping: Yup.string()
    .min(6, 'Shipping must be 6 character length')
    .required('Shipping is required!'),
  Biller: Yup.string()
    .min(6, 'Biller must be 6 character length')
    .required('Biller is required!'),
  Reference: Yup.string()
    .min(6, 'Reference must be 6 character length')
    .required('Reference is required!'),

  Customer: Yup.string()
    .min(6, 'Customer must be 6 character length')
    .required('Customer is required!'),

  Warehouse: Yup.string()
    .min(6, 'Warehouse must be 6 character length')
    .required('Warehouse is required!'),

  SaleStatus: Yup.string()
    .min(6, 'SaleStatus must be 6 character length')
    .required('SaleStatus is required!'),

  PaymentTerm: Yup.string()
    .min(6, 'PaymentTerm must be 6 character length')
    .required('Payment Term is required!'),

  PaymentStatus: Yup.string()
    .min(6, 'PaymentStatus must be 6 character length')
    .required('Payment Statusis required!'),

  Status: Yup.string()
    .min(6, 'Status must be 6 character length')
    .required('Status is required!'),
});
const handleChange = (event) => {
  console.log(event);
};

const Addsales = (props) => {
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Add Sales' }]}
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
                <Grid item xs={12} md={4}>
                  <Date />
                </Grid>
                <Grid item xs={12} md={4}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'OrderDiscount',
                      label: 'Order Discount',
                      onBlur: handleBlur,
                      value: values.OrderDiscount,
                      onChange: handleChange,
                      helperText: touched.OrderDiscount && errors.OrderDiscount,
                      error: Boolean(errors.OrderDiscount && touched.OrderDiscount),
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
                      name: 'Warehouse',
                      label: 'Warehouse',
                      value: values.Warehouse,
                      onBlur: handleBlur,
                      onChange: handleChange('Warehouse'),
                      helperText: touched.Warehouse && errors.Warehouse,
                      error: Boolean(errors.Warehouse && touched.Warehouse),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Reference',
                      label: 'Reference No',
                      onBlur: handleBlur,
                      value: values.Reference,
                      onChange: handleChange,
                      helperText: touched.Reference && errors.Reference,
                      error: Boolean(errors.Reference && touched.Reference),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Shipping',
                      label: 'Shipping',
                      onBlur: handleBlur,
                      value: values.Shipping,
                      onChange: handleChange,
                      helperText: touched.Shipping && errors.Shipping,
                      error: Boolean(errors.Shipping && touched.Shipping),
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
                      name: 'SaleStatus ',
                      label: 'Sale Status ',
                      value: values.SaleStatus,
                      onBlur: handleBlur,
                      onChange: handleChange('SaleStatus'),
                      helperText: touched.SaleStatus && errors.SaleStatus,
                      error: Boolean(errors.SaleStatus && touched.SaleStatus),
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
                      name: 'Biller',
                      label: 'Biller',
                      value: values.Biller,
                      onBlur: handleBlur,
                      onChange: handleChange('Biller'),
                      helperText: touched.Biller && errors.Biller,
                      error: Boolean(errors.Biller && touched.Biller),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'PaymentTerm',
                      label: 'Payment Term',
                      onBlur: handleBlur,
                      value: values.PaymentTerm,
                      onChange: handleChange,
                      helperText: touched.PaymentTerm && errors.PaymentTerm,
                      error: Boolean(errors.PaymentTerm && touched.PaymentTerm),
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
                      name: 'PaymentStatus',
                      label: 'Payment Status',
                      value: values.PaymentStatus,
                      onBlur: handleBlur,
                      onChange: handleChange('PaymentStatus'),
                      helperText: touched.PaymentStatus && errors.PaymentStatus,
                      error: Boolean(errors.PaymentStatus && touched.PaymentStatus),
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
                      name: 'Customer',
                      label: 'Customer',
                      value: values.Customer,
                      onBlur: handleBlur,
                      onChange: handleChange('Customer'),
                      helperText: touched.Customer && errors.Customer,
                      error: Boolean(errors.Customer && touched.Customer),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Fileattachment
                    props={{
                      label: 'Attach Document',
                    }}
                  />
                </Grid>
              </Grid>

              {/* <Label style={{margin:"10px 0px"}}>Sale Note</Label> */}
              <Grid item xs={12}>
                <Label style={{ margin: '5px 0px 0px 0px' }}> Order Items *</Label>
                <Searchtable />
              </Grid>
              <Grid item xs={12} md={6}>
                <Label style={{ margin: '10px 0px' }}>Sale Note</Label>
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
              <Grid item xs={12} md={6}>
                <Label style={{ margin: '10px 0px' }}>Staff Note</Label>
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
              <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
                <LoadingButton
                  variant="contained"
                  type="submit"
                  loading={loading}
                  className={classes.btn2}
                >
                  Submit
                </LoadingButton>
                <Button variant="contained" className={classes.btn3}>
                  Reset
                </Button>
              </Typography>
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default Addsales;
