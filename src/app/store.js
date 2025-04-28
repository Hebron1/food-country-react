import { configureStore } from '@reduxjs/toolkit'
import searchingReducer from '../features/name-food/searchSlice'

export const store = configureStore({
  reducer: {
    search: searchingReducer
  },
})