import React from 'react';
import { Box } from '@mui/system';
import { Button } from '@material-ui/core';
import { Breadcrumb, SimpleCard } from 'app/components';
import SimpleForm from '../material-kit/forms/SimpleForm';
import { makeStyles } from '@material-ui/styles';
import AutocompleteCombo from '../material-kit/auto-complete/AutocompleteCombo';
import Showhideformcheckbox from '../material-kit/checkbox/Showhideformcheckbox';
import SearchwithAadtable from '../material-kit/checkbox/SearchwithAadtable';
import SimpleCheckbox from '../material-kit/checkbox/SimpleCheckbox';
import FormGroupCheckbox from '../material-kit/checkbox/FormGroupCheckbox';
import Singleimage from '../material-kit/uploadimage/Singleimage';
import Multipleimage from '../material-kit/uploadimage/Multipleimage';
import Appeditor from '../material-kit/ck/Appeditor';
import Addfeild from '../material-kit/forms/Addfeild';
import { Grid, styled } from '@mui/material';
import Label from '../material-kit/tables/Label';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const useStyles = makeStyles((theme) => ({
  text1: {
    // bottom: "10px",
    margin: '0px 0px 8px 0px',
  },
  btn2: {
    // marginTop: '14px',
    padding: '7px 23px',
    border: 'none',
    color: '#fff',
    background: '#303f9f',
  },
}));

const Editproduct = () => {
  const classes = useStyles();
  const handleChange = (event) => {
    console.log(event);
  };
  const handleChange1 = (event) => {};
  const handleChange2 = (event) => {};

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Add Product' }]}
        />
      </Box>
      <SimpleCard>
        <Grid container spacing={2}>
          <Grid item lg={6} xs={12}>
            <SimpleForm
              props={{
                type: 'text',
                name: 'ProductName',
                label: 'Product Name',
                onChange: { handleChange },
                value: '',
                validators: 'required',
                errorMessages: 'this field is required',
              }}
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <SimpleForm
              props={{
                type: 'text',
                name: 'SecondaryName',
                label: 'Secondary Name',
                onChange: { handleChange1 },
                value: '',
                validators: 'required',
                errorMessages: 'this field is required',
              }}
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <AutocompleteCombo
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
                name: 'Barcode Symbology',
                label: 'Barcode Symbology',
                value: [],
                onChange: { handleChange },
              }}
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <SimpleForm
              props={{
                type: 'text',
                name: 'ProductCost ',
                label: 'Product Cost',
                onChange: { handleChange2 },
                value: '',
                validators: 'required',
                errorMessages: 'this field is required',
              }}
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <AutocompleteCombo
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
                name: 'Product Unit',
                label: 'Product Unit',
                value: [],
                onChange: { handleChange },
              }}
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <AutocompleteCombo
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
                name: 'Category',
                label: 'Category',
                value: [],
                onChange: { handleChange },
              }}
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <AutocompleteCombo
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
                name: 'Default Sale Unit',
                label: 'Default Sale Unit',
                value: [],
                onChange: { handleChange },
              }}
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <AutocompleteCombo
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
                name: 'Product Tax',
                label: 'Product Tax',
                value: [],
                onChange: { handleChange },
              }}
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <AutocompleteCombo
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
                name: 'Product Code ',
                label: 'Product Code',
                value: [],
                onChange: { handleChange },
              }}
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <AutocompleteCombo
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
                name: 'Product Type',
                label: 'Product Type',
                value: [],
                onChange: { handleChange },
              }}
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <SimpleForm
              props={{
                type: 'text',
                name: 'Slug',
                label: 'Slug',
                onChange: { handleChange2 },
                value: '',
                validators: 'required',
                errorMessages: 'this field is required',
              }}
            />
          </Grid>

          <Grid item lg={6} xs={12}>
            <SimpleForm
              props={{
                type: 'text',
                name: 'Weight',
                label: 'Weight',
                onChange: { handleChange2 },
                value: '',
                validators: 'required',
                errorMessages: 'this field is required',
              }}
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <SimpleForm
              props={{
                type: 'text',
                name: 'ProductPrice  ',
                label: 'Product Price',
                onChange: { handleChange2 },
                value: '',
                validators: 'required',
                errorMessages: 'this field is required',
              }}
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <SimpleForm
              props={{
                type: 'text',
                name: 'HSN Code',
                label: 'HSNCode',
                onChange: { handleChange2 },
                value: '',
                validators: 'required',
                errorMessages: 'this field is required',
              }}
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <AutocompleteCombo
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
                name: 'Sub Category',
                label: 'Sub Category',
                value: [],
                onChange: { handleChange },
              }}
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <AutocompleteCombo
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
                name: 'Default Purchase Unit',
                label: 'Default Purchase Unit',
                value: [],
                onChange: { handleChange },
              }}
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <AutocompleteCombo
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
                name: 'Tax Method',
                label: 'Tax Method',
                value: [],
                onChange: { handleChange },
              }}
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <SimpleCheckbox />
          </Grid>

          <Grid item lg={6} xs={12}>
            <Singleimage />
          </Grid>

          <Grid item lg={6} xs={12}>
            <Multipleimage />
          </Grid>
          <Grid item lg={12} xs={12}>
            <FormGroupCheckbox />
          </Grid>
          <Grid item lg={6} xs={12}>
            {' '}
            <SearchwithAadtable />
          </Grid>
          <Grid item lg={6} xs={12}>
            <Showhideformcheckbox />
          </Grid>

          <Grid item lg={12} xs={12}>
            <Addfeild />
          </Grid>
          {/* <Grid item lg={12} xs={12}>
            <FormGroupCheckbox />
          </Grid> */}
          <Grid item lg={6} xs={12}>
            <Label className={classes.text1}>Product Details</Label>
            <Appeditor />
          </Grid>
          <Grid item lg={6} xs={12}>
            <Label className={classes.text1}>Product details for invoice</Label>
            <Appeditor />
          </Grid>
          <Grid item lg={12}>
            <Button type="submit" className={classes.btn2}>
              Add Product
            </Button>
          </Grid>
        </Grid>
      </SimpleCard>
    </Container>
  );
};

export default Editproduct;
