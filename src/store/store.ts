import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { filterReducer } from './slices/filter';
import { productReducer } from './slices/product';
import { searchReducer } from './slices/search';

export interface IRootState {
  product: ReturnType<typeof productReducer>;
  filter: ReturnType<typeof filterReducer>;
  search: ReturnType<typeof searchReducer>;
}

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
