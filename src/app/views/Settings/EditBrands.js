

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
import { TextareaAutosize, Typography } from '@mui/material';
import { min } from 'lodash';
import Singleimage from '../material-kit/uploadimage/Singleimage';

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
  Code: '',
  Name: '',
  Slug: '',
  Description:'',

};

// form field validation schema
const validationSchema = Yup.object().shape({
  Code: Yup.string()
  
    .required('Code is required!'),

  Name: Yup.string()
  
    .required('Name is required!'),

    Slug: Yup.string()
    .required('Slug is required!'),

    Description: Yup.string()
    .required('Name is required!'),
});

const EditBrands = (props) => {
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Add Brand' }]}
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

                      name: 'Slug',
                      label: 'Slug',
                      value: values.Slug,
                      onBlur: handleBlur,
                      onChange: handleChange,
                      helperText: touched.Slug && errors.Slug,
                      error: Boolean(errors.Slug && touched.Slug),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
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
                <Grid item xs={12} md={12}>
                  {/* <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Category Image',
                      label: 'Category_Image',
                      onBlur: handleBlur,
                      value: values.Category_Image,
                      onChange: handleChange,
                      helperText: touched.Category_Image && errors.Category_Image,
                      error: Boolean(errors.Category_Image && touched.Category_Image),
                    }}
                    
                  />  */}
                    <Singleimage
                    
                        />

                     <Typography className={classes.textnew2}>Image</Typography>
                </Grid>
                
    
          
          
              </Grid>
              <LoadingButton
                variant="contained"
                type="submit"
                loading={loading}
                className={classes.btn2}
              >
                Edit Brand
              </LoadingButton>
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default EditBrands;

