import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { styled } from '@mui/system';
import React, { useState, useEffect } from 'react';

const RadioRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  '& .formControl': {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
  '& .group': { margin: theme.spacing(1, 0), flexDirection: 'row' },
}));

export default function SimpleRadioNew(props) {
  const [value, setValue] = React.useState('');
  const [data2, setdata] = useState([]);
  const [names, setnames] = useState([]);
  useEffect(() => {
    setdata(props.props);
    setnames(props.props.Radiobutton);
    setValue(props.props.Value);
  }, [props]);

  return (
    <RadioRoot>
      <FormControl component="fieldset">
        <FormLabel component="legend">{data2.Lable}</FormLabel>
        <RadioGroup
          value={value}
          name={data2.Name}
          className="group"
          aria-label={data2.Arealable}
          onChange={data2.Change}
        >
          {names.map((name) => (
            <>
              <FormControlLabel value={name.value} control={<Radio />} label={name.name} />
            </>
          ))}
        </RadioGroup>
        {/* {data2.touched && data2.error && (
          <React.Fragment>{data2.error}</React.Fragment>
        )} */}
      </FormControl>
    </RadioRoot>
  );
}
