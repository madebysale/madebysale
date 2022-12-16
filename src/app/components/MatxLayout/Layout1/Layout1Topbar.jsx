import React from 'react';
import { Avatar, Hidden, Icon, IconButton, MenuItem, useMediaQuery } from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import { MatxMenu, MatxSearchBox } from 'app/components';
import { makeStyles } from '@material-ui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { themeShadows } from 'app/components/MatxTheme/themeColors';
import { NotificationProvider } from 'app/contexts/NotificationContext';
import useAuth from 'app/hooks/useAuth';
import useSettings from 'app/hooks/useSettings';
import { topBarHeight } from 'app/utils/constant';
import { Link } from 'react-router-dom';
import { Span } from '../../../components/Typography';
import NotificationBar from '../../NotificationBar/NotificationBar';
import ShoppingCart from '../../ShoppingCart';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Typography } from 'antd';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: '#fafafa !important',
}));

const TopbarRoot = styled('div')(({ theme }) => ({
  top: 0,
  zIndex: 96,
  transition: 'all 0.3s ease',
  boxShadow: themeShadows[8],
  height: topBarHeight,
  fontFamily: 'Montserrat,sans-serif !important',
}));

const TopbarContainer = styled(Box)(({ theme }) => ({
  padding: '8px',
  paddingLeft: 18,
  paddingRight: 20,
  height: '100%',
  display: 'flex',
  fontFamily: 'Montserrat,sans-serif !important',
  alignItems: 'center',
  boxShadow: 'rgb(0 0 0 / 10%) 0px 20px 25px -5px, rgb(0 0 0 / 4%) 0px 10px 10px -5px',
  justifyContent: 'space-between',
  // background: 'linear-gradient(45deg,#303f9f,#7b1fa2)!important',
  background: 'rgb(10 37 64)',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  [theme.breakpoints.down('xs')]: {
    paddingLeft: 14,
    paddingRight: 16,
  },
}));

const UserMenu = styled(Box)(() => ({
  display: 'flex',
  fontFamily: 'Montserrat,sans-serif !important',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: 24,
  padding: '0px',
  '& span': { margin: '0px 10px 0px 10px' },
}));

const StyledItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  minWidth: 185,
  '& a': {
    width: '100%',
    fontFamily: 'Montserrat,sans-serif !important',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  '& span': { marginRight: '0px', color: '#000' },
}));

const IconBox = styled('div')(({ theme }) => ({
  display: 'inherit',
  [theme.breakpoints.down('md')]: { display: 'none !important' },
}));

const useStyles = makeStyles((theme) => ({
  newline: {
    padding: '0px 14px',
  },
}));

