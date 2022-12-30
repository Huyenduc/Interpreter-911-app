import type { RootState } from '@redux/reducers';
import { createSelector } from '@reduxjs/toolkit';
import { uniqBy } from 'lodash';

const userLoginSelector = (state: RootState) => state.user;
const tokenSelector = (state: RootState) => state.user.user.accessToken
export const userLoginPayload = createSelector(userLoginSelector, usersState => usersState.user);
export const userLoginLoading = createSelector(userLoginSelector, usersState => usersState.user.loading);
export const getToken = createSelector(tokenSelector, tokenState => tokenState)