import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Grid } from '@mui/material';
import SimpleFormNew from '../forms/SimpleFormNew';
// import SimpleFormNewNew from '../material-kit/forms/SimpleFormNewNew';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import useAuth from 'app/hooks/useAuth';
import { makeStyles } from '@material-ui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  btn2: {
    // marginTop: '14px',
    padding: '7px 23px',
    border: 'none',
    color: '#fff',
    background: 'rgb(10 37 64)',
  },
}));

// inital login credentials
const initialValues = {
  Product1: '',
  Product2: '',
  Product3: '',
  Product4: '',
  Product5: '',
  Product6: '',

  // AttachDocument: '',
  // Note: ''
};

// form field validation schema
const validationSchema = Yup.object().shape({
  Product1: Yup.string()
    .min(6, 'Product1 must be 6 character length')
    .required('required!'),

  Product2: Yup.string()
    .min(6, 'Product2 must be 6 character length')
    .required('required!'),

  Product3: Yup.string()
    .min(6, 'Product3 must be 6 character length')
    .required('required!'),

  Product4: Yup.string()
    .min(6, 'Product4 must be 6 character length')
    .required('required!'),

  Product5: Yup.string()
    .min(6, 'Product5 must be 6 character length')
    .required('required!'),

  Product6: Yup.string()
    .min(6, 'Product6 must be 6 character length')
    .required('required!'),
});

function FormGroupCheckbox() {
  const [checked, setChecked] = React.useState(true);
  const [show, toggleShow] = useState(false);
  const classes = useStyles();
  const handleChange = (event) => {
    console.log(event);
  };
  const handleChange1 = (event) => { };
  const handleChange2 = (event) => { };
  const [value, setValue] = useState('Controlled');
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState('');
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Featured (Shop homepage listing)"
        />
        <FormControlLabel control={<Checkbox />} label="Hide in POS Module" />
        <FormControlLabel control={<Checkbox />} label="Hide in Shop Module" />

        <div style={{ margin: '0px 0px 0px 0px' }}>
          <FormControlLabel
            control={<Checkbox />}
            onClick={() => toggleShow(!show)}
            label="Custom Fields"
          />
          {/* <FormControlLabel
             
              value="checkedA"
              control={<Radio />}
              label="Custom Fields"
            /> */}

          <div>
            {show && (
              <div>
                <Formik
                  onSubmit={handleFormSubmit}
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                >
                  {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid item lg={4} xs={12}>
                          <SimpleFormNew
                            props={{
                              type: 'text',
                              name: 'Product1',
                              label: 'Product Custom Field 1',
                              onBlur: handleBlur,
                              value: values.Product1,
                              onChange: handleChange,
                              helperText: touched.Product1 && errors.Product1,
                              error: Boolean(errors.Product1 && touched.Product1),
                            }}
                          />
                        </Grid>

                        <Grid item lg={4} xs={12}>
                          <SimpleFormNew
                            props={{
                              type: 'text',
                              name: 'Product2',
                              label: 'Product Custom Field 2',
                              onBlur: handleBlur,
                              value: values.Product2,
                              onChange: handleChange,
                              helperText: touched.Product2 && errors.Product2,
                              error: Boolean(errors.Product2 && touched.Product2),
                            }}
                          />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                          <SimpleFormNew
                            props={{
                              type: 'text',
                              name: 'Product3',
                              label: 'Product Custom Field 3',
                              onBlur: handleBlur,
                              value: values.Product3,
                              onChange: handleChange,
                              helperText: touched.Product3 && errors.Product3,
                              error: Boolean(errors.Product3 && touched.Product3),
                            }}
                          />
                        </Grid>

                        <Grid item lg={4} xs={12}>
                          <SimpleFormNew
                            props={{
                              type: 'text',
                              name: 'Product4',
                              label: 'Product Custom Field 4',
                              onBlur: handleBlur,
                              value: values.Product4,
                              onChange: handleChange,
                              helperText: touched.Product4 && errors.Product4,
                              error: Boolean(errors.Product4 && touched.Product4),
                            }}
                          />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                          <SimpleFormNew
                            props={{
                              type: 'text',
                              name: 'Product5',
                              label: 'Product Custom Field 5',
                              onBlur: handleBlur,
                              value: values.Product5,
                              onChange: handleChange,
                              helperText: touched.Product5 && errors.Product5,
                              error: Boolean(errors.Product5 && touched.Product5),
                            }}
                          />
                        </Grid>

                        <Grid item lg={4} xs={12}>
                          <SimpleFormNew
                            props={{
                              type: 'text',
                              name: 'Product6',
                              label: 'Product Custom Field 6',
                              onBlur: handleBlur,
                              value: values.Product6,
                              onChange: handleChange,
                              helperText: touched.Product6 && errors.Product6,
                              error: Boolean(errors.Product6 && touched.Product6),
                            }}
                          />
                        </Grid>
                      </Grid>
                    </form>
                  )}
                </Formik>
              </div>
            )}
          </div>
        </div>
      </FormGroup>
    </>
  );
}
export default FormGroupCheckbox;






