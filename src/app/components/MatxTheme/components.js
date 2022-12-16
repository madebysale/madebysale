import { themeShadows } from './themeColors';

export const components = {
  MuiTable: {
    styleOverrides: {
      root: {
        tableLayout: 'fixed',
        fontFamily: 'Montserrat,sans-serif !important',
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      head: {
        fontSize: '13px',
        padding: '12px 0px',
        fontFamily: 'Montserrat,sans-serif !important',
      },
      root: {
        fontSize: '14px',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-all',
        padding: '12px 8px 12px 0px',
        fontFamily: 'Montserrat,sans-serif !important',
      },
    },
  },
  MUIDataTableSelectCell: {
    styleOverrides: {
      root: {
        paddingLeft: 12,
        fontFamily: 'Montserrat,sans-serif !important',
      },
    },
  },
  MUIDataTableHeadCell: {
    styleOverrides: {
      root: {
        paddingLeft: 16,
        fontFamily: 'Montserrat,sans-serif !important',
      },
    },
  },
  MUIDataTableBodyCell: {
    styleOverrides: {
      root: {
        paddingLeft: 8,
        fontFamily: 'Montserrat,sans-serif !important',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: '14px',
        textTransform: 'none',
        fontWeight: '400',
        fontFamily: 'Montserrat,sans-serif !important',
      },
      contained: {
        boxShadow: themeShadows[8],
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      '*': {
        boxSizing: 'border-box',
      },
      html: {
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        height: '100%',
        width: '100%',
      },
      body: {
        height: '100%',
        fontFamily: 'Montserrat,sans-serif !important',
      },
      a: {
        textDecoration: 'none',
        color: 'inherit',
        fontFamily: 'Montserrat,sans-serif !important',
      },
      '#root': {
        height: '100%',
      },
      '#nprogress .bar': {
        zIndex: '2000 !important',
      },
    },
  },
  MuiFab: {
    styleOverrides: {
      root: {
        boxShadow: themeShadows[12],
        fontFamily: 'Montserrat,sans-serif !important',
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        '&:before': {
          display: 'none',
        },
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        fontSize: '11px',
        fontFamily: 'Montserrat,sans-serif !important',
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontSize: '0.875rem',
        fontFamily: 'Montserrat,sans-serif !important',
      },
    },
  },

  MuiExpansionPanel: {
    styleOverrides: {
      root: {
        '&:before': {
          display: 'none',
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
        fontFamily: 'Montserrat,sans-serif !important',
        boxShadow:
          '0px 3px 3px -2px rgb(0 0 0 / 6%), 0px 3px 4px 0px rgb(0 0 0 / 4%), 0px 1px 8px 0px rgb(0 0 0 / 4%) !important',
      },
    },
  },
};
