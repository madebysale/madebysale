import React, { useState } from 'react';
import { Box, styled } from '@mui/system';
import { Checkbox } from '@mui/material';
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
  FirstName: '',
  Username: '',
  LastName: '',
  Company: '',
  Status: '',
  Group: '',
  Gender: '',
  Phone: '',
  Email: '',
  Password: '',
  ConfirmPassword: '',
  // AttachDocument: '',
  // Note: ''
};

// form field validation schema
const validationSchema = Yup.object().shape({
  FirstName: Yup.string()
    .min(6, 'FirstName must be 6 character length')
    .required('First Name is required!'),
  Username: Yup.string()
    .min(6, 'Username must be 6 character length')
    .required('User name is required!'),
  Email: Yup.string()
    .email()
    .required('Email is required!'),
  LastName: Yup.string()
    .min(6, 'LastName must be 6 character length')
    .required('Last Name is required!'),
  Company: Yup.string()
    .min(6, 'Company must be 6 character length')
    .required('Company is required!'),

  Status: Yup.string()
    .min(6, 'Status must be 6 character length')
    .required('Status is required!'),

  Group: Yup.string()
    .min(6, 'Group must be 6 character length')
    .required('Group is required!'),

  Gender: Yup.string()
    .min(6, 'Gender must be 6 character length')
    .required('Gender is required!'),

  Password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/(?=.*[0-9])/, 'Password must contain a number.'),

  ConfirmPassword: Yup.string()
    .required('Confirm Password not  provided.')
    .oneOf([Yup.ref('Password')], 'Passwords must match'),

  Phone: Yup.number()
    .min(6, 'Phone must be 6 character length')
    .required('number is required!'),
});

const AddUser = (props) => {
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Add User' }]}
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
                      name: 'FirstName',
                      label: 'First Name',
                      onBlur: handleBlur,
                      value: values.FirstName,
                      onChange: handleChange,
                      helperText: touched.FirstName && errors.FirstName,
                      error: Boolean(errors.FirstName && touched.FirstName),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'LastName',
                      label: 'Last Name',
                      onBlur: handleBlur,
                      value: values.LastName,
                      onChange: handleChange,
                      helperText: touched.LastName && errors.LastName,
                      error: Boolean(errors.LastName && touched.LastName),
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
                      name: 'Username',
                      label: 'Username',
                      onBlur: handleBlur,
                      value: values.Username,
                      onChange: handleChange,
                      helperText: touched.Username && errors.Username,
                      error: Boolean(errors.Username && touched.Username),
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
                      label: 'Email',
                      onBlur: handleBlur,
                      value: values.Email,
                      onChange: handleChange,
                      helperText: touched.Email && errors.Email,
                      error: Boolean(errors.Email && touched.Email),
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
                      name: 'Gender',
                      label: 'Gender',
                      value: values.Gender,
                      onBlur: handleBlur,
                      onChange: handleChange('Gender'),
                      helperText: touched.Gender && errors.Gender,
                      error: Boolean(errors.Gender && touched.Gender),
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
                      name: 'Group',
                      label: 'Group',
                      value: values.Group,
                      onBlur: handleBlur,
                      onChange: handleChange('Group'),
                      helperText: touched.Group && errors.Group,
                      error: Boolean(errors.Group && touched.Group),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'Password',
                      name: 'Password',
                      label: 'Password',
                      onBlur: handleBlur,
                      value: values.Password,
                      onChange: handleChange,
                      helperText: touched.Password && errors.Password,
                      error: Boolean(errors.Password && touched.Password),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'Password',
                      name: 'ConfirmPassword',
                      label: 'Confirm Password',
                      onBlur: handleBlur,
                      value: values.ConfirmPassword,
                      onChange: handleChange,
                      helperText: touched.ConfirmPassword && errors.ConfirmPassword,
                      error: Boolean(errors.ConfirmPassword && touched.ConfirmPassword),
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
                      name: 'Status',
                      label: 'Status',
                      value: values.Status,
                      onBlur: handleBlur,
                      onChange: handleChange('Status'),
                      helperText: touched.Status && errors.Status,
                      error: Boolean(errors.Status && touched.Status),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Checkbox value="checkedA" defaultChecked />
                  <Label> Notify User by Email</Label>
                </Grid>
              </Grid>
              <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
                <LoadingButton
                  variant="contained"
                  type="submit"
                  loading={loading}
                  className={classes.btn2}
                >
                  Add user
                </LoadingButton>
              </Typography>
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default AddUser;
