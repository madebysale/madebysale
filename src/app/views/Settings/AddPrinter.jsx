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
    marginTop: '10px',
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
  Title: '',
  Type: '',
  port: '',
  Charactersperline: '',
  IPAddress: '',
  Profile: '',

  // AttachDocument: '',
  // Note: ''
};

// form field validation schema
const validationSchema = Yup.object().shape({
  Title: Yup.string()
    .min(6, 'Title must be 6 character length')
    .required('Title is required!'),

  Type: Yup.string()
    .min(6, 'Type must be 6 character length')
    .required('Type is required!'),

  port: Yup.string()
    .max(4, 'port must be 4 character length')
    .required('port is required!')
    .matches(/^[0-9]+$/, "Must be only digits"),

  Charactersperline: Yup.string()
    .min(6, 'Charactersperline must be 6 character length')
    .required('Characters per line is required!'),

  IPAddress: Yup.string()
    // .min(5, 'IPAddress must be 6 character length')
    .matches(/(^(\d{1,3}\.){3}(\d{1,3})$)/, {
      message: 'Invalid IP address',
      excludeEmptyString: true
    })
    .required('IPAddress per line is required!'),

  Profile: Yup.string()
    .min(6, 'Profile must be 6 character length')
    .required('Profile per line is required!'),
});

const AddPrinter = (props) => {
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Add Printer' }]}
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
                      name: 'Title',
                      label: 'Title',
                      onBlur: handleBlur,
                      value: values.Title,
                      onChange: handleChange,
                      helperText: touched.Title && errors.Title,
                      error: Boolean(errors.Title && touched.Title),
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
                      name: 'Type',
                      label: 'Type',
                      value: values.Type,
                      onBlur: handleBlur,
                      onChange: handleChange('Type'),
                      helperText: touched.Type && errors.Type,
                      error: Boolean(errors.Type && touched.Type),
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
                      name: 'Profile',
                      label: 'Profile',
                      value: values.Profile,
                      onBlur: handleBlur,
                      onChange: handleChange('Profile'),
                      helperText: touched.Profile && errors.Profile,
                      error: Boolean(errors.Profile && touched.Profile),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Charactersperline',
                      label: 'Characters per line',
                      onBlur: handleBlur,
                      value: values.Charactersperline,
                      onChange: handleChange,
                      helperText: touched.Charactersperline && errors.Charactersperline,
                      error: Boolean(errors.Charactersperline && touched.Charactersperline),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'IPAddress',
                      label: 'IP Address',
                      onBlur: handleBlur,
                      value: values.IPAddress,
                      onChange: handleChange,
                      helperText: touched.IPAddress && errors.IPAddress,
                      error: Boolean(errors.IPAddress && touched.IPAddress),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'port',
                      label: 'Port',
                      onBlur: handleBlur,
                      value: values.port,
                      onChange: handleChange,
                      helperText: touched.port && errors.port,
                      error: Boolean(errors.port && touched.port),
                    }}
                  /> 
                        {/* <span>Most printers are open on port <b>9100</b></span> */}
               
                </Grid>
                     
          
          
              </Grid>
              <LoadingButton
                variant="contained"
                type="submit"
                loading={loading}
                className={classes.btn2}
              >
                Add Printer
              </LoadingButton>
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default AddPrinter;
