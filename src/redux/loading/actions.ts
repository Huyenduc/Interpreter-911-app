import { createAction } from '@reduxjs/toolkit';
import type { Loading } from './types';

// export const isLoggedOut = createAction('LOADING_LOGGED_Out');
export const isLoggedIn = createAction<boolean>('LOADING_LOGGED_In');
export const loadingSet = createAction('LOADING_SET');
export const loadingReset = createAction('LOADING_RESET');
