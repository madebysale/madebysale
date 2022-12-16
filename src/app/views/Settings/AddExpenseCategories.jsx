

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
  Category_Code: '',
  Category_Name :'',

};

// form field validation schema
const validationSchema = Yup.object().shape({
    Category_Code: Yup.string()
    
    .required('Category Code is required!'),
    Category_Name: Yup.string()
    // .min(6, 'Category Name must be 3 character length')
    .required('Category Name is required!'),





});







const AddExpenseCategories = (props) => {
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Add Customer Groups' }]}
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
                      name: 'Category_code',
                      label: 'Category code',
                      onBlur: handleBlur,
                      value: values.Group_Name,
                      onChange: handleChange,
                      helperText: touched.Category_code && errors.Category_code,
                      error: Boolean(errors.Category_code && touched.Category_code),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Category_Name',
                      label: 'Category Name',
                      onBlur: handleBlur,
                      value: values.Category_Name,
                      onChange: handleChange,
                      helperText: touched.Category_Name && errors.Category_Name,
                      error: Boolean(errors.Category_Name && touched.Category_Name),
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
                Add Expense Catergory
              </LoadingButton>
           
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default AddExpenseCategories;

