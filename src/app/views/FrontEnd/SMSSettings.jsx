import React, { useState } from 'react';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import AutocompleteComboNew from '../material-kit/auto-complete/AutocompleteComboNew';
import { Typography } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import useAuth from 'app/hooks/useAuth';
import { makeStyles } from '@material-ui/styles';
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
    marginTop: '10px',
    padding: '7px 23px',
    border: 'none',
    fontSize: '15px',
    color: '#fff',
    background: '#303f9f',
  },
}));

// inital login credentials
const initialValues = {
  Gateway: '',
};

// form field validation schema
const validationSchema = Yup.object().shape({
  Gateway: Yup.string()
    .min(6, 'Gateway must be 6 character length')
    .required('Gateway is required!'),
});

const SMSSettings = () => {
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'SMS Settings' }]}
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
                  name: 'Gateway',
                  label: 'Gateway',
                  value: values.Gateway,
                  onBlur: handleBlur,
                  onChange: handleChange('Gateway'),
                  helperText: touched.Gateway && errors.Gateway,
                  error: Boolean(errors.Gateway && touched.Gateway),
                }}
              />
              <Typography style={{ marginTop: '10px' }}>
                <LoadingButton
                  variant="contained"
                  type="submit"
                  loading={loading}
                  className={classes.btn2}
                >
                  Submit
                </LoadingButton>
              </Typography>
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default SMSSettings;
