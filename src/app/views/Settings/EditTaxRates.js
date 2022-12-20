

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
  Code: '',
  Rate: '',
  Type: '',
 

};

// form field validation schema
const validationSchema = Yup.object().shape({
  Name: Yup.string()
    .min(2, 'Name must be 2 character length')
    .max(2, 'Name must be 10 character length')
    .required('Name is required!'),

    Code: Yup.string(),
    
    Rate: Yup.string()
   
    .required('Rate is required!'),

    Type: Yup.string()
   
    .required('Type is required!'),


});

const EditTaxRates = (props) => {
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Edit Tax Rate' }]}
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
                      name: 'Code',
                      label: 'Code',
                      onBlur: handleBlur,
                      value: values.Code,
                    
                      onChange: handleChange,
                      helperText: touched.Code && errors.Code,
                      error: Boolean(errors.Code && touched.Code),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <SimpleFormNew
                    props={{
                      
                      type: 'text',

                      name: 'Rate',
                      label: 'Rate',
                      value: values.Rate,
                      onBlur: handleBlur,
                      onChange: handleChange,
                      helperText: touched.Rate && errors.Rate,
                      error: Boolean(errors.Rate && touched.Rate),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
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
             
              
          
          
              </Grid>
              <LoadingButton
                variant="contained"
                type="submit"
                loading={loading}
                className={classes.btn2}
              >
                Edit Tax Rate
              </LoadingButton>
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default EditTaxRates;

