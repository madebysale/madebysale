import React, { useState } from 'react';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import Grid from '@mui/material/Grid';
import SimpleRadio from '../material-kit/radio/SimpleRadio';
import SimpleRadioNew from '../material-kit/radio/SimpleRadioNew';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import CreateIcon from '@mui/icons-material/Create';
import KeyIcon from '@mui/icons-material/Key';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import SimpleForms from '../material-kit/forms/SimpleForms';
import Typography from '@material-ui/core/Typography';
import Singleimage from '../material-kit/uploadimage/Singleimage';
import Label from '../material-kit/tables/Label';
import face from '../../../../src/public/assets/images/face.jpg';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import useAuth from 'app/hooks/useAuth';
import { NavLink, useNavigate } from 'react-router-dom';
import SimpleFormNew from '../material-kit/forms/SimpleFormNew';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { FolderOpenOutlined } from '@ant-design/icons';
import { Button as Buttonimage, Space, Upload } from 'antd';
const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const useStyles = makeStyles((theme) => ({
  file: {
    width: '100%',
    padding: '14px',
    border: '1px solid #ffffff',
  },
  profile0: {
    boxShadow: 'rgb(0 0 0 / 10%) 0px 10px 50px',
    backgroundColor: 'rgba(255,255,255,0.7);',
    backdropFilter: 'blur(20px)',
    borderStyle: 'solid',
    borderColor: '#f5f5f5',
    borderBottomwidth: 'thin',
    marginBottom: '1px',
    padding: '0px 14px',
  },
  profile04: {
    padding: '0px 0px !important',
  },
  profile01: {
    boxShadow: 'rgb(0 0 0 / 10%) 0px 10px 50px',
    backgroundColor: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
    color: '#000',
    borderRadius: '0px',
    padding: '20px 0px',
  },
  profilepic: {
    borderRadius: '50%',
    width: '150px',
    boxShadow: 'rgb(0 0 0 / 10%) 0px 10px 50px',
    border: '2px solid #d9c9c9',
    padding: '12px',
  },
  ty: {
    fontSize: '17px',
    fontWeight: '700',
    padding: '0px 12px',
    // textAlign: 'start',
  },
  ty1: {
    fontSize: '15px',
    padding: '10px 12px',
    width: '100%',
  },
  ty0: {
    // backgroundImage: 'linear-gradient(to right, #8e2de2, #4a00e0)',
    backgroundImage: 'linear-gradient(to right, rgb(10 37 64), #094e0d)',
    boxShadow: 'rgb(17 12 46 / 15%) 0px 48px 100px 0px',
    color: '#fff',
    borderRadius: '50%',
    padding: '10px 10px 3px',
    textAlign: 'center',
  },
  btn2: {
    padding: '7px 23px',
    border: 'none',
    color: '#fff',
    background: '#303f9f',
  },
}));

const handleChange = (event) => {
  console.log(event);
};
// inital login credentials


const initialValuestab2 = {
  Oldpassword: '',
  Newpassword: '',
  Confirmpassword: '',
  // Gender: 'male'
  // AttachDocument: '',
  // Note: ''
};

const initialValuestab3 = {};
// form field validation schema
const validationSchema = Yup.object().shape({
  Fname: Yup.string()
    .min(6, 'Reference must be 6 character length')
    .required('Reference is required!'),
  Lname: Yup.string()
    .min(6, 'Category must be 6 character length')
    .required('Category is required!'),
  Company: Yup.string()
    .min(6, 'Amount must be 6 character length')
    .required('Amount is required!'),
  Mobile: Yup.string()
    .min(6, 'Amount must be 6 character length')
    .required('Amount is required!'),
});

const validationSchematab2 = Yup.object().shape({
  Oldpassword: Yup.string()
    .required('Old Password is required')
    .min(6, 'Password must be at least 6 characters'),
  Newpassword: Yup.string()
    .required('Password is required')
    .min(6, 'New Password must be at least 6 characters'),
  Confirmpassword: Yup.string()
    .required('Confirm New Password is required')
    .oneOf([Yup.ref('Newpassword')], 'Passwords must match'),
});

