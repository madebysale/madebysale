import React, { useRef, useState, useEffect } from 'react';
import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// material
import {
  Card,
  Table,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from '@material-ui/core';
import Stack from '@mui/material/Stack';
// components
// import Page from '../components/Page';
 import Label from '../../views/material-kit/tables/Label';
import Scrollbar from '../../views/material-kit/tables/Scrollbar';
import USERLIST from '../../views/material-kit/tables/User';
import SearchNotFound from '../../views/material-kit/tables/SearchNotFound';
import UserListHead from '../../views/material-kit/tables/UserListHead';
import UserListToolbar from '../../views/material-kit/tables/UserListToolbar';
import UserMoreMenu from '../../views/material-kit/tables/UserMoreMenu';
import { Delete, Edit, Print } from '@material-ui/icons';
import { EyeFilled } from '@ant-design/icons';
//

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'Name', label: 'Name', alignRight: false },

  { id: 'Actions', label: 'Actions', alignRight: false },
  
  
  
];

// ----------------------------------------------------------------------


let pricegroup =[
  {"id":"1","Name":"arun"},
  {"id":"2","Name":"arun"},
  {"id":"3","Name":"arun"},
  {"id":"4","Name":"arun"},
  {"id":"5","Name":"arun"},
  {"id":"6","Name":"arun"},
  {"id":"7","Name":"arun"},
  {"id":"8","Name":"arun"},

]





const showtoast =(index)=>{
  toast.success(`Delete Successfully! no = ${index}`, {
    position: toast.POSITION.TOP_CENTER
});
}













function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

function ListPriceGroups(props) {
  // console.log(props.props.productlist);
  const [data, setdata] = useState([]);
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
      .then((data) => setdata(data.data.ListstockproductResponce));
  }, []);
  //
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const filteredUsers = applySortFilter(data, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;



  const navigate = useNavigate();



  const navigatetoedit= (index) => {
    // 👇️ navigate to /EditCurrencies
    navigate(`/Settings/PriceGroups/EditPriceGroups/${index}`);
  };
  
  
  const navigatetogrpproduct =(index)=>{
    navigate(`/Settings/PriceGroups/GroupProductPrices/${index}`);
  }









  return (
    // <Page title="User | Minimal-UI">
    <Container>
      {/* <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            User
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Icon icon={plusFill} />}
          >
            New User
          </Button>
        </Stack> */}

      <UserListToolbar
        numSelected={selected.length}
        filterName={filterName}
        onFilterName={handleFilterByName}
      />

      {/* <Scrollbar> */}
        <TableContainer>
          <Table>
            <UserListHead
              order={order}
              orderBy={orderBy}
              headLabel={TABLE_HEAD}
              rowCount={data.length}
              numSelected={selected.length}
              onRequestSort={handleRequestSort}
              onSelectAllClick={handleSelectAllClick}
            />
            <TableBody>
              {filteredUsers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  const {
                    id,
                    name,
                    unit,
                    cost,
                    price,
                    image,
                    code,
                    brand,
                    quantity,
                    alert_quantity,
                    category_id,
                    isVerified,
                  } = row;
                  const isItemSelected = selected.indexOf(name) !== -1;

                  return (
                    <TableRow
                    // hover
                    // key={id}
                    // tabIndex={-1}
                    // role="checkbox"
                    // selected={isItemSelected}
                    // aria-checked={isItemSelected}
                    >
                      {/* <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          onChange={(event) => handleClick(event, name)}
                        />
                      </TableCell> */}
                      {/* <TableCell component="th" scope="row" padding="none">
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Avatar alt={name} src={image} />
                          <Typography variant="subtitle2" noWrap>
                            {name}
                          </Typography>
                        </Stack>
                      </TableCell> */}
                      {/* <TableCell align="left">{image}</TableCell>

                      <TableCell align="left">{code}</TableCell>
                      <TableCell align="left">{name}</TableCell>
                      <TableCell align="left">{brand}</TableCell>
                      <TableCell align="left">{category_id}</TableCell>
                      <TableCell align="left">{cost}</TableCell>
                      <TableCell align="left">{price}</TableCell>
                      <TableCell align="left">{quantity}</TableCell>
                      <TableCell align="left">{unit}</TableCell>
                      <TableCell align="left">{alert_quantity}</TableCell> */}
                      {/* <TableCell align="left">{Actions}</TableCell> */}

                      {/* <TableCell align="left">{unit}</TableCell>
                      <TableCell align="left">{price}</TableCell>
                      <TableCell align="left">{cost}</TableCell>
                      <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell> */}

                      {/* <TableCell align="left">
                        <Label
                          variant="ghost"
                          color={(status === 'banned' && 'error') || 'success'}
                        >
                          {sentenceCase(status)}
                        </Label>
                      </TableCell> */}

                      <TableCell align="right">
                        <UserMoreMenu />
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            {isUserNotFound && (
              <TableBody>


                
              {
                pricegroup.map((item,index)=>{
                  return(
                    <TableRow>
                      <TableCell>
                        <Checkbox/>
                      </TableCell>
                      <TableCell>
                        {item.Name}
                      </TableCell>
                      <TableCell>
                        <EyeFilled onClick={()=>{navigatetogrpproduct(item.id)}}/>
                        <Edit onClick ={()=>navigatetoedit(item.id)}/>
                        <Delete onClick ={()=>showtoast(item.id)}/>
                      </TableCell>
                    </TableRow>
                  )
                })
              }

              


            

                
                <TableRow>

                  
                  <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                    <SearchNotFound searchQuery={filterName} />

                  </TableCell>
                </TableRow>

                  
              </TableBody>
            )}
          </Table>
        </TableContainer>
      {/* </Scrollbar> */}

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <ToastContainer/>
    </Container>
    // </Page>
  );
}
export default ListPriceGroups;
