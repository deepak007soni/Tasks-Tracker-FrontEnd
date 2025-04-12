import TaskForm from "./components/TaskForm";
import TaskList from "./components/taskList";
import useTodos from "./hooks/useTodos";

function App() {
  const { todos, addTodo, updateStatus } = useTodos();

  return (
    <div className="w-full min-h-screen min-w-screen p-[5vh] flex items-start justify-center p-6">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-xl p-6">
        <h1 className="text-6xl font-bold text-center  mb-10">Task Tracker</h1>
        <TaskForm onAdd={addTodo} />

        <TaskList todos={todos} onUpdate={updateStatus} />
      </div>
    </div>
  );
}

export default App;
