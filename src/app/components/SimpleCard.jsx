import React from 'react';
import { Card } from '@mui/material';
import { Box, styled } from '@mui/system';

const CardRoot = styled(Card)(() => ({
  height: '100%',
  padding: '30px 30px',
  // marginBottom: '90px',
  boxShadow: 'rgb(17 12 46 / 5%) 0px 48px 100px 0px !Important',
  // background: "#ededed9e",
}));

const CardTitle = styled('div')(({ subtitle }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  fontFamily: 'Montserrat,sans-serif !important',
  textTransform: 'capitalize',
  marginBottom: !subtitle && '10px',
}));

const SimpleCard = ({ children, title, subtitle, icon }) => {
  return (
    <CardRoot elevation={6}>
      <CardTitle subtitle={subtitle}>{title}</CardTitle>
      {subtitle && <Box sx={{ mb: 2 }}>{subtitle}</Box>}
      {children}
    </CardRoot>
  );
};

export default SimpleCard;
