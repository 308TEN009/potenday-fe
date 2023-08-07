import MyPage from '@/page/MyPage';
import Main from '@/page/main/Main';

const routes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/my-page',
    element: <MyPage />,
  },
];

export default routes;
