import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { productReducer } from './slices/product';
const reducers = combineReducers({
  product: productReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});
