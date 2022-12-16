import React from 'react';
import { Box, styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Breadcrumb, SimpleCard } from 'app/components';
import Paper from '@mui/material/Paper';
import Fileattachment from '../material-kit/uploadimage/Fileattachment';
import Grid from '@mui/material/Grid';
import Dbutton from '../material-kit/buttons/Dbutton';
import Pdfdownloadbutton from '../material-kit/buttons/Pdfdownloadbutton';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const ImportProducts = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Import Products' }]}
        />
      </Box>
      <SimpleCard>
        <Paper
          style={{
            boxShadow: 'none',
            border: '1px solid rgb(229 217 217)',
            padding: '20px 15px',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" style={{ fontSize: '12px' }}>
                The first line in downloaded csv file should remain as it is. Please do not change
                the order of columns. The correct column order is (Name, Code, Barcode Symbology,
                Brand, Category Code, Unit Code, Sale Unit Code, Purchase Unit Code, Cost, Price,
                Alert Quantity, Tax, Tax Method, Image, Sub category Code, Product Variants
                separated by vertical bar | , Product Custom Field 1, Product Custom Field 2,
                Product Custom Field 3, Product Custom Field 4, Product Custom Field 5, Product
                Custom Field 6, HSN Code, Secondary Name, Supplier Name, Supplier Part No., Supplier
                Price ) & you must follow this. Please make sure the csv file is UTF-8 encoded and
                not saved with byte order mark (BOM). The images should be uploaded in
                assets/uploads/ folder and thumbnails with same name as csv to
                assets/uploads/thumbs/ System will check if the code belong to any product then will
                update that product otherwise will add new product.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Pdfdownloadbutton />
            </Grid>
          </Grid>
        </Paper>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Fileattachment
              props={{
                label: 'Attach Document',
              }}
            />
            <Dbutton />
          </Grid>
        </Grid>
      </SimpleCard>
    </Container>
  );
};

export default ImportProducts;
