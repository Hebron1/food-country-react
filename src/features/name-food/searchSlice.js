// seachSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  foodTerm: ""
};

export const searchingSlice = createSlice({
  name: 'searching',
  initialState,
  reducers: {
    setFood: (state, action) => {
      state.foodTerm = action.payload;
    }
  },
});

export const { setFood } = searchingSlice.actions;

export default searchingSlice.reducer;
