import { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [desc, setDesc] = useState("");

  const handleAdd = () => {
    if (!desc.trim()) return;
    onAdd(desc);
    setDesc("");
  };

  return (
    <div className="flex gap-2 mb-10  h-10 ">
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="New Task"
        className="border px-3 py-2 rounded w-full"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Add Task
      </button>
    
    </div>
  );
};

export default TaskForm;
