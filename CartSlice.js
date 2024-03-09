
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async () => {
  const response = await fetch('https://drive.google.com/your/json/data/url');
  const data = await response.json();
  return data;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
  extraReducers: {
    [fetchCartItems.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchCartItems.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    [fetchCartItems.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const { updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
