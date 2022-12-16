import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SimpleFormNew from '../material-kit/forms/SimpleFormNew';
import { makeStyles } from '@material-ui/styles';
import Singleimage from '../material-kit/uploadimage/Singleimage';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import useAuth from 'app/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

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
    marginTop: '20px',
    padding: '7px 23px',
    border: 'none',
    fontSize: '15px',
    color: '#fff',
    background: '#303f9f',
  },
  textnew1: {
    fontSize: '15px',
    fontWeight: '600',
    paddingBottom: '20px',
  },
}));

const handleChange = (event) => {
  console.log(event);
};

const initialValues = {
  Link1: 'http://ci.dev/sma/shop/products',
  Link2: '',
  Link3: '',
  Link4: '',
  Link5: '',
  Caption1: '',
  Caption2: '',
  Caption3: '',
  Caption4: '',
  Caption5: '',
};

// form field validation schema
const validationSchema = Yup.object().shape({
  Link1: Yup.number()
    .min(6, 'Link1 must be 6 character length')
    .required('Link1 is required!'),

  Link2: Yup.string()
    .min(6, 'Link2 must be 6 character length')
    .required('Link2 is required!'),

  Link3: Yup.string()
    .min(6, 'Link3 must be 6 character length')
    .required('Link3 is required!'),

  Link4: Yup.string()
    .min(6, 'Link4 must be 6 character length')
    .required('Link4 is required!'),

  Link5: Yup.string()
    .min(6, 'Link5 must be 6 character length')
    .required('Link5 is required!'),

  Caption1: Yup.string()
    .min(6, 'Caption1 must be 6 character length')
    .required('Caption1 is required!'),
  Caption2: Yup.string()
    .min(6, 'Caption2 must be 6 character length')
    .required('Caption2 is required!'),

  Caption3: Yup.string()
    .min(6, 'Caption3 must be 6 character length')
    .required('Caption3 is required!'),
  Caption4: Yup.string()
    .min(6, 'Caption4 must be 6 character length')
    .required('Caption4 is required!'),
  Caption5: Yup.string()
    .min(6, 'Caption5 must be 6 character length')
    .required('Caption5 is required!'),
});

const SliderSettings = (props) => {
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Slider Settings' }]}
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
              <Paper
                style={{
                  boxShadow: 'none',
                  border: '1px solid rgb(229 217 217)',
                  padding: '30px',
                }}
              >
                <Typography variant="h6" className={classes.textnew1}>
                  Shop Settings
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'Link1',
                        label: 'Link 1',
                        onBlur: handleBlur,
                        value: values.Link1,
                        onChange: handleChange,
                        helperText: touched.Link1 && errors.Link1,
                        error: Boolean(errors.Link1 && touched.Link1),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'Link2',
                        label: 'Link 2',
                        onBlur: handleBlur,
                        value: values.Link2,
                        onChange: handleChange,
                        helperText: touched.Link2 && errors.Link2,
                        error: Boolean(errors.Link2 && touched.Link2),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'Link3',
                        label: 'Link 3',
                        onBlur: handleBlur,
                        value: values.Link3,
                        onChange: handleChange,
                        helperText: touched.Link3 && errors.Link3,
                        error: Boolean(errors.Link3 && touched.Link3),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'Link4',
                        label: 'Link 4',
                        onBlur: handleBlur,
                        value: values.Link4,
                        onChange: handleChange,
                        helperText: touched.Link4 && errors.Link4,
                        error: Boolean(errors.Link4 && touched.Link4),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'Link5',
                        label: 'Link 5',
                        onBlur: handleBlur,
                        value: values.Link5,
                        onChange: handleChange,
                        helperText: touched.Link5 && errors.Link5,
                        error: Boolean(errors.Link5 && touched.Link5),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'Caption1',
                        label: 'Caption 1',
                        onBlur: handleBlur,
                        value: values.Caption1,
                        onChange: handleChange,
                        helperText: touched.Caption1 && errors.Caption1,
                        error: Boolean(errors.Caption1 && touched.Caption1),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'Caption2',
                        label: 'Caption 2',
                        onBlur: handleBlur,
                        value: values.Caption2,
                        onChange: handleChange,
                        helperText: touched.Caption2 && errors.Caption2,
                        error: Boolean(errors.Caption2 && touched.Caption2),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'Caption3',
                        label: 'Caption 3',
                        onBlur: handleBlur,
                        value: values.Caption3,
                        onChange: handleChange,
                        helperText: touched.Caption3 && errors.Caption3,
                        error: Boolean(errors.Caption3 && touched.Caption3),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'Caption4',
                        label: 'Caption 4',
                        onBlur: handleBlur,
                        value: values.Caption4,
                        onChange: handleChange,
                        helperText: touched.Caption4 && errors.Caption4,
                        error: Boolean(errors.Caption4 && touched.Caption4),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'Caption5',
                        label: 'Caption 5',
                        onBlur: handleBlur,
                        value: values.Caption5,
                        onChange: handleChange,
                        helperText: touched.Caption5 && errors.Caption5,
                        error: Boolean(errors.Caption5 && touched.Caption5),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography>Image 1</Typography>
                    <Singleimage />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography style={{ padding: '0px 0px' }}>Image 2</Typography>
                    <Singleimage />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography style={{ padding: '0px 0px' }}>Image 3</Typography>
                    <Singleimage />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography style={{ padding: '0px 0px' }}>Image 4</Typography>
                    <Singleimage />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography style={{ padding: '0px 0px 0px 0px' }}>Image 5</Typography>
                    <Singleimage />
                  </Grid>
                </Grid>
              </Paper>

              <LoadingButton
                variant="contained"
                type="submit"
                loading={loading}
                className={classes.btn2}
              >
                Update
              </LoadingButton>
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default SliderSettings;
