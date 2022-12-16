import React, { useState, useEffect } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { makeStyles } from '@material-ui/styles';
import FormHelperText from '@material-ui/core/FormHelperText';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const useStyles = makeStyles((theme) => ({}));

// function AutocompleteCombo(props)

const AutocompleteComboNew = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const [data2, setdata] = useState([]);
  const [names, setnames] = useState([]);

  useEffect(() => {
    setdata(props.props);
    setnames(props.props.names);
  }, [props]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <>
      <FormControl fullWidth className={classes.main3}>
        {/* <InputLabel id="demo-simple-select-helper-label">{data2.name}</InputLabel> */}
        {/* <Select
          //  name={data2.name}
          label={data2.label}
          value={data2.value}
          onChange={handleChange}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select> */}
        {/* <InputLabel id="demo-simple-select-helper-label">{data2.label}</InputLabel> */}
        <TextField
          id={data2.id}
          label={data2.label}
          value={data2.value}
          onBlur={data2.onBlur}
          onChange={data2.onChange}
          fullWidth
          select
          helperText={data2.helperText}
          error={data2.error}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
    </>
  );
};
export default AutocompleteComboNew;
