import Home from '@pages/Home';
import type { RouteObject } from 'react-router';
import { lazy } from 'react';

const CoverLetter = lazy(() => import('@pages/CoverLetter'));
const NewClipping = lazy(() => import('@pages/NewsClipping'));
const MyPage = lazy(() => import('@pages/MyPage'));
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cover-letter',
    element: <CoverLetter />,
  },
  {
    path: '/new-clipping',
    element: <NewClipping />,
  },
  {
    path: '/my-page',
    element: <MyPage />,
  },
];

export default routes;
