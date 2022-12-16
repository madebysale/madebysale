import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import Singleimage from '../material-kit/uploadimage/Singleimage';
import Label from '../material-kit/tables/Label';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { Typography } from 'antd';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const useStyles = makeStyles((theme) => ({
  btn2: {
    marginTop: '20px',
    padding: '7px 23px',
    border: 'none',
    fontSize: '15px',
    color: '#fff',
    background: '#303f9f',
  },
  textnew2: {
    paddingTop: '10px',
    paddingBottom: '10px',
  },
}));
const ChangeLogo = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Change Logo' }]}
        />
      </Box>
      <SimpleCard>
        <Typography className={classes.textnew2}>Site Logo</Typography>

        <Singleimage />

        <Typography className={classes.textnew2}>Login Logo</Typography>

        <Singleimage />

        <Typography className={classes.textnew2}>Login Logo</Typography>
        <Singleimage />

        <Button type="submit" variant="contained" className={classes.btn2}>
          Update Setting
        </Button>
      </SimpleCard>
    </Container>
  );
};

export default ChangeLogo;
