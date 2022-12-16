import React, { useState } from 'react';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import { Button } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Appeditor from '../material-kit/ck/Appeditor';
import SimpleForm from '../material-kit/forms/SimpleForm';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Label from '../material-kit/tables/Label';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));
const RadioRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  '& .formControl': {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
  '& .group': { margin: theme.spacing(1, 0), flexDirection: 'row' },
}));
const useStyles = makeStyles((theme) => ({
  text3: {
    fontSize: '13px',
    textAlign: 'left',
    paddingBottom: '10px',
  },
  btn2: {
    padding: '7px 23px',
    border: 'none',
    color: '#fff',
    background: '#303f9f',
  },
}));
const Addnotification = () => {
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
          <Grid item xs={12} md={6}>
            <SimpleForm
              props={{
                type: 'text',
                name: 'From',
                label: 'From',
                onChange: { handleChange1 },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SimpleForm
              props={{
                type: 'text',
                name: 'till',
                label: 'Till',
                onChange: { handleChange1 },
              }}
            />
          </Grid>
          <Label sx={{ mt: 2 }}>comment</Label>
          <Grid item xs={12}>
            <Appeditor />
          </Grid>
          <Grid item xs={12}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={value}
              className="group"
              aria-label="Gender"
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                name="gender1"
                control={<Radio />}
                label="For Customers only"
              />
              <FormControlLabel
                value="male"
                name="gender1"
                control={<Radio />}
                label="For Staff only"
              />
              <FormControlLabel
                value="ForBoth"
                name="gender1"
                control={<Radio />}
                label="For Both"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" className={classes.btn2}>
              Add Notification
            </Button>
          </Grid>
        </Grid>
      </SimpleCard>
    </Container>
  );
};

export default Addnotification;
