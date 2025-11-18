import React, { Suspense, lazy } from 'react';
import { Box, CircularProgress, Fade } from '@mui/material';
const Layout = lazy(() => import('pages/layout'));
import ErrorElement from 'pages/error';

// Lazy load all route components for code splitting
const Home = lazy(() => import('pages/home'));

// Modern loading fallback component with smooth animations
// Optimized for best UX - subtle, elegant, and non-intrusive
const RouteLoader = () => (
  <Fade in={true} timeout={400}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 80px)', // Account for header/navbar
        width: '100%',
        position: 'relative',
        backgroundColor: 'transparent',
        py: 8,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <CircularProgress
          size={40}
          thickness={3.6}
          sx={{
            color: '#632DDD',
            '& .MuiCircularProgress-circle': {
              strokeLinecap: 'round',
            },
          }}
        />
      </Box>
    </Box>
  </Fade>
);

// Wrapper component for lazy routes with Suspense
const LazyRoute = ({ component: Component, ...props }) => (
  <Suspense fallback={<RouteLoader />}>
    <Component {...props} />
  </Suspense>
);

// Wrapper component for lazy Layout with Suspense
const LazyLayout = () => (
  <Suspense fallback={null}>
    <Layout />
  </Suspense>
);

export const AppRoutes = [
  {
    // element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/',
        errorElement: <ErrorElement />,
        children: [
          {
            element: <LazyLayout />,
            key: 'layout',
            errorElement: <ErrorElement />
          },
          {
            index: true,
            path: '/',
            key: 'home',
            element: <><LazyLayout /><LazyRoute component={Home} /></>,
            errorElement: <ErrorElement />
          },
          {
            index: true,
            path: '/home',
            key: 'home',
            element: <><LazyLayout /><LazyRoute component={Home} /></>,
            errorElement: <ErrorElement />
          },
        ]
      },
      {
        path: '*',
        element: <ErrorElement />,
        errorElement: <ErrorElement />,
        key: 'errors'
      }
    ]
  }
];

const _getRoutePathById = (
  routeCfg,
  acc,
  id
) => {
  const rawCurrentPath = !routeCfg.path
    ? acc
    : routeCfg.path[0] === '/' || acc[acc.length - 1] === '/'
      ? `${acc}${routeCfg?.path}`
      : `${acc}/${routeCfg?.path}`;
  const currentPath = rawCurrentPath.replace('//', '/');

  if (routeCfg?.key && routeCfg?.key === id) {
    return currentPath;
  }
  if (routeCfg?.children) {
    for (const routeChild of routeCfg.children) {
      const path = _getRoutePathById(routeChild, currentPath, id);
      if (path) {
        return path;
      }
    }
  }
  return null;
};

export const getRoutePathById = (() => {
  const memo = {};

  return (id) => {
    const cachedRoute = memo[id];
    if (cachedRoute) {
      return cachedRoute;
    }

    for (const routeCfg of AppRoutes) {
      const path = _getRoutePathById(routeCfg, '', id);
      if (path) {
        return path;
      }
    }
    throw new Error('path cannot be found');
  };
})();
