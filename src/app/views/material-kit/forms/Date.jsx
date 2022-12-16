import * as React from 'react';
import TextField from '@mui/material/TextField';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled,
} from "@mui/material";



const Date = () => {

  return (
    <>
     
     <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue="2017-05-24"
       fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />
        
    </>
  );
};

export default Date;
