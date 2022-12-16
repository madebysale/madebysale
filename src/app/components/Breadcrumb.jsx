import { Breadcrumbs, Hidden, Icon, styled, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';

const BreadcrumbRoot = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  fontFamily: 'Montserrat,sans-serif !important',
}));

const BreadcrumbName = styled('h4')(() => ({
  margin: 0,
  fontSize: '16px',
  paddingBottom: '1px',
  verticalAlign: 'middle',
  textTransform: 'capitalize',
  fontFamily: 'Montserrat,sans-serif !important',
}));

const SubName = styled('span')(({ theme }) => ({
  textTransform: 'capitalize',
  fontFamily: 'Montserrat,sans-serif !important',
  color: theme.palette.text.secondary,
}));

const Separator = styled('h4')(({ theme }) => ({
  margin: 0,
  marginLeft: 8,
  paddingBottom: '3px',
  fontFamily: 'Montserrat,sans-serif !important',
  color: '#4BB543 !important',
}));

const StyledIcon = styled(Icon)(() => ({
  marginLeft: 8,
  marginBottom: '4px',
  verticalAlign: 'middle',
  color: '#4BB543 !important',
}));

const Breadcrumb = ({ routeSegments }) => {
  const theme = useTheme();
  const hint = theme.palette.text.hint;

  return (
    <BreadcrumbRoot>
      {routeSegments ? (
        <Hidden xsDown>
          <BreadcrumbName>{routeSegments[routeSegments.length - 1]['name']}</BreadcrumbName>
          <Separator>|</Separator>
        </Hidden>
      ) : null}

      <Breadcrumbs
        separator={<Icon sx={{ color: 'success' }}>navigate_next</Icon>}
        sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}
      >
        <NavLink to="/">
          <StyledIcon color="success">home</StyledIcon>
        </NavLink>

        {routeSegments
          ? routeSegments.map((route, index) => {
              return index !== routeSegments.length - 1 ? (
                <NavLink key={index} to={route.path}>
                  <SubName>{route.name}</SubName>
                </NavLink>
              ) : (
                <SubName key={index}>{route.name}</SubName>
              );
            })
          : null}
      </Breadcrumbs>
    </BreadcrumbRoot>
  );
};

export default Breadcrumb;
