import { Box, Button, Fab, Icon, IconButton, styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    btn2: {
      padding:"7px 23px",
      border: "none",
      fontSize: "15px",
      color: "#fff",
      background: "#303f9f",
    },
  }));

export default function Addbutton() {
    const classes = useStyles();
  return (
    <>
      <Button variant="contained"
        className={classes.btn2}
        >
        Add user
        </Button>  
    </>
  );
}
