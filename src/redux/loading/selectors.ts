import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../reducers';

const loadingSelector = (state: RootState) => state.loading.loadingStatus;
const loginSelector = (state: RootState) => state.loading.isLoggedIn;
export const loadingGetStatus = createSelector(loadingSelector, loadingState => loadingState);
export const loginGetStatus = createSelector(loginSelector, loginState => loginState);