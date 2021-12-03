import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PATH } from 'constants/constants';
import HTTPService from 'store/utils/services/httpService';
import { IProductWithQuantity } from 'store/utils/interfaces/product';

export interface ICartProduct {
  id: '';
  name: '';
  category: {
    id: '';
    name: '';
  };
  company: {
    id: '';
    name: '';
    countryId: '';
  };
  size: {
    width: '';
    height: '';
    length: '';
  };
  country: {
    id: '';
    name: '';
  };
  material: [];
  description: '';
  images: { id: ''; color: ''; baseUrl: ''; url: ''; price: 0 };
  price: 0;
}

export interface ICart {
  cartList: IProductWithQuantity[];
}

const initialState: ICart = {
  cartList: [],
};

export const addProductToCart = createAsyncThunk('addProductToCart/fetch', async (id: string) => {
  const response = await HTTPService.get(`${PATH.products}/${id}`);
  return response;
});

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    deleteProduct(state, action) {
      state.cartList = state.cartList.filter((product) => product.product.id !== action.payload);
    },
    deleteAllProducts(state) {
      state.cartList = [];
    },
    setQuantity(state, action) {
      state.cartList.forEach((product) => {
        if (product.product.id === action.payload.productId) {
          product.quantity = action.payload.quantity;
        }
        return product;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addProductToCart.fulfilled, (state, action) => {
      state.cartList = [...state.cartList, { product: action.payload.data, quantity: 1 }];
    });
  },
});

export const cartReducer = cartSlice.reducer;
export const { deleteAllProducts, deleteProduct, setQuantity } = cartSlice.actions;
