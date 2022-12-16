import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import FormGroupCheckbox from './FormGroupCheckbox';
import LabelledCheckbox from './LabelledCheckbox';
import SimpleCheckbox from './SimpleCheckbox';
import Showhideformcheckbox from './Showhideformcheckbox';
import SearchwithAadtable from './SearchwithAadtable';
import Searchtable from './Searchtable';


const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const AppCheckbox = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Chckbox' }]}
        />
      </Box>

      <SimpleCard title="Alert Quantity">
        <SimpleCheckbox />
      </SimpleCard>

      <Box py="12px" />

      <SimpleCard title="Checkbox with Label">
        <LabelledCheckbox />
      </SimpleCard>

      <Box py="12px" />

      <SimpleCard title="Checkbox with Form Group">
        <FormGroupCheckbox />
      </SimpleCard>
      <Box py="12px" />

      <SimpleCard title="Checkbox with Form show hide">
        <Showhideformcheckbox />
      </SimpleCard>
      <Box py="12px" />
      
      <SimpleCard title="Checkbox with search and add table ">
        <SearchwithAadtable />
      </SimpleCard>
      <Box py="12px" />
      
      <SimpleCard title="filert table">
        <Searchtable />
      </SimpleCard>

    </Container>
  );
};

export default AppCheckbox;
