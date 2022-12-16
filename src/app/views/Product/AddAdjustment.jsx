import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import Date from '../material-kit/forms/Date';
import { makeStyles } from '@material-ui/styles';
import Fileattachment from '../material-kit/uploadimage/Fileattachment';
import Searchtable from '../material-kit/checkbox/Searchtable';
import Label from '../material-kit/tables/Label';
import Typography from '@mui/material/Typography';
import SimpleFormNew from '../material-kit/forms/SimpleFormNew';
import AutocompleteComboNew from '../material-kit/auto-complete/AutocompleteComboNew';
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
    padding: '7px 23px',
    border: 'none',
    fontSize: '15px',
    color: '#fff',
    background: '#303f9f',
  },
  btn3: {
    padding: '7px 23px',
    border: 'none',
    fontSize: '15px',
    marginLeft: '10px',
    color: '#fff',
    background: '#7b1fa2',
  },
}));
// inital login credentials
const initialValues = {
  Reference: '',
  Warehouse: '',

  // AttachDocument: '',
  // Note: ''
};

// form field validation schema
const validationSchema = Yup.object().shape({
  Reference: Yup.string()
    .min(6, 'Reference must be 6 character length')
    .required('Reference is required!'),
  Warehouse: Yup.string()
    .min(6, 'Warehouse must be 6 character length')
    .required('Warehouse is required!'),
});

const AddAdjustment = () => {
  const handleChange = (event) => {
    console.log(event);
  };
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Add Adjustment' }]}
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
                  <Date />
                </Grid>

                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Reference',
                      label: 'Reference No',
                      onBlur: handleBlur,
                      value: values.Reference,
                      onChange: handleChange,
                      helperText: touched.Reference && errors.Reference,
                      error: Boolean(errors.Reference && touched.Reference),
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
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
                      name: 'Warehouse',
                      label: 'Warehouse',
                      value: values.Warehouse,
                      onBlur: handleBlur,
                      onChange: handleChange('Warehouse'),
                      helperText: touched.Warehouse && errors.Warehouse,
                      error: Boolean(errors.Warehouse && touched.Warehouse),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Fileattachment
                    props={{
                      label: 'Attach Document',
                    }}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Label style={{ marginTop: '10px' }}>Products *</Label>
                  <Searchtable />
                  <Label style={{ margin: '15px 0px' }}>Note</Label>
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
              </Grid>
              <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
                <LoadingButton
                  variant="contained"
                  type="submit"
                  loading={loading}
                  className={classes.btn2}
                >
                  Add Biller
                </LoadingButton>
                <Button variant="contained" className={classes.btn3}>
                  Reset
                </Button>
              </Typography>
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default AddAdjustment;
