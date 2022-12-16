import React, { useState, useEffect } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { makeStyles } from '@material-ui/styles';

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

const useStyles = makeStyles((theme) => ({
  main3: {
    // bottom: "10px",
    marginBottom: '0px',
  },
}));

// function AutocompleteCombo(props)

const AutocompleteCombos = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const [data4, setdata] = useState([]);
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
        <InputLabel id="demo-simple-select-helper-label">{data4.name}</InputLabel>
        <Select
          //  name={data2.name}
          label={data4.label}
          value={data4.value}
          variant={data4.outlined}
          defaultValue={data4.defaultValue}
          onChange={handleChange}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
export default AutocompleteCombos;
