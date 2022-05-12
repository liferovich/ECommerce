import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProductService from '../services/ProductService';

const initialState = {
  chats: [{}],
  users: [{}],
  messages: [{}],
  profiles: [{}],
  isLoading: false,
};

export const getProducts = createAsyncThunk(
  'chat/getchats',
  async (id: number, { rejectWithValue }) => {
    setLoading(true);
    try {
      const response = await ProductService.getProducts(id);

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
    setChats: (state, action) => {
      state.chats = action.payload;
    },
    setMessage: (state, action) => {
      console.log(action.payload);
      state.messages = [...state.messages, action.payload];
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.chats = action.payload.chats;
      state.profiles = action.payload.profiles;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { setLoading, setMessage } = appSlice.actions;
export const chats = (state: any) => state.chats.chats; 
export const messages = (state: any) => state.chats.messages; 
export const profiles = (state: any) => state.chats.profiles; 
export const users = (state: any) => state.chats.users; 
export const isLoading = (state: any) => state.chats.isLoading; 
export default appSlice.reducer;
