import React from 'react';
import { Box, Checkbox } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@mui/material/Grid';
function SimpleCheckbox() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <Checkbox
                    style={{
                      borderRadius: '0px',
                      borderLeft: '1px solid #ddc5c5',
                      padding: '14px',
                      marginRight: '-13px',
                    }}
                  />
                </InputAdornment>
              ),
            }}
            label="Alert Quantity"
          />
        </Grid>
      </Grid>
    </>
  );
}
export default SimpleCheckbox;
