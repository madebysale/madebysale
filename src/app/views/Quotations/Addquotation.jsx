import React, { useState } from 'react';
import { Box, styled } from '@mui/system';
import { Button } from '@mui/material';
import AutocompleteComboNew from '../material-kit/auto-complete/AutocompleteComboNew';
import { Breadcrumb, SimpleCard } from 'app/components';
import Label from '../material-kit/tables/Label';
import { makeStyles } from '@material-ui/styles';
import Grid from '@mui/material/Grid';
import Date from '../material-kit/forms/Date';
import SimpleFormNew from '../material-kit/forms/SimpleFormNew';
import Searchtable from '../material-kit/checkbox/Searchtable';
import Fileattachment from '../material-kit/uploadimage/Fileattachment';
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
  Supplier: '',
  Warehouse: '',
  Status: '',
  // AttachDocument: '',
  // Note: ''
};

// form field validation schema
const validationSchema = Yup.object().shape({
  OrderDiscount: Yup.string()
    .min(6, 'OrderDiscount must be 6 character length')
    .required('OrderDiscount is required!'),
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

  Supplier: Yup.string()
    .min(6, 'Supplier must be 6 character length')
    .required('Supplier is required!'),

  Warehouse: Yup.string()
    .min(6, 'Warehouse must be 6 character length')
    .required('Warehouse is required!'),

  Status: Yup.string()
    .min(6, 'Status must be 6 character length')
    .required('Status is required!'),
});

const handleChange = (event) => {
  console.log(event);
};

const Addquotation = (props) => {
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Add Quotation' }]}
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
                      name: 'Supplier',
                      label: 'Supplier',
                      value: values.Supplier,
                      onBlur: handleBlur,
                      onChange: handleChange('Supplier'),
                      helperText: touched.Supplier && errors.Supplier,
                      error: Boolean(errors.Supplier && touched.Supplier),
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
                      name: ' Status ',
                      label: 'Status ',
                      value: values.Status,
                      onBlur: handleBlur,
                      onChange: handleChange('Status'),
                      helperText: touched.Status && errors.Status,
                      error: Boolean(errors.Status && touched.Status),
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
                <Grid item xs={12} md={6}>
                  <Fileattachment
                    props={{
                      label: 'Attach Document',
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Label style={{ margin: '0px 0px 0px 0px' }}> Order Items *</Label>
                  <Searchtable />
                </Grid>
                <Grid item xs={12}>
                  <Label style={{ margin: '0px 0px 5px' }}>Note</Label>
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
                <Grid item xs={12}>
                  {/* <DDbutton /> */}

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
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default Addquotation;
