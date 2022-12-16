import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, styled } from '@mui/material';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles((theme) => ({
  main2: {
    marginBottom: '0px',
  },
}));

const SimpleForms = (props) => {
  const classes = useStyles();
  const [data3, setdata] = useState([]);

  useEffect(() => {
    setdata(props.props);
  }, [props]);

  return (
    <>
      <TextField
        fullWidth
        type={data3.type}
        name={data3.name}
        label={data3.label}
        className={classes.main2}
        onChange={data3.onChange}
        defaultValue={data3.defaultValue}
        variant={data3.outlined}
        value={data3.value}
      />
      {/* <TextField
    fullWidth
      type={data1.type}
      name={data1.name}
      label={data1.label}
      onChange={data1.onChange}
     className={classes.main2}
    /> */}
    </>
  );
};

export default SimpleForms;
