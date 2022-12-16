

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
    .required('Currency Name per line is required!'),



});







const EditCustomerGroups = (props) => {
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Edit Customer Groups' }]}
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
                      name: 'Group Name',
                      label: 'Group_Name',
                      onBlur: handleBlur,
                      value: values.Group_Name,
                      onChange: handleChange,
                      helperText: touched.Group_Name && errors.Group_Name,
                      error: Boolean(errors.Group_Name && touched.Group_Name),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <SimpleFormNew
                    props={{
                      
                      type: 'text',

                      name: 'Group_Percentage',
                      label: 'Group Percentage (without % sign)',
                      value: values.Group_Percentage,
                      onBlur: handleBlur,
                      onChange: handleChange,
                      helperText: touched.Group_Percentage && errors.Group_Percentage,
                      error: Boolean(errors.Group_Percentage && touched.Group_Percentage),
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
                Edit Customer Group
              </LoadingButton>
           
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default EditCustomerGroups;

