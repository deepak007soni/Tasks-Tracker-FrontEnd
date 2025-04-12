import TaskItem from "./taskItem";

const TaskList = ({ todos, onUpdate }) => {
  return (
    <div className="mt-2 h-[60vh] overflow-auto">
      {todos.map((todo) => (
        <TaskItem key={todo.id} todo={todo} onUpdate={onUpdate} />
      ))}
    </div>
  );
};

export default TaskList;
