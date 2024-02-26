import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  categoryId: 0,
  sorting: { name: 'популярности по убыванию', sortProperty: 'rarity', order: 'desc' },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSorting(state, action) {
      state.sorting = action.payload;
    },
  },
});

export const { setCategoryId, setSorting, setSearch } = filterSlice.actions;

export default filterSlice.reducer;
