import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./context/todo.js";

export const store = configureStore({
  reducer: TodoReducer,
});
