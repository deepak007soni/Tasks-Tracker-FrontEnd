import { create } from "zustand";
import axios from "axios";

export const useTodoStore = create((set) => ({
  todos: [],
  fetchTodos: async () => {
    const res = await axios.get("http://localhost:5000/api/todos");
    set({ todos: res.data });
  },
  addTodo: async (description) => {
    const res = await axios.post("http://localhost:5000/api/todos", {
      description,
    });
    set((state) => ({ todos: [...state.todos, res.data] }));
  },
  updateStatus: async (id, status) => {
    const res = await axios.put(`http://localhost:5000/api/todos/${id}`, {
      status,
    });
    set((state) => ({
      todos: state.todos.map((todo) => (todo.id === id ? res.data : todo)),
    }));
  },
}));
