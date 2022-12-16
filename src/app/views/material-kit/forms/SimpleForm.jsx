import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, styled } from '@mui/material';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles((theme) => ({}));

const SimpleForm = (props) => {
  const classes = useStyles();
  const [data1, setdata] = useState([]);

  useEffect(() => {
    setdata(props.props);
  }, [props]);

  return (
    <>
      <TextField
        fullWidth
        type={data1.type}
        name={data1.name}
        label={data1.label}
        onChange={data1.onChange}
        className={classes.main2}
      />
    </>
  );
};

export default SimpleForm;
