import React, { useState } from 'react';
import Label from '../material-kit/tables/Label';
import { Checkbox, Grid } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import SimpleFormNew from '../material-kit/forms/SimpleFormNew';
import { makeStyles } from '@material-ui/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import useAuth from 'app/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
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
  Title: '',
  Name: '',
  Description: '',
  Slug: '',
  MenuOrder: '',
  // AttachDocument: '',
  // Note: ''
};

// form field validation schema
const validationSchema = Yup.object().shape({
  Title: Yup.string()
    .min(6, 'Title must be 6 character length')
    .required('Title is required!'),

  Name: Yup.string()
    .min(6, 'Name must be 6 character length')
    .required('Name is required!'),

  Description: Yup.string()
    .min(6, 'Description must be 6 character length')
    .required('Description is required!'),

  Slug: Yup.string()
    .min(6, 'Slug must be 6 character length')
    .required('Slug per line is required!'),

  MenuOrder: Yup.string()
    .min(6, 'MenuOrder must be 6 character length')
    .required('MenuOrder per line is required!'),
});

const AddPage = (props) => {
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Add Page' }]}
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
                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Slug',
                      label: 'Slug',
                      onBlur: handleBlur,
                      value: values.Slug,
                      onChange: handleChange,
                      helperText: touched.Slug && errors.Slug,
                      error: Boolean(errors.Slug && touched.Slug),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'MenuOrder',
                      label: 'Menu Order',
                      onBlur: handleBlur,
                      value: values.MenuOrder,
                      onChange: handleChange,
                      helperText: touched.MenuOrder && errors.MenuOrder,
                      error: Boolean(errors.MenuOrder && touched.MenuOrder),
                    }}
                  />
                  <Checkbox value="checkedA" defaultChecked />
                  <Label> Show in top menus</Label>
                </Grid>
              </Grid>
              <Label>Body</Label>
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
              <LoadingButton
                variant="contained"
                type="submit"
                loading={loading}
                className={classes.btn2}
              >
                Add Page
              </LoadingButton>
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default AddPage;
