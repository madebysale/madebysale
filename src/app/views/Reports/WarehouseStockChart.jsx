import React from 'react';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import Grid from '@mui/material/Grid';
import { Typography } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
// import PieRechartComponent from './PieRechartComponent';
import { Pie } from '@nivo/pie';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));
const useStyles = makeStyles((theme) => ({
  totaltext: {
    width: '100%',
    backgroundColor: '#2eadd3',
    boxShadow: 'rgb(99 99 99 / 20%) 0px 2px 8px 0px',
    textAlign: 'center',
    color: '#fff',
    padding: '20px',
  },
}));
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const data = [
  {
    id: 'Stock Value by Cost',
    label: 'Stock Value by Cost',
    value: 175.8,
    color: 'hsl(224, 90%, 41%)',
  },
  {
    id: 'Stock Value by Price',
    label: 'Stock Value by Price',
    value: 175.8,
    color: 'hsl(237, 100%, 4%)',
  },
];
const WarehouseStockChart = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: 'Material', path: '/material' },
            { name: 'Warehouse StockChart' },
          ]}
        />
      </Box>
      <SimpleCard>
        <Box style={{ border: '1px solid rgb(213 203 203)', padding: '10px 5px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Typography>
                Warehouse Stock Value by Cost and Price. Please select the warehouse on right to get
                the value for selected warehouse.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <div className={classes.totaltext}>
              <Typography>1.00</Typography>
              <Typography>Total Items</Typography>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div style={{ background: 'rgb(120, 205, 81)' }} className={classes.totaltext}>
              <Typography>7.00 </Typography>
              <Typography>Total Quantity</Typography>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <div style={styles}>
            <Pie
              width={600}
              height={400}
              data={data}
              margin={{
                top: 40,
                right: 10,
                bottom: 80,
                left: 10,
              }}
              innerRadius={0}
              padAngle={0.7}
              cornerRadius={3}
              colorBy="id"
              borderColor="inherit:darker(0.6)"
              radialLabelsSkipAngle={10}
              radialLabelsTextXOffset={6}
              radialLabelsTextColor="#333333"
              radialLabelsLinkOffset={0}
              radialLabelsLinkDiagonalLength={16}
              radialLabelsLinkHorizontalLength={24}
              radialLabelsLinkStrokeWidth={1}
              radialLabelsLinkColor="inherit"
              slicesLabelsSkipAngle={10}
              slicesLabelsTextColor="#333333"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              theme={{
                tooltip: {
                  container: {
                    fontSize: '13px',
                  },
                },
                labels: {
                  text: { color: '#555' },
                },
              }}
            />
          </div>
        </Grid>
      </SimpleCard>
    </Container>
  );
};

export default WarehouseStockChart;
