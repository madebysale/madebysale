import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Box, styled } from '@mui/system';
import AutocompleteComboNew from '../material-kit/auto-complete/AutocompleteComboNew';
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
  ShopName: 'Stock Manager Advance with All Modules',
  Shipping: '0',
  Description: 'Stock Manager Advance with All Modules',
  Warehouse: '',
  Products: '',
  Productspagedescription: 'Jewelry',
  Email: 'info@tecdiary.com',
  AboutPage: '',
  TermsPage: '',
  PrivacyPolicyPage: '',
  ContactPage: '',
  PaymentText: '',
  Biller: '',
  FollowText: 'Please click the link below to follow us on social media.',
  Facebook: 'http://facebook.com/tecdiary',
  Twitter: 'http://facebook.com/tecdiary',
  CookieMessage:
    'We use cookies to improve your experience on our website. By browsing this website, you agree to our use of cookies.',
  CookiePage: '',
  HideBrands: '',
  Disablecart: '',
  Instgram: '',
  Phone: '',
  Privateshop: '',
  GooglePlus: '',
};

// form field validation schema
const validationSchema = Yup.object().shape({
  ShopName: Yup.string()
    .min(6, 'ShopName must be 6 character length')
    .required('Shop Name is required!'),

  Shipping: Yup.string()
    .min(6, 'Shipping must be 6 character length')
    .required('Shipping is required!'),

  Description: Yup.string()
    .min(6, 'Description must be 6 character length')
    .required('Description is required!'),

  Warehouse: Yup.string()
    .min(6, 'Warehouse must be 6 character length')
    .required('Warehouse is required!'),

  Products: Yup.string()
    .min(6, 'Products must be 6 character length')
    .required('Products is required!'),

  Productspagedescription: Yup.string()
    .min(6, 'Productspagedescription must be 6 character length')
    .required('Products page description is required!'),

  Email: Yup.string()
    .email()
    .required('Email is required!'),

  PaymentText: Yup.string()
    .min(6, 'PaymentText must be 6 character length')
    .required('Payment Text is required!'),

  TermsPage: Yup.string()
    .min(6, 'TermsPage must be 6 character length')
    .required('Terms Page is required!'),
  AboutPage: Yup.string()
    .min(6, 'AboutPage must be 6 character length')
    .required('About Page is required!'),

  PrivacyPolicyPage: Yup.string()
    .min(6, 'PrivacyPolicyPage must be 6 character length')
    .required('Privacy Policy Page is required!'),

  ContactPage: Yup.string()
    .min(6, 'ContactPage must be 6 character length')
    .required('Contact Page is required!'),

  Biller: Yup.string()
    .min(6, 'Biller must be 6 character length')
    .required('Biller  is required!'),

  FollowText: Yup.string()
    .min(6, 'FollowText must be 6 character length')
    .required('Follow Text is required!'),

  Facebook: Yup.string()
    .min(6, 'Facebook must be 6 character length')
    .required('Facebook  is required!'),

  Twitter: Yup.string()
    .min(6, 'Twitter must be 6 character length')
    .required('Twitter is required!'),

  CookieMessage: Yup.string()
    .min(6, 'CookieMessage must be 6 character length')
    .required('Cookie Message is required!'),

  CookiePage: Yup.string()
    .min(6, 'CookiePage must be 6 character length')
    .required('Cookie Page  is required!'),
  HideBrands: Yup.string()
    .min(6, 'HideBrands must be 6 character length')
    .required('Hide Brands is required!'),
  Disablecart: Yup.string()
    .min(6, 'Disablecart must be 6 character length')
    .required('Disable cart is required!'),
  Instgram: Yup.string()
    .min(6, 'Instgram must be 6 character length')
    .required('Instgram is required!'),

  Phone: Yup.number()
    .min(6, 'Phone must be 6 character length')
    .required('number is required!'),

  Privateshop: Yup.number()
    .min(6, 'Privateshop must be 6 character length')
    .required('Privateshop is required!'),

  GooglePlus: Yup.number()
    .min(6, 'GooglePlus must be 6 character length')
    .required('GooglePlus is required!'),
});

