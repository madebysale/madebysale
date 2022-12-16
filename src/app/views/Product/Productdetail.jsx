import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import mobile1 from '../../../../src/public/assets/images/mobile1.png';
import SimpleTable from '../material-kit/tables/SimpleTable';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PrintIcon from '@mui/icons-material/Print';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const useStyles = makeStyles((theme) => ({
  profilepic: {
    width: '100%',
  },
  product: {
    color: '#000',
    padding: '45px 20px',
  },
  test07: {
    textAlign: 'left',
    paddingBottom: '21px',
  },
  test6: {
    fontSize: '13px',
  },
  product1: {
    margin: '20px 0px',
    borderTop: '1px solid #e5dfdf',
    borderBottom: '1px solid #e5dfdf',
    padding: '16px 0px 10px',
  },
  testtt: {
    fontSize: '15px',
    fontWeight: '600',
  },
  test5: {
    border: '1px solid#a79797',
    padding: '9px 5px 0px',
    borderRadius: '50%',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function Productdetail() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Product Details' }]}
        />
      </Box>
      <SimpleCard>
        <Box sx={{ border: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ borderBottom: '1px solid#e1dada' }}
          >
            <Tab label="Product Details" {...a11yProps(0)} />
            <Tab label="Chart" {...a11yProps(1)} />
            <Tab label="Sales" {...a11yProps(2)} />
            <Tab label="Quotations" {...a11yProps(3)} />
            <Tab label="Purchases" {...a11yProps(4)} />
            <Tab label="Transfers" {...a11yProps(5)} />
            <Tab label="Quantity Adjustments" {...a11yProps(6)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Box className={classes.product}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <img className={classes.profilepic} src={mobile1} alt="image" />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>Warehouse Quantity</Typography>
                  <Typography>Warehouse Name</Typography>
                  <Typography>Quantity (Racks)</Typography>
                  <div className={classes.product1}>
                    <Grid container spacing={2}>
                      <Grid item xs={6} sm={3} md={3}>
                        <NavLink to="/Product/PrintBarcode" className={classes.test5}>
                          <PrintIcon style={{ color: 'rgb(100 94 94)', fontSize: '18px' }} />
                        </NavLink>
                        <Typography>Print</Typography>
                      </Grid>
                      <Grid item xs={6} sm={3} md={3}>
                        <NavLink to="#" className={classes.test5}>
                          <FileDownloadIcon style={{ color: 'rgb(100 94 94)', fontSize: '18px' }} />
                        </NavLink>
                        <Typography>Pdf</Typography>
                      </Grid>
                      <Grid item xs={6} sm={3} md={3}>
                        <NavLink to="/Product/Editproduct" className={classes.test5}>
                          <EditIcon style={{ color: 'rgb(100 94 94)', fontSize: '18px' }} />
                        </NavLink>
                        <Typography>Edit</Typography>
                      </Grid>
                      <Grid item xs={6} sm={3} md={3}>
                        <NavLink to="/" className={classes.test5}>
                          <DeleteIcon style={{ color: 'rgb(100 94 94)', fontSize: '18px' }} />
                        </NavLink>
                        <Typography>Delete</Typography>
                      </Grid>
                    </Grid>
                  </div>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.testtt}>Title</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.test6}>Standard</Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.testtt}>Name</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.test6}>Test 03</Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.testtt}>Code</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.test6}>0312</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.testtt}>Brand</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.test6}>Apple</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.testtt}>Category</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.test6}>Apple Products</Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.testtt}>Sub Category</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.test6}>iPhone</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.testtt}>Unit</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.test6}>Pcs (Piece)</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.testtt}>Cost</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.test6}>admin@stock.com150.00</Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.testtt}>Price</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.test6}>admin@stock.com150.00</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.testtt}>Tax Rate</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.test6}>SGST</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.testtt}>Tax Method</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                      <Typography className={classes.test6}>Inclusive</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SimpleTable />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <SimpleTable />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <SimpleTable />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <SimpleTable />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <SimpleTable />
          </TabPanel>
          <TabPanel value={value} index={6}>
            <SimpleTable />
          </TabPanel>
        </Box>
      </SimpleCard>
    </Container>
  );
}
export default Productdetail;
