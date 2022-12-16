import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Checkbox, Grid } from '@mui/material';
import Label from '../tables/Label';
import FormControlLabel from '@mui/material/FormControlLabel';

function Showhideformcheckbox() {
  const [show, toggleShow] = useState(false);
  return (
    <>
      <div style={{ margin: '0px 0px 0px 0px' }}>
        <FormControlLabel
          control={<Checkbox />}
          onClick={() => toggleShow(!show)}
          label="Promotion"
        />


        <div>
          {show && (
            <div>
              <Grid container spacing={3}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <TextField fullWidth type="text" name="Promotion Price" label="Promotion Price" />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <TextField
                    id="date"
                    label="Start date"
                    type="date"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="date"
                    label="End date"
                    type="date"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Showhideformcheckbox;
