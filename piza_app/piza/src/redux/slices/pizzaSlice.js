import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasS', async (params) => {
  const { searchUrl, category, sort, order } = params;
  const res = await fetch(
    `https://65c62255e5b94dfca2e10786.mockapi.io/items?${searchUrl}${category}&sortBy=${sort}&order=${order}`,
  );
  return res.json();
});

const initialState = {
  items: [],
  status: 'loading',
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.items = [];
      state.status = 'error';
    });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
