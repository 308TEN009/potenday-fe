import Main from '@pages/main/Main';
import type { RouteObject } from 'react-router';
import AIHelper from '@pages/main/AIHelper';
import Progress from '@pages/main/Progress';
import { lazy } from 'react';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Progress />,
      },
      {
        path: '/ai',
        element: <AIHelper />,
      },
    ],
  },
  {
    path: '/my-page',
    element: lazy(() => import('@pages/MyPage')),
  },
];

export default routes;
