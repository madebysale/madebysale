import React, { useState } from 'react';
import YearPicker from 'react-single-year-picker';
import { makeStyles } from '@material-ui/core/styles';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    '& .MuiTableCell-root': {
      borderLeft: '1px solid rgba(224, 224, 224, 1)',
      border: '1px solid rgba(224, 224, 224, 1)',
    },
  },
  box7: {
    background: '#e5e1e1',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    padding: '9px 0px',
  },
});

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));
function createData(
  January = '',
  February = '',
  March = '',
  April = '',
  May = '',
  June = '',
  July = '',
  August = '',
  September = '',
  October = '',
  November = '',
  December = ''
) {
  return {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
  };
}

const rows = [createData(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)];

function Years() {
  const [yearSelected, setYear] = useState(1990);
  const classes = useStyles();

  return (
    <>
      <Box className={classes.box7}>
        <YearPicker
          yearArray={['2019', '2020']}
          value={yearSelected}
          onSelect={(e) => setYear(e)}
          hideInput={true}
          // activeIcon={src url}
          // icon={src url}
          // leftIcon={src url}
          // rightIcon={src url}
          minRange={1000}
          maxRange={2018}
        />
      </Box>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Jan</TableCell>
            <TableCell align="center">Feb</TableCell>
            <TableCell align="center">March</TableCell>
            <TableCell align="center">April</TableCell>
            <TableCell align="center">May</TableCell>
            <TableCell align="center">June</TableCell>
            <TableCell align="center">July</TableCell>
            <TableCell align="center">August</TableCell>
            <TableCell align="center">Sept</TableCell>
            <TableCell align="center">October</TableCell>
            <TableCell align="center">Nov</TableCell>
            <TableCell align="center">Dec</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.January}</TableCell>
              <TableCell align="center">{row.February}</TableCell>
              <TableCell align="center">{row.March}</TableCell>
              <TableCell align="center">{row.April}</TableCell>
              <TableCell align="center">{row.May}</TableCell>
              <TableCell align="center">{row.June}</TableCell>
              <TableCell align="center">{row.July}</TableCell>
              <TableCell align="center">{row.August}</TableCell>
              <TableCell align="center">{row.September}</TableCell>
              <TableCell align="center">{row.October}</TableCell>
              <TableCell align="center">{row.November}</TableCell>
              <TableCell align="center">{row.December}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
export default Years;
