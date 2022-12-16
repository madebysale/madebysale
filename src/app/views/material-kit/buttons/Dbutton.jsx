import { Box, Button, Fab, Icon, IconButton, styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    btn2: {
      padding:"8px 25px",
      border: "none",
      fontSize: "15px",
      color: "#fff",
      background: "#303f9f",
    },
  }));

export default function Dbutton() {
    const classes = useStyles();
  return (
    <>
     <Grid container spacing={2}>
        <Grid item xs={12} sx={{ mt:2}}>
        <Button variant="contained"color="inherit"
        className={classes.btn2}
        >
          Import
        </Button>
        </Grid>
      </Grid>
      
    </>
  );
}
