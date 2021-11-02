import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { filterReducer } from './slices/filter';
import { productReducer } from './slices/product';
import { searchReducer } from './slices/search';

const reducers = combineReducers({
  product: productReducer,
  filter: filterReducer,
  search: searchReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});