const Layout1Topbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const { logout, user } = useAuth();

  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

  const updateSidebarMode = (sidebarSettings) => {
    updateSettings({
      layout1Settings: { leftSidebar: { ...sidebarSettings } },
    });
  };

  const handleSidebarToggle = () => {
    let { layout1Settings } = settings;
    let mode;
    if (isMdScreen) {
      mode = layout1Settings.leftSidebar.mode === 'close' ? 'mobile' : 'close';
    } else {
      mode = layout1Settings.leftSidebar.mode === 'full' ? 'close' : 'full';
    }
    updateSidebarMode({ mode });
  };

  return (
    <TopbarRoot>
      <TopbarContainer>
        <Box display="flex">
          <StyledIconButton onClick={handleSidebarToggle}>
            <Icon>menu</Icon>
          </StyledIconButton>

          <IconBox>
            <StyledIconButton>
              <MatxMenu
                menuButton={
                  <UserMenu>
                    <Hidden xsDown>
                      <Typography style={{ color: '#fff' }}>
                        <Brightness7Icon
                          sx={{ cursor: 'pointer' }}
                          style={{ margin: '10px 0px 0px 0px' }}
                        />
                      </Typography>
                    </Hidden>
                  </UserMenu>
                }
              >
                <List>
                  <ListItem>
                    <StyledItem>
                      <Link to="/" className={classes.newline}>
                        <Icon>dashboard</Icon>
                        <Span> Dashboard </Span>
                      </Link>
                    </StyledItem>
                  </ListItem>
                  <ListItem>
                    <StyledItem>
                      <Link to="#" className={classes.newline}>
                        <Icon>shopping_cart</Icon>
                        <Span>Shop</Span>
                      </Link>
                    </StyledItem>
                  </ListItem>
                  <ListItem>
                    <StyledItem>
                      <Link to="/Settings/SystemSettings" className={classes.newline}>
                        <Icon> settings </Icon>
                        <Span> Settings </Span>
                      </Link>
                    </StyledItem>
                  </ListItem>
                  <ListItem>
                    <StyledItem>
                      <Link to="/#" className={classes.newline}>
                        <Icon>perm_contact_calendar</Icon>
                        <Span>Calculator</Span>
                      </Link>
                    </StyledItem>
                  </ListItem>

                  <ListItem>
                    <StyledItem>
                      <Link to="/#" className={classes.newline}>
                        <Icon>style</Icon>
                        <Span>Styles</Span>
                      </Link>
                    </StyledItem>
                  </ListItem>
                  <ListItem>
                    <StyledItem>
                      <Link to="/#" className={classes.newline}>
                        <Icon>language</Icon>
                        <Span>Language</Span>
                      </Link>
                    </StyledItem>
                  </ListItem>
                  <ListItem>
                    <StyledItem>
                      <Link to="/Calendar/Calendar" className={classes.newline}>
                        <Icon>perm_contact_calendar</Icon>
                        <Span>Calendar</Span>
                      </Link>
                    </StyledItem>
                  </ListItem>
                  <ListItem>
                    <StyledItem>
                      <Link to="/Reports/ProductQuantityAlerts" className={classes.newline}>
                        <Icon>warning</Icon>
                        <Span>Alerts</Span>
                      </Link>
                    </StyledItem>
                  </ListItem>
                  <ListItem>
                    <StyledItem>
                      <Link to="/#" className={classes.newline}>
                        <Icon>dashboard</Icon>
                        <Span>POS</Span>
                      </Link>
                    </StyledItem>
                  </ListItem>
                  <ListItem>
                    <StyledItem>
                      <Link to="/#" className={classes.newline}>
                        <Icon>perm_contact_calendar</Icon>
                        <Span>Today's Profit</Span>
                      </Link>
                    </StyledItem>
                  </ListItem>
                  <ListItem>
                    <StyledItem>
                      <Link to="/#" className={classes.newline}>
                        <Icon>list</Icon>
                        <Span>List Open Registers</Span>
                      </Link>
                    </StyledItem>
                  </ListItem>
                  <ListItem>
                    <StyledItem>
                      <Link to="/#" className={classes.newline}>
                        <Icon>data_usage</Icon>
                        <Span>Clear all locally saved data</Span>
                      </Link>
                    </StyledItem>
                  </ListItem>
                </List>
              </MatxMenu>
            </StyledIconButton>

            <StyledIconButton>
              <Icon>mail_outline</Icon>
            </StyledIconButton>

            {/* <StyledIconButton>
              <Icon>web_asset</Icon>
            </StyledIconButton>

            <StyledIconButton>
              <Icon>star_outline</Icon>
            </StyledIconButton> */}
          </IconBox>
        </Box>

        <Box display="flex" alignItems="center">
          <MatxSearchBox />

          <NotificationProvider>
            <NotificationBar />
          </NotificationProvider>

          <ShoppingCart />

          <MatxMenu
            menuButton={
              <UserMenu>
                <Hidden xsDown>
                  <Span style={{ color: '#fff' }}>
                    Hi <strong>{user.name}</strong>
                  </Span>
                </Hidden>
                <Avatar src={user.avatar} sx={{ cursor: 'pointer' }} />
              </UserMenu>
            }
          >
            <List>
              <ListItem>
                <StyledItem>
                  <Link to="/#" className={classes.newline}>
                    <Icon> home </Icon>
                    <Span> Home </Span>
                  </Link>
                </StyledItem>
              </ListItem>
              <ListItem>
                <StyledItem>
                  <Link to="/Product/Profile" className={classes.newline}>
                    <Icon> person </Icon>
                    <Span> Profile </Span>
                  </Link>
                </StyledItem>
              </ListItem>
              <ListItem>
                <StyledItem>
                  <Link to="/#" className={classes.newline}>
                    <Icon> settings </Icon>
                    <Span> Settings </Span>
                  </Link>
                </StyledItem>
              </ListItem>
              <ListItem>
                <StyledItem onClick={logout}>
                  <Link to="/" className={classes.newline}>
                    <Icon> power_settings_new </Icon>
                    <Span> Logout </Span>
                  </Link>
                </StyledItem>
              </ListItem>
            </List>
          </MatxMenu>
        </Box>
      </TopbarContainer>
    </TopbarRoot>
  );
};

export default React.memo(Layout1Topbar);
