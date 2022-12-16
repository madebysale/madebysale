import React, { useState, useEffect } from 'react';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import SimpleFormNew from '../material-kit/forms/SimpleFormNew';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@mui/material';
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
    marginTop: '15px',
    padding: '7px 23px',
    border: 'none',
    fontSize: '15px',
    color: '#fff',
    background: '#303f9f',
  },
  fil: {
    width: '100%',
    height: '50px',
    marginBottom: '0px',
    borderRadius: '5px',
    padding: '10px',
    border: '1px solid #cfcfcf',
  },
}));

const people = ['Siri', 'Alexa', 'Google', 'Facebook', 'Twitter', 'Linkedin', 'Sinkedin'];

// inital login credentials
const initialValues = {
  Phone: '',
  Message: '',
};

// form field validation schema
const validationSchema = Yup.object().shape({
  Phone: Yup.number()
    .min(6, 'Phone must be 6 character length')
    .required('number is required!'),

  Message: Yup.string()
    .min(6, 'Message must be 6 character length')
    .required('Message is required!'),
});

const SendSMS = () => {
  const classes = useStyles();
  const [value, setValue] = useState('Controlled');
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState('');
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const [searchResults, setSearchResults] = useState([]);
  // at every occurance of the change event, sets the current value of the form to the state
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = people.filter((person) => person.toLowerCase().includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Send SMS' }]}
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
                <Grid item xs={12}>
                  <input
                    type="text"
                    placeholder="Search phone by customer"
                    value={searchTerm}
                    onChange={handleChange}
                    className={classes.fil}
                  />
                </Grid>
                {/* <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul> */}
                <Grid item xs={12}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Phone',
                      label: 'Mobile',
                      onBlur: handleBlur,
                      value: values.Phone,
                      onChange: handleChange,
                      helperText: touched.Phone && errors.Phone,
                      error: Boolean(errors.Phone && touched.Phone),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      rows: 4,
                      multiline: true,
                      name: 'Message',
                      label: 'Message',
                      onBlur: handleBlur,
                      value: values.Message,
                      onChange: handleChange,
                      helperText: touched.Message && errors.Message,
                      error: Boolean(errors.Message && touched.Message),
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
                Send Msg
              </LoadingButton>
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default SendSMS;
