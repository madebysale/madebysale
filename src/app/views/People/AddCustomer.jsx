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
  CustomerGroup: '',
  GST: '',
  VAT: '',
  PriceGroup: '',
  Customer1: '',
  Customer2: '',
  Customer3: '',
  Customer4: '',
  Customer5: '',
  Customer6: '',
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

  PriceGroup: Yup.string()
    .min(6, 'PriceGroup must be 6 character length')
    .required('PriceGroup is required!'),

  CustomerGroup: Yup.string()
    .min(6, 'CustomerGroup must be 6 character length')
    .required('Customer Group is required!'),

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

  Customer1: Yup.string()
    .min(6, 'Customer1 must be 6 character length')
    .required('Customer1 is required!'),
  Customer2: Yup.string()
    .min(6, 'Customer2 must be 6 character length')
    .required('Customer2 is required!'),

  Customer3: Yup.string()
    .min(6, 'Customer3 must be 6 character length')
    .required('Customer3 is required!'),

  Customer4: Yup.string()
    .min(6, 'Customer4 must be 6 character length')
    .required('Customer4 is required!'),

  Customer5: Yup.string()
    .min(6, 'Customer5 must be 6 character length')
    .required('Customer5 is required!'),

  Customer6: Yup.string()
    .min(6, 'Customer6 must be 6 character length')
    .required('Customer6 is required!'),

  State: Yup.string().required('State is required!'),

  City: Yup.string().required('City is required!'),

  Country: Yup.string().required('Country is required!'),
});

const AddCustomer = (props) => {
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
                      name: 'PriceGroup',
                      label: 'Price Group',
                      value: values.PriceGroup,
                      onBlur: handleBlur,
                      onChange: handleChange('PriceGroup'),
                      helperText: touched.PriceGroup && errors.PriceGroup,
                      error: Boolean(errors.PriceGroup && touched.PriceGroup),
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
                      name: 'Customer1',
                      label: 'Customer Custom Field 1',
                      onBlur: handleBlur,
                      value: values.Customer1,
                      onChange: handleChange,
                      helperText: touched.Customer1 && errors.Customer1,
                      error: Boolean(errors.Customer1 && touched.Customer1),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Customer2',
                      label: 'Customer Custom Field 2',
                      onBlur: handleBlur,
                      value: values.Customer2,
                      onChange: handleChange,
                      helperText: touched.Customer2 && errors.Customer2,
                      error: Boolean(errors.Customer2 && touched.Customer2),
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Customer3',
                      label: 'Customer Custom Field 3',
                      onBlur: handleBlur,
                      value: values.Customer3,
                      onChange: handleChange,
                      helperText: touched.Customer3 && errors.Customer3,
                      error: Boolean(errors.Customer3 && touched.Customer3),
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Customer4',
                      label: 'Customer Custom Field 4',
                      onBlur: handleBlur,
                      value: values.Customer4,
                      onChange: handleChange,
                      helperText: touched.Customer4 && errors.Customer4,
                      error: Boolean(errors.Customer4 && touched.Customer4),
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Customer5',
                      label: 'Customer Custom Field 5',
                      onBlur: handleBlur,
                      value: values.Customer5,
                      onChange: handleChange,
                      helperText: touched.Customer5 && errors.Customer5,
                      error: Boolean(errors.Customer5 && touched.Customer5),
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Customer6',
                      label: 'Customer Custom Field 6',
                      onBlur: handleBlur,
                      value: values.Biller6,
                      onChange: handleChange,
                      helperText: touched.Customer6 && errors.Customer6,
                      error: Boolean(errors.Customer6 && touched.Customer6),
                    }}
                  />
                </Grid>

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
                      name: 'CustomerGroup',
                      label: 'Customer Group',
                      value: values.CustomerGroup,
                      onBlur: handleBlur,
                      onChange: handleChange('CustomerGroup'),
                      helperText: touched.CustomerGroup && errors.CustomerGroup,
                      error: Boolean(errors.CustomerGroup && touched.CustomerGroup),
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

export default AddCustomer;
