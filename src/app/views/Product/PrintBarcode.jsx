import React from 'react';
import { Box, styled } from '@mui/system';
import AutocompleteComboNew from '../material-kit/auto-complete/AutocompleteComboNew';
import { Breadcrumb, SimpleCard } from 'app/components';
import Searchtable from '../material-kit/checkbox/Searchtable';
import Typography from '@mui/material/Typography';
import LabelledCheckbox from '../material-kit/checkbox/LabelledCheckbox';
import { makeStyles } from '@material-ui/styles';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import useAuth from 'app/hooks/useAuth';
import { useState } from 'react';
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
  Style: '',
};

// form field validation schema
const validationSchema = Yup.object().shape({
  Style: Yup.string()
    .min(6, 'Style must be 6 character length')
    .required('Style is required!'),
});
const PrintBarcode = () => {
  const classes = useStyles();
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState('');
  const handleFormSubmit = (values) => {
    console.log(values);
    // setLoading(true);

    // try {
    //   register(values.email, values.username, values.password);
    //   navigate('/');
    //   setLoading(false);
    // } catch (e) {
    //   console.log(e);
    //   setLoading(false);
    // }
  };
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Print Barcode' }]}
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
                  <Typography variant="subtitle1">Add Product</Typography>
                  <Searchtable />
                </Grid>
                <Grid item xs={12} md={12}>
                  <AutocompleteComboNew
                    props={{
                      id: 'Category',
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
                      name: 'Style',
                      label: 'Style',
                      value: values.Style,
                      onBlur: handleBlur,
                      onChange: handleChange('Style'),
                      helperText: touched.Style && errors.Style,
                      error: Boolean(errors.Style && touched.Style),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <LabelledCheckbox />
                </Grid>
                <Grid item xs={12} md={12}>
                  <LoadingButton
                    variant="contained"
                    type="submit"
                    loading={loading}
                    className={classes.btn2}
                  >
                    Update
                  </LoadingButton>
                  <Button variant="contained" className={classes.btn3}>
                    Reset
                  </Button>
                </Grid>
                {/* <Typography variant="subtitle1" sx={{ mt: 1, mb: 1 }}>
          <Button variant="contained" className={classes.btn2}>
            Update
          </Button>
          <Button variant="contained" className={classes.btn3}>
            Reset
          </Button>
        </Typography> */}
              </Grid>
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default PrintBarcode;
