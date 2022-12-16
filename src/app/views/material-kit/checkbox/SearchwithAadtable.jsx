import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/styles';
import InputAdornment from '@mui/material/InputAdornment';
import { Checkbox, Grid } from '@mui/material';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import TableContainer from '@material-ui/core/TableContainer';
import Label from '../tables/Label';

const useStyles = makeStyles((theme) => ({
  header: {
    border: '1px solid #978f8f',
    backgroundColor: 'rgb(10 37 64)',
    padding: '10px 5px',
    fontWeight: 'bold',
  },
  main: {
    borderTop: '1px solid #000',
    textAlign: 'center',
    borderLeft: '1px solid #d3b5b5',
  },
}));
const options = [
  { name: 'one', warehouse: '1', priceaddtion: '1000', value: 1 },
  { name: 'two', warehouse: '2', priceaddtion: '1000', value: 2 },
  { name: 'three', warehouse: '3', priceaddtion: '1000', value: 3 },
  { name: 'four', warehouse: '4', priceaddtion: '1000', value: 4 },
];

export default function SearchwithAadtable() {
  const classes = useStyles();
  const [show, toggleShow] = useState(false);
  const [showtable, setshowtable] = useState(false);

  const [values, setValues] = useState([]);
  const [dynamictable, setdynamictable] = useState([]);

  const onChange = (_, value) => {
    console.log(value);
    setValues(value);
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
    setshowtable(false);
  };
  return (
    <>
      <div className={classes.maincheck}>
        <FormControlLabel
          control={<Checkbox />}
          onClick={() => toggleShow(!show)}
          label="This product has multiple variants "
        />

        <div>
          {show && (
            <div>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Autocomplete
                    style={{ marginTop: '10px' }}
                    multiple
                    freeSolo
                    disablePortal
                    id="combo-box-demo"
                    options={options}
                    getOptionLabel={(option) => option.name}
                    onChange={onChange}
                    renderInput={(params) => {
                      return (
                        <TextField
                          {...params}
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton onClick={adddata}>
                                  <AddIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          label="Enter variants"
                        />
                      );
                    }}
                  />
                  <Paper style={{ marginTop: '10px', boxShadow: 'none' }}>
                    <TableContainer>
                      <Table>
                        <TableHead className={classes.header}>
                          <TableRow
                            style={
                              showtable === true
                                ? {
                                  display: '',
                                }
                                : {
                                  display: 'none',
                                }
                            }
                          >
                            <TableCell style={{ color: '#fff', textAlign: 'center' }}>
                              Name
                            </TableCell>
                            <TableCell style={{ color: '#fff', textAlign: 'center' }}>
                              Warehouse
                            </TableCell>
                            <TableCell style={{ color: '#fff', textAlign: 'center' }}>
                              Price Addition
                            </TableCell>
                            <TableCell style={{ color: '#fff', textAlign: 'center' }}>
                              <button onClick={allhandleclick}>x</button>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody style={{ border: '1px solid #d3b5b5' }}>
                          {dynamictable.map((myList, index) => (
                            <TableRow key={index}>
                              <TableCell className={classes.main}>{myList.name}</TableCell>
                              <TableCell className={classes.main}>{myList.warehouse}</TableCell>
                              <TableCell className={classes.main}>{myList.priceaddtion}</TableCell>
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
            </div>
          )}
        </div>
      </div>
    </>
  );
}
