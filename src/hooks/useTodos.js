import { useEffect } from "react";
import { useTodoStore } from "../store/todoStore";

const useTodos = () => {
  const { todos, fetchTodos, addTodo, updateStatus } = useTodoStore();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return { todos, addTodo, updateStatus };
};

export default useTodos;
