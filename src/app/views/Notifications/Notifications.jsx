import { Stack } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import SimpleTable from '../material-kit/tables/SimpleTable';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const useStyles = makeStyles((theme) => ({
  boxt1: {
    border: '1px solid #000',
  },
  text3: {
    fontSize: '13px',
    textAlign: 'center',
  },
}));

const Notifications = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Notifications' }]}
        />
      </Box>
      <SimpleCard>
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <Typography className={classes.text3}>
              Please use the table below to navigate or filter the results. You can download the
              table as excel and pdf.
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <NavLink to="/Notifications/Addnotification">
              <AddIcon />
            </NavLink>
          </Grid>
        </Grid>
        <SimpleTable />
      </SimpleCard>
    </Container>
  );
};

export default Notifications;
