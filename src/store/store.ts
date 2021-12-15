import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cartReducer } from './slices/cart';
import { filterReducer } from './slices/filter';
import { productReducer } from './slices/product';

export interface IRootState {
  product: ReturnType<typeof productReducer>;
  filter: ReturnType<typeof filterReducer>;
  cart: ReturnType<typeof cartReducer>;
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['product', 'cart'],
};

const reducers = combineReducers({
  product: productReducer,
  filter: filterReducer,
  cart: cartReducer,
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
