import React from 'react';
import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));
const useStyles = makeStyles((theme) => ({
  box4: {
    width: '100%',
    border: '1px solid #d3cccc',
    textAlign: 'center',
    color: '#000',
    borderRadius: '5px',
    padding: '100px',
  },
}));
const BestSellers = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Best Sellers' }]}
        />
      </Box>
      <SimpleCard>
        {/* <SimpleTable/> */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography>Aug 2022</Typography>
            <Box className={classes.box4}></Box>
          </Grid>
          <Grid item xs={6}>
            <Typography>Jul 2022</Typography>
            <Box className={classes.box4}></Box>
          </Grid>
          <Grid item xs={6}>
            <Typography>Jun 2022 - Aug 2022</Typography>
            <Box className={classes.box4}></Box>
          </Grid>
          <Grid item xs={6}>
            <Typography>Sep 2021 - Aug 2022</Typography>
            <Box className={classes.box4}></Box>
          </Grid>
        </Grid>
      </SimpleCard>
    </Container>
  );
};

export default BestSellers;
