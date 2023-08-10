import { useEffect } from "react"; // Importing useEffect hook from 'react'
import { useDispatch } from "react-redux"; // Importing useDispatch hook from 'react-redux'
import NewTask from "./components/NewTask"; // Importing NewTask component
import Tasks from "./components/Tasks"; // Importing Tasks component
import Filter from "./components/Filter"; // Importing Filter component
import { setTasksAction } from "./reducers/taskReducer"; // Importing setTasksAction from taskReducer
import { getAllTasks } from "./services/tasks"; // Importing getAllTasks function from services
import TaskDetails from "./components/TaskDetails"; // Importing TaskDetails component

/**
 * App Component - The main component of the Tasks App.
 * Handles fetching tasks from the server and rendering UI components.
 * @returns {JSX.Element} - The rendered App component.
 */
const App: React.FC = () => {
  const dispatch = useDispatch(); // Initializing the dispatch function from react-redux

  useEffect(() => {
    /**
     * Fetches tasks from the server and dispatches setTasksAction.
     * This function is called when the component mounts.
     */
    const fetchTasks = async () => {
      const tasks = await getAllTasks(); // Fetching tasks using getAllTasks function
      dispatch(setTasksAction(tasks)); // Dispatching setTasksAction with fetched tasks
    };
    fetchTasks(); // Calling fetchTasks to fetch and set tasks when the component mounts
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  return (
    <div className="p-8 bg-gray-200 h-screen flex flex-col gap-4">
      <h1 className="text-4xl text-gray-700 pb-2 border-b border-gray-400">
        Tasks App
      </h1>
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          {/* Rendering NewTask and Tasks components */}
          <NewTask />
          <Filter />
          <Tasks />
        </div>
        <div className="col-span-2 bg-slate-300 h-full">
          {/* Rendering TaskDetails component */}
          <TaskDetails />
        </div>
      </div>
    </div>
  );
};

export default App; // Exporting the App component as the default export
