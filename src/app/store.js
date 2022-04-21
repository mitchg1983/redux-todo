import { configureStore } from '@reduxjs/toolkit';
import todolistReducer from '../features/todolist/todolistSlice'
// import counterReducer from '../features/counter/counterSlice';


export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    todolist: todolistReducer,

  },
});
