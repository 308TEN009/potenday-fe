import Home from '@pages/Home';
import type { RouteObject } from 'react-router';
import { lazy } from 'react';
import LoginRedirect from '@pages/LoginRedirect';

const Main = lazy(() => import('@pages/Main'));
const CoverLetter = lazy(() => import('@pages/CoverLetter'));
const NewClipping = lazy(() => import('@pages/NewsClipping'));
const MyPage = lazy(() => import('@pages/MyPage'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cover-letter',
        element: <CoverLetter />,
      },
      {
        path: '/news-clipping',
        element: <NewClipping />,
      },
      {
        path: '/my-page',
        element: <MyPage />,
      },
    ],
  },
  {
    path: '/redirect',
    element: <LoginRedirect />,
  },
];

export default routes;
