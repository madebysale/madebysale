import React from 'react';
import { Box, styled, useTheme } from '@mui/system';
import { themeShadows } from 'app/components/MatxTheme/themeColors';
import useSettings from 'app/hooks/useSettings';
import { sidenavCompactWidth, sideNavWidth } from 'app/utils/constant';
import { convertHexToRGB } from 'app/utils/utils';
import Brand from '../../Brand';
import Sidenav from '../../Sidenav';

const SidebarNavRoot = styled(Box)(({ theme, width, primaryBg, bgImgURL }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: width,
  fontFamily: 'Montserrat,sans-serif !important',
  boxShadow: themeShadows[8],
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top',
  backgroundSize: 'cover',
  zIndex: 111,
  overflow: 'hidden',
  backgroundColor: '#fff',
  color: '#000 !important',
  transition: 'all 250ms ease-in-out',
  boxShadow: 'rgb(0 0 0 / 10%) 0px 10px 50px',
  // backgroundImage: `linear-gradient(45deg,#303f9f,#7b1fa2)!important;`,
  '&:hover': {
    width: sideNavWidth,
    '& .sidenavHoverShow': {
      display: 'block',
      color: '#000 !important',
      // fontFamily: "Montserrat,sans-serif !important",
    },
    '& .compactNavItem': {
      width: '100%',
      maxWidth: '100%',
      color: '#000 !important',
      '& .nav-bullet': {
        display: 'block',
        color: '#000 !important',
        // fontFamily: "Montserrat,sans-serif !important",
      },
      '& .nav-bullet-text': {
        display: 'none',
        color: '#000 !important',
        // fontFamily: "Montserrat,sans-serif !important",
      },
    },
  },
}));

const NavListBox = styled(Box)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  color: '#000 !important',
}));

const Layout1Sidenav = () => {
  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const leftSidebar = settings.layout1Settings.leftSidebar;
  const { mode, bgImgURL } = leftSidebar;

  const getSidenavWidth = () => {
    switch (mode) {
      case 'compact':
        return sidenavCompactWidth;
      default:
        return sideNavWidth;
    }
  };
  const primaryRGB = convertHexToRGB(theme.palette.primary.main);

  const updateSidebarMode = (sidebarSettings) => {
    updateSettings({
      layout1Settings: {
        leftSidebar: {
          ...sidebarSettings,
        },
      },
    });
  };

  const handleSidenavToggle = () => {
    updateSidebarMode({ mode: mode === 'compact' ? 'full' : 'compact' });
  };

  return (
    <SidebarNavRoot bgImgURL={bgImgURL} primaryBg={primaryRGB} width={getSidenavWidth()}>
      <NavListBox>
        <Brand>
          {/* <Hidden smDown>
            <Switch
              onChange={handleSidenavToggle}
              checked={leftSidebar.mode !== 'full'}
              size="small"
            />
          </Hidden> */}
        </Brand>
        <Sidenav />
      </NavListBox>
    </SidebarNavRoot>
  );
};

export default React.memo(Layout1Sidenav);
