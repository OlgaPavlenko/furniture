import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { filterReducer } from './slices/filter';
import { productReducer } from './slices/product';

export interface IRootState {
  product: ReturnType<typeof productReducer>;
  filter: ReturnType<typeof filterReducer>;
}

const reducers = combineReducers({
  product: productReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});
