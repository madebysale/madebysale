import { Box, styled } from '@mui/system';
import AutocompleteComboNew from '../material-kit/auto-complete/AutocompleteComboNew';
import { Breadcrumb, SimpleCard } from 'app/components';
import Label from '../material-kit/tables/Label';
import Grid from '@mui/material/Grid';
import SimpleFormNew from '../material-kit/forms/SimpleFormNew';
import { makeStyles } from '@material-ui/styles';
import Fileattachment from '../material-kit/uploadimage/Fileattachment';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import useAuth from 'app/hooks/useAuth';
import { useState } from 'react';
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
}));

const handleChange = (event) => {
  console.log(event);
};
// inital login credentials
const initialValues = {
  Reference: '',
  Category: '',
  Amount: '',
  Warehouse: '',
  // AttachDocument: '',
  // Note: ''
};

// form field validation schema
const validationSchema = Yup.object().shape({
  Reference: Yup.string()
    .min(6, 'Reference must be 6 character length')
    .required('Reference is required!'),
  Category: Yup.string()
    .min(6, 'Category must be 6 character length')
    .required('Category is required!'),
  Amount: Yup.string()
    .min(6, 'Amount must be 6 character length')
    .required('Amount is required!'),
  Warehouse: Yup.string()
    .min(6, 'Warehouse must be 6 character length')
    .required('Warehouse is required!'),
});

const AddExpense = (props) => {
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
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Add Expense' }]}
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
                {/* <Grid item xs={12} md={6}>
                  <Date />
                </Grid> */}
                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Reference',
                      label: 'Reference',
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
                      name: 'Category',
                      label: 'Category',
                      value: values.Category,
                      onBlur: handleBlur,
                      onChange: handleChange('Category'),
                      helperText: touched.Category && errors.Category,
                      error: Boolean(errors.Category && touched.Category),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SimpleFormNew
                    props={{
                      type: 'text',
                      name: 'Amount',
                      label: 'Amount',
                      onBlur: handleBlur,
                      value: values.Amount,
                      onChange: handleChange,
                      helperText: touched.Amount && errors.Amount,
                      error: Boolean(errors.Amount && touched.Amount),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AutocompleteComboNew
                    props={{
                      id: 'Warehouse',
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
                <Grid item xs={12}>
                  <Label>Note</Label>
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
                <Grid item xs={12}>
                  <LoadingButton
                    variant="contained"
                    type="submit"
                    loading={loading}
                    className={classes.btn2}
                  >
                    Add Expense
                  </LoadingButton>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </SimpleCard>
    </Container>
  );
};

export default AddExpense;