const ShopSettings = (props) => {
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Shop Settings' }]}
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
                  <Grid item xs={12} md={6}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'ShopName',
                        label: 'Shop Name',
                        onBlur: handleBlur,
                        value: values.ShopName,
                        onChange: handleChange,
                        helperText: touched.ShopName && errors.ShopName,
                        error: Boolean(errors.ShopName && touched.ShopName),
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
                        name: 'Productspagedescription ',
                        label: 'Products page description ',
                        onBlur: handleBlur,
                        value: values.Productspagedescription,
                        onChange: handleChange,
                        helperText:
                          touched.Productspagedescription && errors.Productspagedescription,
                        error: Boolean(
                          errors.Productspagedescription && touched.Productspagedescription
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <SimpleFormNew
                      props={{
                        type: 'number',
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
                  <Grid item xs={12} md={6}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
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
                        name: 'Products',
                        label: 'Products page (grid style)',
                        value: values.Products,
                        onBlur: handleBlur,
                        onChange: handleChange('Products'),
                        helperText: touched.Products && errors.Products,
                        error: Boolean(errors.Products && touched.Products),
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
                        name: 'AboutPage',
                        label: 'About Page',
                        value: values.AboutPage,
                        onBlur: handleBlur,
                        onChange: handleChange('AboutPage'),
                        helperText: touched.AboutPage && errors.AboutPage,
                        error: Boolean(errors.AboutPage && touched.AboutPage),
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
                        name: 'TermsPage',
                        label: 'Terms Page',
                        value: values.TermsPage,
                        onBlur: handleBlur,
                        onChange: handleChange('TermsPage'),
                        helperText: touched.TermsPage && errors.TermsPage,
                        error: Boolean(errors.TermsPage && touched.TermsPage),
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
                        name: 'PrivacyPolicyPage ',
                        label: 'Privacy Policy Page ',
                        value: values.PrivacyPolicyPage,
                        onBlur: handleBlur,
                        onChange: handleChange('PrivacyPolicyPage'),
                        helperText: touched.PrivacyPolicyPage && errors.PrivacyPolicyPage,
                        error: Boolean(errors.PrivacyPolicyPage && touched.PrivacyPolicyPage),
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
                        name: 'ContactPage',
                        label: 'Contact Page',
                        value: values.ContactPage,
                        onBlur: handleBlur,
                        onChange: handleChange('ContactPage'),
                        helperText: touched.ContactPage && errors.ContactPage,
                        error: Boolean(errors.ContactPage && touched.ContactPage),
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
                        name: 'PaymentText',
                        label: 'Payment Text',
                        value: values.PaymentText,
                        onBlur: handleBlur,
                        onChange: handleChange('PaymentText'),
                        helperText: touched.PaymentText && errors.PaymentText,
                        error: Boolean(errors.PaymentText && touched.PaymentText),
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
                        name: 'Privateshop',
                        label: 'Private shop (for members only) ',
                        value: values.Privateshop,
                        onBlur: handleBlur,
                        onChange: handleChange('Privateshop'),
                        helperText: touched.Privateshop && errors.Privateshop,
                        error: Boolean(errors.Privateshop && touched.Privateshop),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'Shipping',
                        label: 'Shipping',
                        onBlur: handleBlur,
                        value: values.Shipping,
                        onChange: handleChange,
                        helperText: touched.Shipping && errors.Shipping,
                        error: Boolean(errors.Shipping && touched.Shipping),
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
                        name: 'Biller',
                        label: 'Biller',
                        value: values.Biller,
                        onBlur: handleBlur,
                        onChange: handleChange('Biller'),
                        helperText: touched.Biller && errors.Biller,
                        error: Boolean(errors.Biller && touched.Biller),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'FollowText',
                        label: 'Follow Text',
                        onBlur: handleBlur,
                        value: values.FollowText,
                        onChange: handleChange,
                        helperText: touched.FollowText && errors.FollowText,
                        error: Boolean(errors.FollowText && touched.FollowText),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'Facebook',
                        label: 'Facebook',
                        onBlur: handleBlur,
                        value: values.Facebook,
                        onChange: handleChange,
                        helperText: touched.Facebook && errors.Facebook,
                        error: Boolean(errors.Facebook && touched.Facebook),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'Twitter',
                        label: 'Twitter',
                        onBlur: handleBlur,
                        value: values.Twitter,
                        onChange: handleChange,
                        helperText: touched.Twitter && errors.Twitter,
                        error: Boolean(errors.Twitter && touched.Twitter),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'GooglePlus',
                        label: 'Google Plus',
                        onBlur: handleBlur,
                        value: values.GooglePlus,
                        onChange: handleChange,
                        helperText: touched.GooglePlus && errors.GooglePlus,
                        error: Boolean(errors.GooglePlus && touched.GooglePlus),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'Instgram',
                        label: 'Instgram',
                        onBlur: handleBlur,
                        value: values.Instgram,
                        onChange: handleChange,
                        helperText: touched.Instgram && errors.Instgram,
                        error: Boolean(errors.Instgram && touched.Instgram),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <SimpleFormNew
                      props={{
                        type: 'text',
                        name: 'CookieMessage',
                        label: 'Cookie Message',
                        onBlur: handleBlur,
                        value: values.CookieMessage,
                        onChange: handleChange,
                        helperText: touched.CookieMessage && errors.CookieMessage,
                        error: Boolean(errors.CookieMessage && touched.CookieMessage),
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
                        name: 'CookiePage',
                        label: 'Cookie Page',
                        value: values.CookiePage,
                        onBlur: handleBlur,
                        onChange: handleChange('CookiePage'),
                        helperText: touched.CookiePage && errors.CookiePage,
                        error: Boolean(errors.CookiePage && touched.CookiePage),
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
                        name: 'HideBrands',
                        label: 'Hide Brands/Categories with 0 product',
                        value: values.HideBrands,
                        onBlur: handleBlur,
                        onChange: handleChange('HideBrands'),
                        helperText: touched.HideBrands && errors.HideBrands,
                        error: Boolean(errors.HideBrands && touched.HideBrands),
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
                        name: 'Disablecart',
                        label: 'Disable cart & price',
                        value: values.Disablecart,
                        onBlur: handleBlur,
                        onChange: handleChange('Disablecart'),
                        helperText: touched.Disablecart && errors.Disablecart,
                        error: Boolean(errors.Disablecart && touched.Disablecart),
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography style={{ padding: '10px 0px' }}>Logo</Typography>
                    <Singleimage />
                    <Typography style={{ padding: '20px 0px' }}>
                      Bank Details (if you want to accept direct bank-in/transfer payments)
                    </Typography>
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

export default ShopSettings;
