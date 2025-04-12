const statusColors = {
  "To Do": "bg-red-500",
  "In Progress": "bg-[#f8d800]",
  Done: "bg-green-600",
};

const TaskItem = ({ todo, onUpdate }) => {
  return (
    <div
      className={`p-4 rounded mb-2 mt-4 shadow ${
        statusColors[todo.status]
      } flex justify-between items-center  `}
    >
      <div>{todo.description}</div>
      <select
        value={todo.status}
        onChange={(e) => onUpdate(todo.id, e.target.value)}
        className="border rounded px-2 py-1 "
      >
        <option>To Do</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
    </div>
  );
};

export default TaskItem;
