import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { styled } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { green } from '@mui/material/colors';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import React from 'react';

const GreenCheckbox = styled(Checkbox)(() => ({
  color: green[400],
  '&$checked': {
    color: green[600],
  },
}));

function LabelledCheckbox() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
        }
        label="site name"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange('checkedB')}
            value="checkedB"
            color="primary"
          />
        }
        label="Product Name"
      />
      <FormControlLabel control={<Checkbox value="checkedC" />} label="Price" />
      <FormControlLabel control={<Checkbox value="checkedD" />} label="Currencies" />
      <FormControlLabel control={<Checkbox value="checkedE" />} label="Unit" />
      <FormControlLabel
        control={
          <Checkbox checked={state.checkedF} onChange={handleChange('checkedF')} value="checkedF" />
        }
        label="Category"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            color="default"
            checked={state.checkedG}
            onChange={handleChange('checkedG')}
            value="checkedG"
          />
        }
        label="Variants"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            color="default"
            checked={state.checkedG}
            onChange={handleChange('checkedG')}
            value="checkedH"
          />
        }
        label="Product Image"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            value="checkedI"
          />
        }
        label="Check promotional price"
      />
    </FormGroup>
  );
}
export default LabelledCheckbox;
