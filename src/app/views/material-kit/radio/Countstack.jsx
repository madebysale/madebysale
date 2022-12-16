import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import { green } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Grid, styled } from '@mui/material';

const GreenRadio = styled(Radio)(() => ({
  color: green[400],
  '&$checked': { color: green[600] },
}));

const options = [
  { name: 'one', value: 1 },
  { name: 'two', value: 2 },
  { name: 'three', value: 3 },
  { name: 'four', value: 4 },
];
const Countstack = () => {
  const [value2, setValue2] = useState('no');
  return (
    <>
      <Paper variant="outlined" style={{ padding: '10px 10px' }}>
        <Radio
          type="radio"
          name="radio1"
          value="no"
          checked={value2 === 'no'}
          onChange={(e) => setValue2(e.currentTarget.value)}
        />
        <label className="form-check-label">Full</label>
        <Radio
          type="radio"
          value="si"
          name="radio1"
          checked={value2 === 'si'}
          onChange={(e) => setValue2(e.currentTarget.value)}
        />
        <label className="form-check-label">Partial</label>
      </Paper>
      <div style={{ marginTop: '10px' }}>
        {value2 === 'si' && (
          <Paper variant="outlined" style={{ padding: '10px 10px' }}>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <Autocomplete
                  multiple
                  freeSolo
                  options={options}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField {...params} variant="outlined" label="Brands" fullWidth />
                  )}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Autocomplete
                  multiple
                  freeSolo
                  options={options}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField {...params} variant="outlined" label="Categories" fullWidth />
                  )}
                />
              </Grid>
            </Grid>
          </Paper>
        )}
      </div>
    </>
  );
};

export default Countstack;
