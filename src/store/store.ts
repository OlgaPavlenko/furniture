import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { filterReducer } from './slices/filter-slice';
import { productReducer } from './slices/product';

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
