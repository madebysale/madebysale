import React from 'react';
import { ThemeProvider } from '@mui/material';
import { useTheme } from '@mui/material';
import useSettings from 'app/hooks/useSettings';
import { Paragraph } from './Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: 'rgb(7 37 66)',
    color: ' #fff',
    padding: '20px',
    position: 'static',
    width: '100%',
    bottom: '0px',
    zIndex: '9',
  },
}));

const Footer = () => {
  const theme = useTheme();
  const classes = useStyles();
  const { settings } = useSettings();

  const footerTheme = settings.themes[settings.footer.theme] || theme;

  return (
    <ThemeProvider theme={footerTheme}>
      <div className={classes.footer}>
        <Paragraph>
          Design and Developed by <a href="https://impetrosys.com/">Impetrosys</a>
        </Paragraph>
      </div>
    </ThemeProvider>
  );
};

export default Footer;
