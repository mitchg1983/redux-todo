import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTodolist } from "./todolistAPI";

const initialState = {
  list: [
    {
      listName: "Your fist todo item",
      id: "1",
    },
    {
      listName: "A new todo awaits...",
      id: "2",
    },
  ],
};

export const updateAsync = createAsyncThunk(
  "todolist/fetchTodolist",
  async (newList) => {
    const response = await fetchTodolist(newList);
    return response.data;
  }
);

export const todolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    update: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { update } = todolistSlice.actions;

export const viewListSelector = (state) => state.todolist.list;

export default todolistSlice.reducer;
