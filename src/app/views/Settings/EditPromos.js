

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
  Name: '',
  start_Date: '',
  End_Date: '',
  Produc_to_buy: '',
  Product_to_get: '',
  Description: '',

};

// form field validation schema
const validationSchema = Yup.object().shape({
  Name: Yup.string()
    .min(6, 'Name must be 6 character length')
    .required('Name is required!'),

    start_Date: Yup.date(),
    End_Date: Yup.date().min(
        Yup.ref('start_Date'),
        "End date can't be before Start date"
      ),
     Produc_to_buy: Yup.string()
    .min(6, 'Produc_to_buy must be 6 character length')
    .required('Produc_to_buy per line is required!'),

    Product_to_get: Yup.string()
    .min(6, 'Product_to_get must be 6 character length')
    
    .required('Product_to_get per line is required!'),

    Description: Yup.string(),
});

const EditPromos = (props) => {
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Edit Promos' }]}
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
                <Grid item xs={12} md={12}>
                  <SimpleFormNew

                    props={{
                     
                      type: 'text',
                      name: 'start_Date',
                      label: 'start Date',
                      onBlur: handleBlur,
                      value: values.start_Date,
                    
                      onChange: handleChange,
                      helperText: touched.start_Date && errors.start_Date,
                      error: Boolean(errors.start_Date && touched.start_Date),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <SimpleFormNew
                    props={{
                      
                      type: 'text',

                      name: 'End_Date',
                      label: 'End Date',
                      value: values.End_Date,
                      onBlur: handleBlur,
                      onChange: handleChange,
                      helperText: touched.End_Date && errors.End_Date,
                      error: Boolean(errors.End_Date && touched.End_Date),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Produc_to_buy',
                      label: 'Product to buy',
                      onBlur: handleBlur,
                      value: values.Produc_to_buy,
                      onChange: handleChange,
                      helperText: touched.Produc_to_buy && errors.Produc_to_buy,
                      error: Boolean(errors.Produc_to_buy && touched.Produc_to_buy),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Product_to_get',
                      label: 'Product to get',
                      onBlur: handleBlur,
                      value: values.Product_to_get,
                      onChange: handleChange,
                      helperText: touched.Product_to_get && errors.Product_to_get,
                      error: Boolean(errors.Product_to_get && touched.Product_to_get),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                <SimpleFormNew
               
           
                     props={{
                      type: 'text',
                      multiline:true,
                      rows:4,
                      name: 'Description',
                      label: 'Description',
                      onBlur: handleBlur,
                      value: values.Description,
                      onChange: handleChange,
                      helperText: touched.Description && errors.Description,
                      error: Boolean(errors.Description && touched.Description),
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
                Edit Promos
              </LoadingButton>
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default EditPromos;

