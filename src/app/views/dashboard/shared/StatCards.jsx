import React from 'react';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));
const useStyles = makeStyles((theme) => ({
  box1: {
    width: '100%',
    boxShadow: 'rgb(99 99 99 / 20%) 0px 2px 8px 0px',
    textAlign: 'center',
    color: '#fff',
    padding: '15px',
    justifyItems: 'center',
    display: 'inline-grid',
    borderRadius: '5px',
  },
}));

const StatCards = (props) => {
  const classes = useStyles();

  return (
    <>
      <NavLink to={props.url} exact>
        <Box mb={0} className={classes.box1} style={props.style}>
          {props.icon}
          {props.title}
        </Box>
      </NavLink>
    </>
  );
};

export default StatCards;
