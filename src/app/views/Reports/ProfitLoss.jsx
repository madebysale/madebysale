import React from 'react';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import MoneyIcon from '@mui/icons-material/Money';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#fff',
    boxShadow: 'none',
    height: '100%',
  },
  p1: {
    fontSize: '13px',
    margin: '2px 0px 0px 0px',
  },
  icon: {
    textAlign: 'end',
    opacity: '37%',
  },
  p2: {
    fontSize: '14px',
    margin: '0px',
    textAlign: 'start',
    opacity: '37%',
  },
  newvit: {
    display: 'flex',
  },
}));

const ProfitLoss = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Profit Loss' }]}
        />
      </Box>
      <SimpleCard>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper} style={{ background: '#fa603d' }}>
              {/* <div className={classes.newvit}> */}
              <Typography variant="h6">
                <p className={classes.p2}>Purchases </p>
                <span className={classes.icon}>
                  {' '}
                  <ShoppingCartIcon sx={{ fontSize: 40 }} />
                </span>
              </Typography>
              {/* </div> */}
              <Typography variant="h4">0.00</Typography>
              <Typography variant="h6">
                <p className={classes.p1}>0 Purchases </p>
              </Typography>
              <Typography variant="h6">
                <p className={classes.p1}>0.00 Paid & 0.00 Tax</p>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper} style={{ background: '#fa603d' }}>
              <Typography variant="h6">
                <p className={classes.p2}>Sale </p>
                <span className={classes.icon}>
                  {' '}
                  <LoyaltyIcon sx={{ fontSize: 40 }} />
                </span>
              </Typography>

              <Typography variant="h4">0.00</Typography>
              <Typography variant="h6">
                <p className={classes.p1}>0 Sale </p>
              </Typography>
              <Typography variant="h6">
                <p className={classes.p1}>0.00 Paid & 0.00 Tax</p>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper} style={{ background: '#fa603d' }}>
              <Typography variant="h6">
                <p className={classes.p2}>Returns</p>
                <span className={classes.icon}>
                  {' '}
                  <AutorenewIcon sx={{ fontSize: 40 }} />
                </span>
              </Typography>

              <Typography variant="h4">0.00</Typography>
              <Typography variant="h6">
                <p className={classes.p1}>0 Returns</p>
              </Typography>
              <Typography variant="h6">
                <p className={classes.p1}>0.00 Paid & 0.00 Tax</p>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper} style={{ background: '#8e44ad' }}>
              <Typography variant="h6">
                <p className={classes.p2}>Profit and/or Loss</p>
                <span className={classes.icon}>
                  {' '}
                  <MoneyIcon sx={{ fontSize: 40 }} />
                </span>
              </Typography>

              <Typography variant="h4">0.00</Typography>
              <Typography variant="h6">
                <p className={classes.p1}>(0.00 Sales- 0.00 Tax) -(0.00 Purchases- 0.00 Tax)</p>
              </Typography>
              <Typography variant="h6"></Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper} style={{ background: '#8e44ad' }}>
              <Typography variant="h6">
                <p className={classes.p2}>Payments</p>
                <span className={classes.icon}>
                  {' '}
                  <MoneyIcon sx={{ fontSize: 40 }} />
                </span>
              </Typography>

              <Typography variant="h4">0.00</Typography>
              <Typography variant="h6">
                <p className={classes.p1}>
                  0.00 Received - 0.00 Refund - 0.00 Sent - 0.00 Expenses - 0.00 Returns
                </p>
              </Typography>
              <Typography variant="h6"></Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper} style={{ background: '#8e44ad' }}>
              <Typography variant="h6">
                <p className={classes.p2}>Payments Received</p>
                <span className={classes.icon}>
                  {' '}
                  <MoneyIcon sx={{ fontSize: 40 }} />
                </span>
              </Typography>
              {/*               
              <Typography className={classes.icon}>
                <MoneyIcon sx={{ fontSize: 50 }} />
              </Typography> */}
              <Typography variant="h4">0.00</Typography>
              <Typography variant="h6">
                <p className={classes.p1}>0 Received</p>
              </Typography>
              <Typography variant="h6">
                <p className={classes.p1}>
                  0.00 Cash, 0.00 Credit Card, 0.00 Cheque, 0.00 Paypal Pro, 0.00 Stripe
                </p>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper className={classes.paper} style={{ background: '#16a085' }}>
              <Typography variant="h6">
                <p className={classes.p2}>Payments Sent</p>
                <span className={classes.icon}>
                  {' '}
                  <AttachMoneyIcon sx={{ fontSize: 40 }} />
                </span>
              </Typography>
              {/* <Typography className={classes.icon}>
                <AttachMoneyIcon sx={{ fontSize: 50 }} />
              </Typography> */}
              <Typography variant="h4">0.00</Typography>
              <Typography variant="h6">
                <p className={classes.p1}>0 Sent</p>
              </Typography>
              <Typography variant="h6"></Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={3}>
            <Paper className={classes.paper} style={{ background: '#16a085' }}>
              <Typography variant="h6">
                <p className={classes.p2}>Expenses</p>
                <span className={classes.icon}>
                  {' '}
                  <AttachMoneyIcon sx={{ fontSize: 40 }} />
                </span>
              </Typography>
              {/* <Typography className={classes.icon}>
                <AttachMoneyIcon sx={{ fontSize: 50 }} />
              </Typography> */}
              <Typography variant="h4">0.00</Typography>
              <Typography variant="h6">
                <p className={classes.p1}>0 Expenses</p>
              </Typography>
              <Typography variant="h6"></Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={3}>
            <Paper className={classes.paper} style={{ background: '#16a085' }}>
              <Typography variant="h6">
                <p className={classes.p2}>Profit and/or Loss</p>
                <span className={classes.icon}>
                  {' '}
                  <MoneyIcon sx={{ fontSize: 40 }} />
                </span>
              </Typography>
              {/* <Typography className={classes.icon}>
                <MoneyIcon sx={{ fontSize: 50 }} />
              </Typography> */}
              <Typography variant="h4">0.00</Typography>
              <Typography variant="h6">
                <p className={classes.p1}>0.00 Sales- 0.00 Purchases</p>
              </Typography>
              <Typography variant="h6"></Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={3}>
            <Paper className={classes.paper} style={{ background: '#16a085' }}>
              <Typography variant="h6">
                <p className={classes.p2}>Profit and/or Loss</p>
                <span className={classes.icon}>
                  {' '}
                  <MoneyIcon sx={{ fontSize: 40 }} />
                </span>
              </Typography>
              {/* <Typography className={classes.icon}>
                <MoneyIcon sx={{ fontSize: 50 }} />
              </Typography> */}
              <Typography variant="h4">0.00</Typography>
              <Typography variant="h6">
                <p className={classes.p1}>0.00 Sales- 0.00 Tax- 0.00 Purchases</p>
              </Typography>
              <Typography variant="h6"></Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper className={classes.paper} style={{ background: '#e84c8a' }}>
              <Typography variant="h6">
                <p className={classes.p2}>Impetrosys (WH1)</p>
                <span className={classes.icon}>
                  {' '}
                  <MoneyIcon sx={{ fontSize: 40 }} />
                </span>
              </Typography>
              {/* <Typography className={classes.icon}>
                <MoneyIcon sx={{ fontSize: 50 }} />
              </Typography> */}
              <Typography variant="h4">0.00</Typography>
              <Typography variant="h6">
                <p className={classes.p1}>Sales - Purchases - Returns</p>
              </Typography>
              <Typography variant="h6">
                <p className={classes.p1}>0.00 Sales- 0.00 Tax= 0.00 Net Sales</p>
                <p className={classes.p1}>0.00 Purchases- 0.00 Tax = 0.00 Net Purchases</p>
                <p className={classes.p1}>0.00 Returns- 0.00 Tax= 0.00 Net Returns</p>
              </Typography>

              <Typography variant="h4">0.00</Typography>
              <Typography variant="h6">
                <p className={classes.p1}> Net Sales - Net Purchases - Net Returns</p>
              </Typography>

              <Typography variant="h4">0.00</Typography>
              <Typography variant="h6">
                <p className={classes.p1}>0 Expenses</p>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </SimpleCard>
    </Container>
  );
};

export default ProfitLoss;
