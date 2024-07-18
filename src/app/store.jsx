import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../freatures/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer
  }
});
