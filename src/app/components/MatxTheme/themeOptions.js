import { red } from '@mui/material/colors';
import { components } from './components';

const themeOptions = {

  typography: {
    allVariants: {
      fontFamily: 'Montserrat,sans-serif !important',
    },
    fontSize: 14,
    fontFamily: 'Montserrat,sans-serif !important',
    body1: { fontSize: '14px',  fontFamily: 'Montserrat,sans-serif !important', },
  },

  status: { danger: red[500] },
  components: { ...components },
};

export default themeOptions;
