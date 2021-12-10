import { createSelector } from '@reduxjs/toolkit';
import { IAuth, IStoreState } from 'store/utils/interfaces/auth';

const stateSelector = (state: IStoreState): IAuth => state.auth;

export const userSelector = createSelector(stateSelector, (state) => state.userId);
