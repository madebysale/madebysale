import React, { useMemo, useState } from 'react';
import Link from '@mui/material/Link';
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  ListSubheader,
  InputAdornment,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/styles';
import AddIcon from '@mui/icons-material/Add';
// import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';
const useStyles = makeStyles((theme) => ({
  btn10: {
    background: 'rgb(10 37 64)',
    color: '#fff',
    borderRadius: '3',
    padding: '4px 10px',
    textDecoration: 'none',
    fontSize: '19px',
  },
  aditing: {
    border: '1px solid #d7cdcd',
    padding: '20px',
  },
}));

const displayedOptions = [
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

const allOptions = [];
const containsText = (text, searchText) =>
  text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

const Addfeild = () => {
  // selectbox with searchbar
  const [selectedOption, setSelectedOption] = useState(allOptions[0]);
  const [searchText, setSearchText] = useState('');

  const displayedOptions = useMemo(
    () => allOptions.filter((option) => containsText(option, searchText)),
    [searchText]
  );

  // end selectbox with searchbar
  const classes = useStyles();

  const [inputFields, setInputFields] = useState([{ firstName: '', lastName: '' }]);

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { firstName: '', lastName: '' }]);
  };

  return (
    <>
      <div className={classes.aditing}>
        <Link href="#" onClick={() => handleAddFields()} className={classes.btn10}>
          +
        </Link>
        {inputFields.map((inputField, index) => (
          <div key={index}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={12} mt={2}>
                <FormControl fullWidth>
                  <InputLabel id="search-select-label">Options</InputLabel>
                  <Select
                    fullWidth
                    defaultValue="new"
                    MenuProps={{ autoFocus: false }}
                    labelId="search-select-label"
                    id="search-select"
                    value={selectedOption}
                    label="Options"
                    onChange={(e) => setSelectedOption(e.target.value)}
                    onClose={() => setSearchText('')}
                    renderValue={() => selectedOption}
                  >
                    <ListSubheader>
                      <TextField
                        placeholder="Type to search..."
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key !== 'Escape') {
                            e.stopPropagation();
                          }
                        }}
                      />
                    </ListSubheader>
                    {displayedOptions.map((option, i) => (
                      <MenuItem key={i} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item lg={6} mb={1}>
                <TextField
                  fullWidth
                  name="Supplier Part No."
                  label="Supplier Part No"
                  variant="outlined"
                  value={inputField.firstName}
                  onChange={(event) => handleChangeInput(index, event)}
                />
              </Grid>
              <Grid item lg={6}>
                <TextField
                  fullWidth
                  name="Supplier Price"
                  label="Supplier Price"
                  variant="outlined"
                  value={inputField.lastName}
                  onChange={(event) => handleChangeInput(index, event)}
                />
              </Grid>
            </Grid>
          </div>
        ))}
      </div>
    </>
  );
};

export default Addfeild;
