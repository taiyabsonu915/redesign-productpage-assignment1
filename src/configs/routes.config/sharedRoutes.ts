import { lazy } from 'react';
import type { Routes } from '@/@types/routes';

const sharedRoutes: Routes = [
  {
    key: 'aboutUs',
    path: '/about-us',
    component: lazy(() => import('@/views/AboutUs')),
    authority: [],
  },
  {
    key: 'contact',
    path: '/contact',
    component: lazy(() => import('@/views/Contact')),
    authority: [],
  },
];

export default sharedRoutes;