import React, { useState } from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from '@material-ui/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';

const useStyles = makeStyles((theme) => ({
  header: {
    // background: "linear-gradient(130deg,#152dc7,#820eb3)",
    background: '#092a4a',
    border: '1px solid #978f8f',
    // justifyContent: "left",
    padding: '10px 5px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  main: {
    padding: '7px 0px',
    textAlign: 'center',
    borderLeft: '1px solid #e1d6d6',
    borderTop: '1px solid #000',
  },
}));

const options = [
  {
    name: '46771898 - Metal Rings',
    Variant: '1',
    Type: '',
    Quantity: '1',
    SerialNumber: '',
    value: 1,
  },
  { name: 'two', Variant: '2', Type: '', Quantity: '1', SerialNumber: '', value: 2 },
  { name: 'three', Variant: '3', Type: '', Quantity: '1', SerialNumber: '', value: 3 },
  { name: 'four', Variant: '4', Type: '', Quantity: '1', SerialNumber: '', value: 4 },
];

export default function SearchtableNew() {
  const classes = useStyles();
  const [showtable, setshowtable] = useState(false);

  const [values, setValues] = useState([]);
  const [dynamictable, setdynamictable] = useState([]);

  const onChange = (_, value) => {
    console.log(value);
    // setValues(value);

    // console.log(values[index])
    setdynamictable((previous) => [
      ...previous,
      {
        name: value.name,
        Variant: value.Variant,
        Type: value.Type,
        Quantity: value.Quantity,
        SerialNumber: value.SerialNumber,
        value: value.value,
      },
    ]);
    if (dynamictable.length) {
      setshowtable(true);
    } else {
      setshowtable(false);
    }
  };

  const adddata = () => {
    for (let index = 0; index < values.length; index++) {
      // console.log(values[index])
      setdynamictable((previous) => [
        ...previous,
        {
          name: values[index].name,
          warehouse: values[index].warehouse,
          priceaddtion: values[index].priceaddtion,
          value: values[index].value,
        },
      ]);
    }
    if (values.length) {
      setshowtable(true);
    } else {
      setshowtable(false);
    }
  };
  console.log(dynamictable);

  const handleclick = (e) => {
    console.log(e.target.value);
    var index = dynamictable.findIndex((x) => (x.name = e.target.value));
    if (index != -1) {
      dynamictable.splice(index, 1);
      setdynamictable([...dynamictable]);
    } else {
      console.log('Item not found ');
    }
    console.log(dynamictable);
  };

  const allhandleclick = () => {
    setdynamictable([]);
    setshowtable(true);
  };
  //  const handleChange = (event) => {
  //   setAge(event.target.value );
  // };
  const [value, setValue] = React.useState('fruit');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Autocomplete
            single
            freeSolo
            options={options}
            getOptionLabel={(option) => option.name}
            onChange={onChange}
            renderInput={(params) => (
              <TextField
                {...params}
                // onClick={adddata}
                variant="outlined"
                label="Please add products to order list"
                margin="normal"
                fullWidth
              />
            )}
          />
          <Paper style={{ marginTop: '10px', boxShadow: 'none' }}>
            <TableContainer>
              <Table>
                <TableHead className={classes.header}>
                  <TableRow>
                    <TableCell style={{ color: '#fff' }}>Product Name (Product Code)</TableCell>
                    <TableCell style={{ color: '#fff' }}>Variant</TableCell>
                    <TableCell style={{ color: '#fff' }}>Type</TableCell>
                    <TableCell style={{ color: '#fff' }}>Quantity</TableCell>
                    <TableCell style={{ color: '#fff' }}>Serial Number</TableCell>
                    <TableCell style={{ color: '#fff' }}>
                      <button onClick={allhandleclick}>x</button>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody style={{ border: '1px solid #d3b5b5' }}>
                  {dynamictable.map((myList, index) => (
                    <TableRow key={index}>
                      <TableCell className={classes.main}>{myList.name}</TableCell>
                      <TableCell className={classes.main}>{myList.Variant}</TableCell>
                      <TableCell className={classes.main}>
                        {myList.Type}
                        <Select style={{ width: '150px' }} value={value} onChange={handleChange}>
                          <MenuItem value={10}>Addition</MenuItem>
                          <MenuItem value={20}>Subtraction</MenuItem>
                        </Select>
                      </TableCell>
                      <TableCell className={classes.main}>{myList.Quantity}</TableCell>
                      <TableCell className={classes.main}>
                        {myList.SerialNumber}
                        <TextField id="outlined-basic" variant="outlined" />
                      </TableCell>
                      <TableCell className={classes.main}>
                        <button value={myList.name} onClick={handleclick}>
                          x
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
