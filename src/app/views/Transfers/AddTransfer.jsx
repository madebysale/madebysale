import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Box, styled } from '@mui/system';
import AutocompleteComboNew from '../material-kit/auto-complete/AutocompleteComboNew';
import { Breadcrumb, SimpleCard } from 'app/components';
import Label from '../material-kit/tables/Label';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Date from '../material-kit/forms/Date';
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
  fromwarehouse: '',
  Shipping: '',
  Biller: '',
  Reference: '',
  Customer: '',
  Supplier: '',
  toWarehouse: '',
  Status: '',
  // AttachDocument: '',
  // Note: ''
};

// form field validation schema
const validationSchema = Yup.object().shape({
  fromwarehouse: Yup.string()
    .min(6, 'fromwarehouse must be 6 character length')
    .required('fromwarehouse is required!'),
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

  toWarehouse: Yup.string()
    .min(6, 'toWarehouse must be 6 character length')
    .required('toWarehouse is required!'),

  Status: Yup.string()
    .min(6, 'Status must be 6 character length')
    .required('Status is required!'),
});
const handleChange = (event) => {
  console.log(event);
};

const AddTransfer = (props) => {
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Add Transfer' }]}
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
                      name: ' toWarehouse',
                      label: ' To warehouse',
                      value: values.toWarehouse,
                      onBlur: handleBlur,
                      onChange: handleChange('toWarehouse'),
                      helperText: touched.toWarehouse && errors.toWarehouse,
                      error: Boolean(errors.toWarehouse && touched.toWarehouse),
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
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
                <Grid item xs={12} md={6}>
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
                      name: 'Status ',
                      label: ' Status ',
                      value: values.Status,
                      onBlur: handleBlur,
                      onChange: handleChange('Status'),
                      helperText: touched.Status && errors.Status,
                      error: Boolean(errors.Status && touched.Status),
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
                      name: 'fromwarehouse',
                      label: 'from warehouse',
                      value: values.fromwarehouse,
                      onBlur: handleBlur,
                      onChange: handleChange('fromwarehouse'),
                      helperText: touched.fromwarehouse && errors.fromwarehouse,
                      error: Boolean(errors.fromwarehouse && touched.fromwarehouse),
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
                  <Label> Order Items *</Label>
                  <Searchtable />
                </Grid>
                <Grid item xs={12}>
                  <Label> Note</Label>
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
                {/* <DDbutton /> */}
              </Typography>
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default AddTransfer;
