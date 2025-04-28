import authRoute from './authRoute';
import othersRoute from './othersRoute';
import sharedRoutes from './sharedRoutes';
import type { Routes } from '@/@types/routes';

export const publicRoutes: Routes = [...authRoute, ...sharedRoutes];
export const protectedRoutes: Routes = [...othersRoute, ...sharedRoutes];