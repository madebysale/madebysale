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
import Singleimage from '../material-kit/uploadimage/Singleimage';
import { Typography } from '@mui/material';
import Fileattachment from '../material-kit/uploadimage/Fileattachment';

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
  Category_Name: '',
  Slug: '',
  Description: '',

 

  // AttachDocument: '',
  // Note: ''
};

// form field validation schema
const validationSchema = Yup.object().shape({
  Category_Code: Yup.string()
 
    .required('Category Code is required!'),

    Category_Name: Yup.string()
   
    .required('Category Name is required!'),

 
    
   

    Description: Yup.string()
    .min(6, 'Description must be 6 character length')
    .required('Description per line is required!'),

 

});

const UpdateCategories = (props) => {
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Add Categories' }]}
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
                      name: 'Category_Code',
                      label: 'Category Code',
                      onBlur: handleBlur,
                      value: values.Category_Code,
                      onChange: handleChange,
                      helperText: touched.Category_Code && errors.Category_Code,
                      error: Boolean(errors.Category_Code && touched.Category_Code),
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
              
              
              
                <Grid item xs={12} md={12}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Slug',
                      // label: 'Slug',
                    
                      onBlur: handleBlur,
                      value: values.Category_Name,
                      // Value:"",
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
                  <Fileattachment
                    props={{
                      label: '  Category Image',
                    }}
                  />
                </Grid>
                     
                <Grid item xs={12} md={12}>
                  <AutocompleteComboNew
                    props={{
                      names: [
                      'Bradley Wilkerson',
                         'Oliver Hansen',
                        'Van Henry',
                        'April Tucker',
                        'Ralph Hubbard',
                        'Omar Alexander',
                        'Carlos Abbott',
                        'Miriam Wagner',
                         'Virginia Andrews',
                        'Kelly Snyder',
                      ],
                      name: 'Parent_Category',
                      label: 'Parent Category',
                      value: values.Parent_Category,
                      onBlur: handleBlur,
                      onChange: handleChange('Parent Category'),
                      helperText: touched.Parent_Category && errors.Parent_Category,
                      error: Boolean(errors.Parent_Category && touched.Parent_Category),
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
                Add category
              </LoadingButton>
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default UpdateCategories;