const validationSchematab3 = Yup.object().shape({});
const Profile = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState();
  const [gender, setgender] = useState('male');
  const [image, setimage] = useState('');
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },

    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
        setimage(info.file, info.fileList[0].originFileObj);
      }

      if (info.file.status === 'done') {
        setimage(info.file, info.fileList[0].originFileObj);
        console.log(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        console.log(`${info.file.name} file upload failed.`);
      }
    },
  };
  const initialValues = {
    Fname: 'OWNER',
    Lname: 'Company',
    Company: 'Impretosys',
    Mobile: '9713254069',
    // Gender: 'male'
    // AttachDocument: '',
    // Note: ''
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChange1 = (event) => {
    setgender(event.target.value);
  };
  const handleimage = (event, image) => {
    console.log(image);
  };
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState('');
  const handleFormSubmit = (values) => {
    console.log(values, gender);
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

  const handleFormSubmittab2 = (values) => {
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

  const handleFormSubmittab3 = (values) => {
    console.log(image);
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Users Profile' }]}
        />
      </Box>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box className={classes.profile01}>
              <Typography className={classes.ty}>User Profile</Typography>
              <AccordionSummary style={{ display: ' grid' }} className={classes.profile04}>
                <Typography className={classes.ty0}>
                  <img className={classes.profilepic} src={face} alt="image" />
                </Typography>
              </AccordionSummary>
              {/* <img className={classes.profilepic} src={face} alt="image" /> */}
              <Typography>Login Email</Typography>
              <Typography>admin@stock.com</Typography>
            </Box>
          </Grid>
        </Grid>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          className={classes.profile0}
        >
          <AccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon style={{ fontSize: '15px' }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className={classes.profile04}
          >
            <Typography className={classes.ty0}>
              <CreateIcon />
            </Typography>
            <Typography className={classes.ty1}>Edit</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Formik
              onSubmit={handleFormSubmit}
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12}>
                      <SimpleFormNew
                        props={{
                          type: 'text',
                          name: 'Fname',
                          label: 'First Name',
                          onBlur: handleBlur,
                          value: values.Fname,
                          onChange: handleChange,
                          helperText: touched.Fname && errors.Fname,
                          error: Boolean(errors.Fname && touched.Fname),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      {/* <SimpleForms
                      props={{
                        type: 'text',
                        name: 'First Name',
                        label: 'First Name',
                        variant: 'outlined',
                        defaultValue: 'Owner',
                        value: 'Owner',
                      }}
                    /> */}
                      {/* <SimpleForms
                      props={{
                        type: 'text',
                        name: 'Last Name',
                        label: 'Last Name',
                        variant: 'outlined',
                        defaultValue: 'Owner',
                        value: 'Owner',
                      }}
                    /> */}
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <SimpleFormNew
                        props={{
                          type: 'text',
                          name: 'Lname',
                          label: 'Last Name',
                          onBlur: handleBlur,
                          value: values.Lname,
                          onChange: handleChange,
                          helperText: touched.Lname && errors.Lname,
                          error: Boolean(errors.Lname && touched.Lname),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <SimpleFormNew
                        props={{
                          type: 'text',
                          name: 'Company',
                          label: 'Company',
                          onBlur: handleBlur,
                          value: values.Company,
                          onChange: handleChange,
                          helperText: touched.Company && errors.Company,
                          error: Boolean(errors.Company && touched.Company),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <SimpleFormNew
                        props={{
                          type: 'text',
                          name: 'Mobile',
                          label: 'Phone Number',
                          onBlur: handleBlur,
                          value: values.Mobile,
                          onChange: handleChange,
                          helperText: touched.Mobile && errors.Mobile,
                          error: Boolean(errors.Mobile && touched.Mobile),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <SimpleRadioNew
                        props={{
                          Lable: 'Gender',
                          Value: gender,
                          Name: 'Gender',
                          Arealable: 'Gender',
                          Change: handleChange1,
                          Radiobutton: [
                            { name: 'Male', value: 'male' },
                            { name: 'Female', value: 'female' },
                            { name: 'Other', value: 'other' },
                          ],
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <LoadingButton
                        variant="contained"
                        type="submit"
                        loading={loading}
                        className={classes.btn2}
                      >
                        Update Details
                      </LoadingButton>
                    </Grid>
                  </Grid>
                </form>
              )}
            </Formik>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          className={classes.profile0}
        >
          <AccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon style={{ fontSize: '15px' }} />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            className={classes.profile04}
          >
            <Typography className={classes.ty0}>
              <KeyIcon />
            </Typography>
            <Typography className={classes.ty1}>Change Password</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Formik
              onSubmit={handleFormSubmittab2}
              initialValues={initialValuestab2}
              validationSchema={validationSchematab2}
            >
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12}>
                      {/* <SimpleForms
                        props={{
                          type: 'text',
                          name: 'Old Password',
                          label: 'Old Password',
                          variant: 'outlined',
                          defaultValue: '',
                          value: '',
                        }}
                      /> */}
                      <SimpleFormNew
                        props={{
                          type: 'password',
                          name: 'Oldpassword',
                          label: 'Old Password',
                          onBlur: handleBlur,
                          value: values.Oldpassword,
                          onChange: handleChange,
                          helperText: touched.Oldpassword && errors.Oldpassword,
                          error: Boolean(errors.Oldpassword && touched.Oldpassword),
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                      {/* <SimpleForms
                        props={{
                          type: 'text',
                          name: 'New Password',
                          label: 'New Password ',
                          variant: 'outlined',
                          defaultValue: '',
                          value: '',
                        }}
                      /> */}
                      <SimpleFormNew
                        props={{
                          type: 'password',
                          name: 'Newpassword',
                          label: 'New Password',
                          onBlur: handleBlur,
                          value: values.Newpassword,
                          onChange: handleChange,
                          helperText: touched.Newpassword && errors.Newpassword,
                          error: Boolean(errors.Newpassword && touched.Newpassword),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      {/* <SimpleForms
                        props={{
                          type: 'text',
                          name: 'Confirm Password ',
                          label: 'Confirm Password ',
                          variant: 'outlined',
                          defaultValue: '',
                          value: '',
                        }}
                      /> */}
                      <SimpleFormNew
                        props={{
                          type: 'password',
                          name: 'Confirmpassword',
                          label: 'Confirm Password',
                          onBlur: handleBlur,
                          value: values.Confirmpassword,
                          onChange: handleChange,
                          helperText: touched.Confirmpassword && errors.Confirmpassword,
                          error: Boolean(errors.Confirmpassword && touched.Confirmpassword),
                        }}
                      />
                      {/* <Button type="submit" className={classes.btn22}>
                Change Cassword
              </Button> */}
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <LoadingButton
                        variant="contained"
                        type="submit"
                        loading={loading}
                        className={classes.btn2}
                      >
                        Change Password
                      </LoadingButton>
                    </Grid>
                  </Grid>
                </form>
              )}
            </Formik>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
          className={classes.profile0}
        >
          <AccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon style={{ fontSize: '15px' }} />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            className={classes.profile04}
          >
            <Typography className={classes.ty0}>
              <PersonPinIcon />
            </Typography>
            <Typography className={classes.ty1}>Avater</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Formik
              onSubmit={handleFormSubmittab3}
              initialValues={initialValuestab3}
              validationSchema={validationSchematab3}
            >
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Label style={{ marginBottom: '10px' }}>Change Avatar</Label>

                  <Upload action="" listType="picture" maxCount={1} {...props}>
                    <Buttonimage icon={<FolderOpenOutlined />} className={classes.file}>
                      {' '}
                      Single image
                    </Buttonimage>
                  </Upload>
                  {/* <Button type="submit" style={{ marginTop: '20px' }} className={classes.btn2}>
                    Update Avater
              </Button> */}
                  <LoadingButton
                    variant="contained"
                    type="submit"
                    style={{ marginTop: '20px' }}
                    loading={loading}
                    className={classes.btn2}
                  >
                    Update Avater
                  </LoadingButton>
                </form>
              )}
            </Formik>
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  );
};

export default Profile;
