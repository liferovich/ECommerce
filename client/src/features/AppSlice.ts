import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../models/response/ProductResponse';
import ProductService from '../services/ProductService';

const initialState = {
  products: [] as Product[],
  wishlist: [] as Product[],
  product: {} as Product,
  cart: [] as Product[],
  isLoading: false,
};

export const getProducts = createAsyncThunk(
  'app/getproducts',
  async (category: string,
    { rejectWithValue }) => {
    setLoading(true);
    try {
      const response = await ProductService.getProducts(category);

      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  }
);

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addCart: (state, action) => {
      // console.log(action.payload);
      const index = state.cart.findIndex(x => x.id == action.payload.id);
      if (index == -1) {
        state.cart = [...state.cart, action.payload];
      } else {
        state.cart.splice(index, 1);
      }
    },
    deleteCart: (state, action) => {
      const index = state.cart.findIndex(x => x.id == action.payload.id);
      state.cart.splice(index, 1);
    },
    addWishList: (state, action) => {
      // console.log(action.payload);
      const index = state.wishlist.findIndex(x => x.id == action.payload.id);
      if (index == -1) {
        state.wishlist = [...state.wishlist, action.payload];
      } else {
        state.wishlist.splice(index, 1);
      }
    },
    deleteWishlist: (state, action) => {
      const index = state.wishlist.findIndex(x => x.id == action.payload.id);
      state.wishlist.splice(index, 1);
    },
    getProduct: (state, action) => {
      state.product = state.products.find(x => x.id == action.payload) || {} as Product;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = [...action.payload.products];
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { setLoading, getProduct, addCart, addWishList, deleteCart } = appSlice.actions;
// export const chats = (state: any) => state.chats.chats;
export const cartLength = (state: any) => state.app.cart.length;
export const wishlistLength = (state: any) => state.app.wishlist.length;
export const cart = (state: any) => state.app.cart;
export const wishlist = (state: any) => state.app.wishlist;
export const product = (state: any) => state.app.product;
export const products = (state: any) => state.app.products;
export const isLoading = (state: any) => state.chats.isLoading;
export const orderCost = (state: any) => state.app.cart.reduce((previousValue: number, product: Product) => {
  return previousValue + product.price;
}, 0);

export default appSlice.reducer;
