import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import Grid from '@mui/material/Grid';
import StatCards from '../../views/dashboard/shared/StatCards';
import { makeStyles } from '@material-ui/core/styles';
import AddchartIcon from '@mui/icons-material/Addchart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StarIcon from '@mui/icons-material/Star';
import MoneyIcon from '@mui/icons-material/Money';
import PieRechartComponent from './PieRechartComponent';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));
const useStyles = makeStyles((theme) => ({
  box0: {
    width: '100%',
    backgroundColor: '#fff',
    boxShadow: 'none',
    padding: '15px',
    marginBottom: '15px',
  },
}));

const OverviewChart = (props) => {
  const classes = useStyles();
  const [data5, setdata] = useState([]);

  useEffect(() => {
    setdata(props.props);
  }, [props]);

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Overview Chart' }]}
        />
      </Box>
      {/* <div className={classes.box0}> */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <StatCards
            style={{ backgroundColor: '#2eadd3' }}
            icon={<AddchartIcon />}
            title="Warehouse Stock Chart"
            url="/Reports/WarehouseStockChart"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCards
            style={{ backgroundColor: '#ad2727' }}
            icon={<AlignVerticalBottomIcon />}
            title="Product Expiry Alerts"
            url="/Reports/ProductsReport"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCards
            style={{ backgroundColor: '#303f9f' }}
            icon={<EventNoteIcon />}
            title="Monthly Sales"
            url="/Reports/MonthlySales"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCards
            style={{ backgroundColor: '#fabb3d' }}
            icon={<MoneyIcon />}
            title="Profit and/or Loss"
            url="/Reports/ProfitLoss"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCards
            style={{ backgroundColor: '#428BCA' }}
            icon={<PeopleAltIcon />}
            title="Suppliers Report"
            url="/Reports/SuppliersReport"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCards
            style={{ backgroundColor: '#428BCA' }}
            icon={<TrendingUpIcon />}
            title="Best Sellers"
            url="/Reports/BestSellers"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCards
            style={{ backgroundColor: '#78cd51' }}
            icon={<DensitySmallIcon />}
            title="Products Report"
            url="/Reports/ProductsReport"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCards
            style={{ backgroundColor: '#7b1fa2' }}
            icon={<FavoriteBorderIcon />}
            title="Sales Report"
            url="/Reports/SalesReport"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCards
            style={{ backgroundColor: '#78cd51' }}
            icon={<StarIcon />}
            title="Purchases Report"
            url="/Reports/PurchasesReport"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCards
            style={{ backgroundColor: '#428BCA' }}
            icon={<PeopleAltIcon />}
            title="Staff Report"
            url="/Reports/StaffReport"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCards
            style={{ backgroundColor: '#ff5454' }}
            icon={<AlignVerticalBottomIcon />}
            title="Product Quantity Alerts"
            url="/Reports/ProductQuantityAlerts"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCards
            style={{ backgroundColor: '#fabb3d' }}
            icon={<EventNoteIcon />}
            title="Daily Sales"
            url="/Reports/DailySales"
          />
        </Grid>
        <Grid item xs={12} md={4} mb={2}>
          <StatCards
            style={{ backgroundColor: '#fabb3d' }}
            icon={<MoneyIcon />}
            title="Payments Report"
            url="/Reports/PaymentsReport"
          />
        </Grid>
        <Grid item xs={12} md={4} mb={2}>
          <StatCards
            style={{ backgroundColor: '#000' }}
            icon={<PeopleAltIcon />}
            title="Customers Report"
            url="/Reports/CustomersReport"
          />
        </Grid>
      </Grid>
      {/* </div> */}
      <SimpleCard>
        <Typography>
          Stock Overview Chart including monthly sales with product tax and order tax (columns),
          purchases (line) and current stock value by cost and price (pie). You can save the graph
          as jpg, png and pdf.
        </Typography>
        <PieRechartComponent />
      </SimpleCard>
    </Container>
  );
};

export default OverviewChart;
