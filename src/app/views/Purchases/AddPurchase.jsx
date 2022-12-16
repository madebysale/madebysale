import React, { useState } from 'react';
import { Box, styled } from '@mui/system';
import { Checkbox } from '@mui/material';
import AutocompleteComboNew from '../material-kit/auto-complete/AutocompleteComboNew';
import SimpleFormNew from '../material-kit/forms/SimpleFormNew';
import { Breadcrumb, SimpleCard } from 'app/components';
import Label from '../material-kit/tables/Label';
import { makeStyles } from '@material-ui/styles';
import Grid from '@mui/material/Grid';
import Date from '../material-kit/forms/Date';
import SearchtableNew from '../material-kit/checkbox/SearchtableNew';
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
}));
// inital login credentials
const initialValues = {
  Discount: '',
  Shipping: '',
  Payment: '',
  Reference: '',
  OrderTax: '',
  Supplier: '',
  Warehouse: '',
  Status: '',
  // AttachDocument: '',
  // Note: ''
};

// form field validation schema
const validationSchema = Yup.object().shape({
  Discount: Yup.string()
    .min(6, 'Discount must be 6 character length')
    .required('Discount is required!'),
  Shipping: Yup.string()
    .min(6, 'Shipping must be 6 character length')
    .required('Shipping is required!'),
  Payment: Yup.string()
    .min(6, 'Payment must be 6 character length')
    .required('Payment is required!'),
  Reference: Yup.string()
    .min(6, 'Reference must be 6 character length')
    .required('Reference is required!'),

  OrderTax: Yup.string()
    .min(6, 'OrderTax must be 6 character length')
    .required('OrderTax is required!'),

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
const AddPurchase = (props) => {
  const [show, toggleShow] = useState(true);
  const [hide, togglehide] = useState(false);
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Add Purchase' }]}
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
                <Grid item xs={12} md={6}>
                  <Date />
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
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Reference',
                      label: 'Reference',
                      onBlur: handleBlur,
                      value: values.Reference,
                      onChange: handleChange,
                      helperText: touched.Reference && errors.Reference,
                      error: Boolean(errors.Reference && touched.Reference),
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
                <Grid item xs={12} md={6}>
                  <Fileattachment
                    props={{
                      label: 'Attach Document',
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Label style={{ margin: '0px 0px 0px 0px' }}> Order Items *</Label>
                  <SearchtableNew />

                  <div style={{ margin: '0px 0px 0px 0px' }}>
                    <Checkbox onClick={() => toggleShow(!show)} value="checkedA" defaultChecked />
                    <Label>More Options</Label>
                    <div>
                      {show && (
                        <div>
                          <Grid container spacing={2}>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
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
                                  label: 'OrderTax',
                                  value: values.OrderTax,
                                  onBlur: handleBlur,
                                  onChange: handleChange('OrderTax'),
                                  helperText: touched.OrderTax && errors.OrderTax,
                                  error: Boolean(errors.OrderTax && touched.OrderTax),
                                }}
                              />
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                              <SimpleFormNew
                                props={{
                                  type: 'text',
                                  name: 'Payment',
                                  label: 'Payment',
                                  onBlur: handleBlur,
                                  value: values.Payment,
                                  onChange: handleChange,
                                  helperText: touched.Payment && errors.Payment,
                                  error: Boolean(errors.Payment && touched.Payment),
                                }}
                              />
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
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
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                              <SimpleFormNew
                                props={{
                                  type: 'text',
                                  name: 'Discount',
                                  label: 'Discount',
                                  onBlur: handleBlur,
                                  value: values.Discount,
                                  onChange: handleChange,
                                  helperText: touched.Discount && errors.Discount,
                                  error: Boolean(errors.Discount && touched.Discount),
                                }}
                              />
                            </Grid>
                          </Grid>
                        </div>
                      )}
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Label>Note</Label>
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
                  <LoadingButton
                    variant="contained"
                    type="submit"
                    loading={loading}
                    className={classes.btn2}
                  >
                    Add Purchase
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

export default AddPurchase;
