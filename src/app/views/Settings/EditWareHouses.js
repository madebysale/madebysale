

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
import Label from '../material-kit/tables/Label';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
 
  code: '',
  Name: '',
  Price_Group: '',
  Phone: '',
  Email: '',
  Address:'',
  Warehouse_Map:'',

};

// form field validation schema
const validationSchema = Yup.object().shape({
  code: Yup.string()
    .min(6, 'code must be 6 character length')
    .required('code is required!'),
    Name: Yup.string()
    .min(6, 'Name must be 6 character length')
    .required('Name is required!'),
  
    Phone: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .min(10,"Phone number is not valid")
    .max(10,"Phone number is not valid"),
    


    Email: Yup.string()
          .email(),
 
    
});

const EditWareHouses = (props) => {
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Edit WareHouse' }]}
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
                      name: 'code',
                      label: 'code',
                      onBlur: handleBlur,
                      value: values.code,
                    
                      onChange: handleChange,
                      helperText: touched.code && errors.code,
                      error: Boolean(errors.code && touched.code),
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
             
                <Grid item xs={12} md={12}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
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
                <Grid item xs={12} md={12}>
                  <SimpleFormNew
                    props={{
                      type: 'Email',
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
              
                <Grid item xs={12}>
                  <Label> Address</Label>
                  <CKEditor
                    editor={ClassicEditor}
                    data={note}
                    onReady={(editor) => {
                      console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setNote(data);
                      console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                      handleBlur();
                      console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                      console.log('Focus.', editor);
                    }}
                  />
                  <div className="content-invalid-feedback">
                    {note === '' ? <span style={{ color: 'red' }}>Required</span> : null}
                  </div>
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

                     <Typography className={classes.textnew2}>Warehouse Map</Typography>
                </Grid>
                     
          
          
              </Grid>
              <LoadingButton
                variant="contained"
                type="submit"
                loading={loading}
                className={classes.btn2}
              >
                Edit WareHouse
              </LoadingButton>
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default EditWareHouses;

