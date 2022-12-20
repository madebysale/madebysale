

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
import { TextareaAutosize } from '@mui/material';
import { min } from 'lodash';

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
  Currency_Code: '',
  Currency_Name: '',
  Symbol: '',
  Exchange_Rate: '',
 

};

// form field validation schema
const validationSchema = Yup.object().shape({
  Currency_Code: Yup.string()
    .min(3, 'Currency Code must be 3 character length')
    .required('Currency Code is required!'),

        
   Currency_Name: Yup.string()
    .min(3, 'Currency Name must be 3 character length')
    .required('Currency Name is required!'),

    Symbol: Yup.string()
   
    .required('Symbol is required!'),

    Exchange_Rate: Yup.string()
    .required('Exchange Rate is required!'),


});







const EditCurrencies = (props) => {
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Edit Currencies' }]}
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
                <Grid item xs={12} md={12}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Currency_Code',
                      label: 'Currency Code',
                      onBlur: handleBlur,
                      value: values.Currency_Code,
                      onChange: handleChange,
                      helperText: touched.Currency_Code && errors.Currency_Code,
                      error: Boolean(errors.Currency_Code && touched.Currency_Code),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <SimpleFormNew

                    props={{
                     
                      type: 'text',
                      name: 'Currency_Name',
                      label: 'Currency Name',
                      onBlur: handleBlur,
                      value: values.start_Date,
                    
                      onChange: handleChange,
                      helperText: touched.Currency_Name && errors.Currency_Name,
                      error: Boolean(errors.Currency_Name && touched.Currency_Name),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <SimpleFormNew
                    props={{
                      
                      type: 'text',

                      name: 'Symbol',
                      label: 'Symbol',
                      value: values.Symbol,
                      onBlur: handleBlur,
                      onChange: handleChange,
                      helperText: touched.Symbol && errors.Symbol,
                      error: Boolean(errors.Symbol && touched.Symbol),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Exchange_Rate',
                      label: 'Exchange Rate',
                      onBlur: handleBlur,
                      value: values.Exchange_Rate,
                      onChange: handleChange,
                      helperText: touched.Exchange_Rate && errors.Exchange_Rate,
                      error: Boolean(errors.Exchange_Rate && touched.Exchange_Rate),
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
                Edit Currencies
              </LoadingButton>
           
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default EditCurrencies;

