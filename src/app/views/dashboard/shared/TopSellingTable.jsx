import {
  Avatar,
  Box,
  Card,
  Icon,
  IconButton,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import { Grid } from '@mui/material';
import { Paragraph } from 'app/components/Typography';

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const ProductTable = styled(Table)(() => ({
  whiteSpace: 'pre',
  '& small': {
    width: '100%',
    height: 15,
    borderRadius: 500,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
  '& td': { borderBottom: 'none' },
  '& td:first-of-type': { paddingLeft: '5px !important' },
}));

const Small = styled('small')(({ bgcolor }) => ({
  width: '100%',
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '4px',
  overflow: 'hidden',
  background: bgcolor,
  boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}));

const TopSellingTable = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

  return (
    <>
      {/* <Card elevation={3} sx={{ pt: '20px', mb: 3 }}> */}
      {/* <CardHeader>
        <Title>top selling products</Title>
        <Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">This Month</MenuItem>
          <MenuItem value="last_month">Last Month</MenuItem>
        </Select>
      </CardHeader> */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <Box overflow="auto">
            <ProductTable>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2} style={{ fontSize: '15px', fontWeight: '600' }}>
                    Date
                  </TableCell>
                  <TableCell colSpan={3} style={{ fontSize: '15px', fontWeight: '600' }}>
                    Reference No
                  </TableCell>
                  <TableCell colSpan={3} style={{ fontSize: '15px', fontWeight: '600' }}>
                    Customer
                  </TableCell>
                  <TableCell colSpan={2} style={{ fontSize: '15px', fontWeight: '600' }}>
                    Total
                  </TableCell>
                  <TableCell colSpan={3} style={{ fontSize: '15px', fontWeight: '600' }}>
                    Payment Status
                  </TableCell>
                  <TableCell colSpan={2} style={{ fontSize: '15px', fontWeight: '600' }}>
                    paid
                  </TableCell>
                  <TableCell colSpan={3} style={{ fontSize: '15px', fontWeight: '600' }}>
                    Status
                  </TableCell>
                  <TableCell colSpan={2} style={{ fontSize: '15px', fontWeight: '600' }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {productList.map((product, index) => (
                  <TableRow key={index} hover>
                    <TableCell colSpan={2}>
                      <Paragraph>{product.date}</Paragraph>
                    </TableCell>
                    <TableCell colSpan={3}>
                      <Paragraph>{product.referencenumber}</Paragraph>
                    </TableCell>
                    <TableCell colSpan={3}>
                      <Paragraph>{product.customer}</Paragraph>
                    </TableCell>
                    <TableCell colSpan={2}>
                      <Paragraph>{product.total}</Paragraph>
                    </TableCell>
                    <TableCell colSpan={3}>
                      <Paragraph>{product.paymentstutas}</Paragraph>
                    </TableCell>
                    <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                      $
                      {product.price > 999
                        ? (product.price / 1000).toFixed(1) + 'k'
                        : product.price}
                    </TableCell>
                    <TableCell colSpan={3}>
                      {product.stutas ? (
                        product.stutas < 20 ? (
                          <Small bgcolor={bgSecondary}>{product.stutas} available</Small>
                        ) : (
                          <Small bgcolor={bgPrimary}>in stock</Small>
                        )
                      ) : (
                        <Small bgcolor={bgError}>out of stock</Small>
                      )}
                    </TableCell>

                    {/* <TableCell colSpan={2}>
                  <Paragraph>{product.referencenumber}</Paragraph>
                </TableCell> */}
                    <TableCell colSpan={2}>
                      <IconButton>
                        <Icon color="primary">edit</Icon>
                      </IconButton>
                    </TableCell>

                    {/**/}
                  </TableRow>
                ))}
              </TableBody>
            </ProductTable>
          </Box>
        </Grid>
      </Grid>
      {/* </Card> */}
    </>
  );
};

const productList = [
  {
    // imgUrl: '/assets/images/products/headphone-2.jpg',
    date: '12/0/12',
    referencenumber: '001',
    customer: 'earphone',
    total: 'Total',
    paymentstutas: 'paid',
    price: 100,
    stutas: 15,
  },
  {
    // imgUrl: '/assets/images/products/headphone-2.jpg',
    date: '12/0/12',
    referencenumber: '001',
    customer: 'earphone',
    total: 'Total',
    paymentstutas: 'paid',
    price: 100,
    stutas: 15,
  },
  {
    // imgUrl: '/assets/images/products/headphone-2.jpg',
    date: '12/0/12',
    referencenumber: '001',
    customer: 'earphone',
    total: 'Total',
    paymentstutas: 'paid',
    price: 100,
    stutas: 15,
  },
  {
    // imgUrl: '/assets/images/products/headphone-2.jpg',
    date: '12/0/12',
    referencenumber: '001',
    customer: 'earphone',
    total: 'Total',
    paymentstutas: 'paid',
    price: 100,
    stutas: 15,
  },
  {
    // imgUrl: '/assets/images/products/headphone-2.jpg',
    date: '12/0/12',
    referencenumber: '001',
    customer: 'earphone',
    total: 'Total',
    paymentstutas: 'paid',
    price: 100,
    stutas: 15,
  },
  {
    // imgUrl: '/assets/images/products/headphone-2.jpg',
    date: '12/0/12',
    referencenumber: '001',
    customer: 'earphone',
    total: 'Total',
    paymentstutas: 'paid',
    price: 100,
    stutas: 15,
  },
];

export default TopSellingTable;
