import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTodolist } from "./todolistAPI";

const initialState = {
  list: [
    {
      listName: "Your fist todo item",
      priority: "1",
      id: "1",
      status: "open",
      createdAt: "-date-",
      notes: "",
    },
    {
      listName: "A new todo awaits...",
      priority: "2",
      id: "2",
      status: "open",
      createdAt: "-date-",
      notes: "",
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
      state.todolist.list = action.payload;
    },
    add: (state, action) => {
      state.todolist.list = [...state.todolist.list, action.payload];
    },
  },
});

export const { update } = todolistSlice.actions;

export const viewListSelector = (state) => state.todolist.list;

export default todolistSlice.reducer;
