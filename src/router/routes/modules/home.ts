import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';

const dashboard: AppRouteModule = {
  path: '/home',
  name: 'Home',
  component: LAYOUT,
  redirect: '/home/index',
  meta: {
    hideChildrenInMenu: true,
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: '首页',
  },
  children: [
    {
      path: 'index',
      name: 'HomeIndex',
      component: () => import('@/views/home/index.vue'),
      meta: {
        // affix: true,
        title: '首页',
        hideMenu: true,
      },
    },
  ],
};

export default dashboard;
