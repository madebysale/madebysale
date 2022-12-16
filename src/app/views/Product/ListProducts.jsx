import { useState, useEffect } from 'react';
import axios from 'axios.js';
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

const ListProducts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // const response = axios.post('http://192.168.29.199:3000/api/public/Liststockproduct');
    // console.log(response);
    // setPosts(response);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch('http://143.205.125.69:3000/api/public/Liststockproduct', requestOptions)
      .then((response) => response.json())
      .then((data) => setPosts(data.data.ListstockproductResponce));
  }, []);

  // console.log(posts, 'kkkk');

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'List Products' }]}
        />
      </Box>
      <SimpleCard>
        <SimpleTable
          props={{
            productlist: posts,
          }}
        />
      </SimpleCard>
    </Container>
  );
};

export default ListProducts;
