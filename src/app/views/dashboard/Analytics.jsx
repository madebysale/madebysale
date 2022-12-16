import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Grid, styled, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import Typography from '@material-ui/core/Typography';
import Campaigns from './shared/Campaigns';
import DoughnutChart from './shared/Doughnut';
import RowCards from './shared/RowCards';
import StatCards from './shared/StatCards';
import StatCards2 from './shared/StatCards2';
import TopSellingTable from './shared/TopSellingTable';
import UpgradeCard from './shared/UpgradeCard';
import { makeStyles } from '@material-ui/core/styles';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));
const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginRight: '.5rem',
  textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));

const H4 = styled('h4')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginBottom: '16px',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
}));
const useStyles = makeStyles((theme) => ({
  box0: {
    width: '100%',
    backgroundColor: '#fff',
    boxShadow: 'rgb(13 13 13 / 5%) 0px 10px 8px',
    padding: '30px 30px',
    marginBottom: '15px',
    // boxShadow:
    //   'rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2)-15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px',
  },
  profile4: {
    background: '#fff',
    color: '#000',
    margin: '18px 0px',
    boxShadow: 'rgb(13 13 13 / 5%) 0px 10px 8px',
  },
  tab1: {
    // border: '1px solid #d7cece',
    // padding: '4px 0px',
  },
  tab: {
    // background: '#fff',
    background: '#e0e0e07a',
    border: '1px solid #b5b5b559',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const Analytics = () => {
  const { palette } = useTheme();
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log('value', value);

  const handleChangeButton = (e) => {
    setValue(e);
  };
  return (
    <>
      <Container>
        <div className={classes.box0}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6} sm={6} lg={2}>
              <StatCards
                style={{ backgroundColor: '#2eadd3' }}
                icon={<ProductionQuantityLimitsIcon />}
                title="Products"
                url="/Product/ListProducts"
              />
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={2}>
              <StatCards
                style={{ backgroundColor: 'rgb(66, 139, 202)' }}
                icon={<FavoriteIcon />}
                title="Sale"
                url="/Sales/SalesList"
              />
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={2}>
              <StatCards
                style={{ backgroundColor: 'rgb(255, 84, 84)' }}
                icon={<FavoriteBorderIcon />}
                title="Quotations"
                url="/Quotations/Listquotation"
              />
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={2}>
              <StatCards
                style={{ backgroundColor: 'rgb(173, 39, 39)' }}
                icon={<ShoppingBasketIcon />}
                title="Purchases"
                url="/Purchases/AddExpense"
              />
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={2}>
              <StatCards
                style={{ backgroundColor: 'rgb(120, 205, 81)' }}
                icon={<TransferWithinAStationIcon />}
                title="Transfers"
                url="/Transfers/ListTransfers"
              />
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={2}>
              <StatCards
                style={{ backgroundColor: 'rgb(250, 187, 61)' }}
                icon={<GroupIcon />}
                title="Customers"
                url="/People/ListUsers"
              />
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={2}>
              <StatCards
                style={{ backgroundColor: 'rgb(48, 63, 159)' }}
                icon={<GroupIcon />}
                title="Suppliers"
                url="/People/ListSuppliers"
              />
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={2}>
              <StatCards
                style={{ backgroundColor: 'rgb(123, 31, 162)' }}
                icon={<NotificationsActiveIcon />}
                title="Notifications"
                url="/Notifications/Notifications"
              />
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={2}>
              <StatCards
                style={{ backgroundColor: 'rgb(34, 42, 69)' }}
                icon={<GroupIcon />}
                title="Users"
                url="/People/ListUsers'"
              />
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={2}>
              <StatCards
                style={{ backgroundColor: 'rgb(0, 0, 0)' }}
                icon={<SettingsIcon />}
                title="Settings"
                url="/Settings/SystemSettings"
              />
            </Grid>
          </Grid>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12} md={12} sm={12} lg={12}>
            <div className={classes.profile4}>
              {/* <PersonPinIcon /> */}
              <Tabs
                className={classes.tab5}
                value={value}
                onChange={handleChange}
                // indicatorColor="primary"
              >
                <Tab className={classes.tab} label="Sales" {...a11yProps(0)} />
                <Tab className={classes.tab} label="Quotations" {...a11yProps(1)} />
                <Tab className={classes.tab} label="Purchases" {...a11yProps(2)} />
                <Tab className={classes.tab} label="Transfers" {...a11yProps(3)} />
                <Tab className={classes.tab} label="Customers" {...a11yProps(4)} />
                <Tab className={classes.tab} label="Suppliers" {...a11yProps(5)} />
              </Tabs>
              <TabPanel className={classes.tab1} value={value} index={0}>
                <TopSellingTable />
              </TabPanel>
              <TabPanel className={classes.tab1} value={value} index={1}>
                <TopSellingTable />
              </TabPanel>
              <TabPanel className={classes.tab1} value={value} index={2}>
                <TopSellingTable />
              </TabPanel>
              <TabPanel className={classes.tab1} value={value} index={3}>
                <TopSellingTable />
              </TabPanel>
              <TabPanel className={classes.tab1} value={value} index={4}>
                <TopSellingTable />
              </TabPanel>
              <TabPanel className={classes.tab1} value={value} index={5}>
                <TopSellingTable />
              </TabPanel>
            </div>
          </Grid>
        </Grid>
        {/* 
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <TopSellingTable />
            <StatCards2 />

            <H4>Ongoing Projects</H4>
            <RowCards />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Traffic Sources</Title>
              <SubTitle>Last 30 days</SubTitle>

              <DoughnutChart
                height="300px"
                color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
              />
            </Card>

            <UpgradeCard />
            <Campaigns />
          </Grid>
        </Grid> */}
      </Container>
    </>
  );
};

export default Analytics;
