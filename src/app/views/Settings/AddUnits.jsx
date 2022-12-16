

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
  Unit_Code: '',
  Unit_Name: '',
 

};

// form field validation schema
const validationSchema = Yup.object().shape({
  Unit_Code: Yup.string()
 
    .required('Unit Code is required!'),

    Unit_Name: Yup.string()
  
    .required('Unit Name per line is required!'),

  
});

const AddUnits = (props) => {
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Add Unit' }]}
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
                      name: 'Unit_Code',
                      label: 'Unit Code',
                      onBlur: handleBlur,
                      value: values.Unit_Code,
                      onChange: handleChange,
                      helperText: touched.Unit_Code && errors.Unit_Code,
                      error: Boolean(errors.Unit_Code && touched.Unit_Code),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <SimpleFormNew

                    props={{
                     
                      type: 'text',
                      name: 'Unit_Name',
                      label: 'Unit Name',
                      onBlur: handleBlur,
                      value: values.Unit_Name,
                    
                      onChange: handleChange,
                      helperText: touched.Unit_Name && errors.Unit_Name,
                      error: Boolean(errors.Unit_Name && touched.Unit_Name),
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
                      name: 'Base_Unit',
                      label: 'Base Unit',
                      value: values.Type,
                      onBlur: handleBlur,
                      onChange: handleChange('Base_Unit'),
                      helperText: touched.Base_Unit && errors.Base_Unit,
                      error: Boolean(errors.Base_Unit && touched.Base_Unit),
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
                Add unit
              </LoadingButton>
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default AddUnits;

