import { useEffect } from "react";
import { useDispatch } from "react-redux";
import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";
import { setTasksAction } from "./reducers/taskReducer";
import { getAllTasks } from "./services/tasks";
import TaskDetails from "./components/TaskDetails";

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getAllTasks();
      dispatch(setTasksAction(tasks));
    };
    fetchTasks();
  });

  return (
    <div className="p-12 bg-gray-200 h-screen flex flex-col gap-4">
      <h1 className="text-4xl text-gray-700 pb-2 border-b border-gray-400">
        Tasks App
      </h1>
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <NewTask />
          <Tasks />
        </div>
        <div className="col-span-2 bg-slate-300 h-full">
          <TaskDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
