import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './slices/auth';
import { cartReducer } from './slices/cart';
import { filterReducer } from './slices/filter';
import { productReducer } from './slices/product';

export interface IRootState {
  product: ReturnType<typeof productReducer>;
  filter: ReturnType<typeof filterReducer>;
  cart: ReturnType<typeof cartReducer>;
  auth: ReturnType<typeof authReducer>;
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['product', 'cart', 'auth'],
};

const reducers = combineReducers({
  product: productReducer,
  filter: filterReducer,
  cart: cartReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export const persistor = persistStore(store);
