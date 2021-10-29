import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { productReducer } from './slices/product-slice';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const reducers = combineReducers({
  product: productReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'auth/registration/fulfilled',
          'search/getMovieListWithQuery/pending',
          'search/getMovieListWithQuery/fulfilled',
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
  ],
});
