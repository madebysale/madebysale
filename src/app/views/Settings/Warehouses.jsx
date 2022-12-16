import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import SimpleTable from '../material-kit/tables/SimpleTable';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const Warehouses = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Warehouses' }]}
        />
      </Box>
      <SimpleCard>
        <SimpleTable />
      </SimpleCard>
    </Container>
  );
};

export default Warehouses;