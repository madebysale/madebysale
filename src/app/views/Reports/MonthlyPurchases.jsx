import React from 'react';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import Years from '../../views/material-kit/calenders/Years';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

function MonthlyPurchases() {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Monthly Purchases' }]}
        />
      </Box>
      <SimpleCard>
        <Years />
      </SimpleCard>
    </Container>
  );
}
export default MonthlyPurchases;
