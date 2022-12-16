import React, { useState } from 'react';
import { Box, styled } from '@mui/system';
import AutocompleteComboNew from '../material-kit/auto-complete/AutocompleteComboNew';
import { Breadcrumb, SimpleCard } from 'app/components';
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
}));

const handleChange = (event) => {
  console.log(event);
};
// inital login credentials
const initialValues = {
  Name: '',
  Country: '',
  PostalCode: '',
  Company: '',
  Email: '',
  Phone: '',
  Address: '',
  City: '',
  State: '',
  GST: '',
  VAT: '',
  Supplier1: '',
  Supplier2: '',
  Supplier3: '',
  Supplier4: '',
  Supplier5: '',
  Supplier6: '',
  // AttachDocument: '',
  // Note: ''
};

// form field validation schema
const validationSchema = Yup.object().shape({
  Name: Yup.string()
    .min(6, 'Name must be 6 character length')
    .required('Name is required!'),
  PostalCode: Yup.string()
    .min(6, 'PostalCode must be 6 character length')
    .required('PostalCode is required!'),

  Address: Yup.string()
    .min(6, 'Address must be 6 character length')
    .required('Address is required!'),

  GST: Yup.number()
    .min(6, 'GST must be 6 character length')
    .required('GST is required!'),

  VAT: Yup.number()
    .min(6, 'VAT must be 6 character length')
    .required('VAT is required!'),

  Email: Yup.string()
    .email()
    .required('Email is required!'),
  Phone: Yup.number()
    .min(6, 'Phone must be 6 character length')
    .required('Phone is required!'),
  Company: Yup.string()
    .min(6, 'Company must be 6 character length')
    .required('Company is required!'),

  Supplier1: Yup.string()
    .min(6, 'Supplier1 must be 6 character length')
    .required('Supplier1 is required!'),
  Supplier2: Yup.string()
    .min(6, 'Supplier2 must be 6 character length')
    .required('Supplier2 is required!'),

  Supplier3: Yup.string()
    .min(6, 'Supplier3 must be 6 character length')
    .required('Supplier3 is required!'),

  Supplier4: Yup.string()
    .min(6, 'Supplier4 must be 6 character length')
    .required('Supplier4 is required!'),

  Supplier5: Yup.string()
    .min(6, 'Supplier5 must be 6 character length')
    .required('Supplier5 is required!'),

  Supplier6: Yup.string()
    .min(6, 'Supplier6 must be 6 character length')
    .required('Supplier6 is required!'),

  State: Yup.string().required('State is required!'),

  City: Yup.string().required('City is required!'),

  Country: Yup.string().required('Country is required!'),
});

const AddSupplier = (props) => {
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Add Biller' }]}
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
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Name',
                      label: 'Name',
                      onBlur: handleBlur,
                      value: values.Name,
                      onChange: handleChange,
                      helperText: touched.Name && errors.Name,
                      error: Boolean(errors.Name && touched.Name),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Company',
                      label: 'Company',
                      onBlur: handleBlur,
                      value: values.Company,
                      onChange: handleChange,
                      helperText: touched.Company && errors.Company,
                      error: Boolean(errors.Company && touched.Company),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Email',
                      label: 'Email Address ',
                      onBlur: handleBlur,
                      value: values.Email,
                      onChange: handleChange,
                      helperText: touched.Email && errors.Email,
                      error: Boolean(errors.Email && touched.Email),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'VAT',
                      label: 'VAT Number',
                      onBlur: handleBlur,
                      value: values.VAT,
                      onChange: handleChange,
                      helperText: touched.VAT && errors.VAT,
                      error: Boolean(errors.VAT && touched.VAT),
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Address',
                      label: 'Address',
                      onBlur: handleBlur,
                      value: values.Address,
                      onChange: handleChange,
                      helperText: touched.Address && errors.Address,
                      error: Boolean(errors.Address && touched.Address),
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'PostalCode',
                      label: 'Postal Code',
                      onBlur: handleBlur,
                      value: values.PostalCode,
                      onChange: handleChange,
                      helperText: touched.PostalCode && errors.PostalCode,
                      error: Boolean(errors.PostalCode && touched.PostalCode),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'number',
                      name: 'Phone',
                      label: 'Phone',
                      onBlur: handleBlur,
                      value: values.Phone,
                      onChange: handleChange,
                      helperText: touched.Phone && errors.Phone,
                      error: Boolean(errors.Phone && touched.Phone),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'GST',
                      label: 'GST Number',
                      onBlur: handleBlur,
                      value: values.GST,
                      onChange: handleChange,
                      helperText: touched.GST && errors.GST,
                      error: Boolean(errors.GST && touched.GST),
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
                      name: 'City',
                      label: 'City',
                      value: values.City,
                      onBlur: handleBlur,
                      onChange: handleChange('City'),
                      helperText: touched.City && errors.City,
                      error: Boolean(errors.City && touched.City),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Country',
                      label: 'Country',
                      onBlur: handleBlur,
                      value: values.Country,
                      onChange: handleChange,
                      helperText: touched.Country && errors.Country,
                      error: Boolean(errors.Country && touched.Country),
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
                      name: 'State',
                      label: 'State',
                      value: values.State,
                      onBlur: handleBlur,
                      onChange: handleChange('State'),
                      helperText: touched.State && errors.State,
                      error: Boolean(errors.State && touched.State),
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Supplier1',
                      label: 'Supplier Custom Field 1',
                      onBlur: handleBlur,
                      value: values.Supplier1,
                      onChange: handleChange,
                      helperText: touched.Supplier1 && errors.Supplier1,
                      error: Boolean(errors.Supplier1 && touched.Supplier1),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Supplier2',
                      label: 'Supplier Custom Field 2',
                      onBlur: handleBlur,
                      value: values.Supplier2,
                      onChange: handleChange,
                      helperText: touched.Supplier2 && errors.Supplier2,
                      error: Boolean(errors.Supplier2 && touched.Supplier2),
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Supplier3',
                      label: 'Supplier Custom Field 3',
                      onBlur: handleBlur,
                      value: values.Supplier3,
                      onChange: handleChange,
                      helperText: touched.Supplier3 && errors.Supplier3,
                      error: Boolean(errors.Supplier3 && touched.Supplier3),
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Supplier4',
                      label: 'Supplier Custom Field 4',
                      onBlur: handleBlur,
                      value: values.Supplier4,
                      onChange: handleChange,
                      helperText: touched.Supplier4 && errors.Supplier4,
                      error: Boolean(errors.Supplier4 && touched.Supplier4),
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Supplier5',
                      label: 'Supplier Custom Field 5',
                      onBlur: handleBlur,
                      value: values.Supplier5,
                      onChange: handleChange,
                      helperText: touched.Supplier5 && errors.Supplier5,
                      error: Boolean(errors.Supplier5 && touched.Supplier5),
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Supplier6',
                      label: 'Supplier Custom Field 6',
                      onBlur: handleBlur,
                      value: values.Biller6,
                      onChange: handleChange,
                      helperText: touched.Supplier6 && errors.Supplier6,
                      error: Boolean(errors.Supplier6 && touched.Supplier6),
                    }}
                  />
                </Grid>
              </Grid>
              <LoadingButton
                variant="contained"
                type="submit"
                loading={loading}
                className={classes.btn2}
              >
                Add Biller
              </LoadingButton>
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default AddSupplier;
