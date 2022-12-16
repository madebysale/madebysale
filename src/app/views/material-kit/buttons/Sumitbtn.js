import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  btn2: {
    padding: '7px 23px',
    border: 'none',
    fontSize: '15px',
    color: '#fff',
    background: '#303f9f',
  },
}));

function Sumitbtn() {
  const classes = useStyles();
  return (
    <>
      <Button variant="contained" className={classes.btn2}>
        Submit
      </Button>
    </>
  );
}

export default Sumitbtn;
