import React, { useState } from 'react';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import { Button } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Appeditor from '../material-kit/ck/Appeditor';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Label from '../material-kit/tables/Label';
import Fileattachment from '../material-kit/uploadimage/Fileattachment';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const useStyles = makeStyles((theme) => ({
  text3: {
    fontSize: '14px',
    textAlign: 'left',
    paddingBottom: '5px',
  },
  text4: {
    border: '1px solid #dbcdcd',
    width: '100%',
    padding: '10px',
    fontWeight: '600',
  },
  btn2: {
    padding: '7px 23px',
    border: 'none',
    color: '#fff',
    background: '#303f9f',
  },
  box2: {
    border: '1px solid #dbcdcd',
    padding: '14px',
    marginBottom: '15px',
    width: '100%',
  },
  btn3: {
    padding: '7px 23px',
    border: 'none',
    color: '#fff',
    background: '#ab043a',
    margin: '0px 10px',
  },
}));
const Stockdetails = () => {
  const classes = useStyles();
  const [value, setValue] = useState('ForBoth');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChange1 = (event) => {};

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Add Notification' }]}
        />
      </Box>
      <SimpleCard>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography className={classes.text3}>
              Please fill in the information below. The field labels marked with * are required
              input fields.
            </Typography>
          </Grid>

          <Typography className={classes.text4}> Stock Count</Typography>
          <Box className={classes.box2}>
            <Grid container spacing={1}>
              <Grid item xs={6} md={6}>
                <Typography>Warehouse</Typography>
              </Grid>

              <Grid item xs={6} md={6}>
                <Typography>Impetrosys ( WH1 )</Typography>
              </Grid>

              <Grid item xs={6} md={6}>
                <Typography>Date</Typography>
              </Grid>

              <Grid item xs={6} md={6}>
                <Typography>18/11/2020 12:34</Typography>
              </Grid>

              <Grid item xs={6} md={6}>
                <Typography>Reference</Typography>
              </Grid>

              <Grid item xs={6} md={6}>
                <Typography></Typography>
              </Grid>

              <Grid item xs={6} md={6}>
                <Typography>Type</Typography>
              </Grid>

              <Grid item xs={6} md={6}>
                <Typography>Full</Typography>
              </Grid>
            </Grid>
          </Box>

          <Grid item xs={12}>
            <Box className={classes.box2}>
              <Typography>
                The first line in downloaded csv file should remain as it is. Please do not change
                the order of columns. The correct column order is (Product Code, Product Name,
                Variant, Expected, Counted) & you must follow this. Please make sure the csv file is
                UTF-8 encoded and not saved with byte order mark (BOM). You just need to update the
                COUNTED column in the downloaded csv file.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Fileattachment
              props={{
                label: 'Upload File',
              }}
            />
          </Grid>
          <Label sx={{ mt: 1 }}>Note</Label>
          <Grid item xs={12}>
            <Appeditor />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" className={classes.btn2}>
              Submit
            </Button>
            <Button type="submit" className={classes.btn3}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </SimpleCard>
    </Container>
  );
};

export default Stockdetails;
