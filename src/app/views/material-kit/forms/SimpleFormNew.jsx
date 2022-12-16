import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, styled } from '@mui/material';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles((theme) => ({}));

const SimpleFormNew = (props) => {
  const classes = useStyles();
  const [data1, setdata] = useState([]);

  useEffect(() => {
    setdata(props.props);
  }, [props]);

  return (
    <>
      {data1.multiline ? (
        <>
          <TextField
            fullWidth
            multiline
            rows={data1.rows}
            type={data1.type}
            name={data1.name}
            label={data1.label}
            variant="outlined"
            onBlur={data1.onBlur}
            value={data1.value}
            className={classes.main2}
            onChange={data1.onChange}
            helperText={data1.helperText}
            error={data1.error}
          />
        </>
      ) : (
        <>
          <TextField
            fullWidth
            type={data1.type}
            name={data1.name}
            label={data1.label}
            variant="outlined"
            onBlur={data1.onBlur}
            value={data1.value}
            className={classes.main2}
            onChange={data1.onChange}
            helperText={data1.helperText}
            error={data1.error}
          />
        </>
      )}
    </>
  );
};

export default SimpleFormNew;
