import { useSelector } from "react-redux";
import { ITask } from "../types";
import { CheckIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { deleteTaskAction, toggleTaskAction } from "../reducers/taskReducer";
import { setFocusedTaskAction } from "../reducers/focusedTaskReducer";
import { updateTask, deleteTask } from "../services/tasks";

const Tasks: React.FC = () => {
  const tasks: ITask[] = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = async (task: ITask) => {
    if (!window.confirm("Are you sure you want to delete this task?"))  return;
    dispatch(setFocusedTaskAction(null));
    await deleteTask(task.id);
    dispatch(deleteTaskAction(task));
  };
  
  const handleToggle = async (task: ITask) => {
    dispatch(setFocusedTaskAction(null));
    await updateTask({ ...task, complete: !task.complete });
    dispatch(toggleTaskAction(task));
  };

  return (
    <ul className="mt-4 text-lg flex flex-col gap-2 w-96 h-72 overflow-y-scroll">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`text-cyan-950 flex justify-between p-2 ${
            task.complete ? "bg-green-100 line-through" : "bg-red-100"
          } hover:shadow rounded-lg`}
          onClick={() => {
            console.log("Task clicked: ", task)
            dispatch(setFocusedTaskAction(task))
          }}
        >
          {task.title}
          <div className="flex gap-2">
            <CheckIcon
              className="h-8 w-8 p-1 rounded-lg text-gray-700 hover:bg-green-500 hover:text-white"
              onClick={() => handleToggle(task)}
            />
            <TrashIcon
              className="h-8 w-8 p-1 rounded-lg text-gray-700 hover:bg-red-500 hover:text-white"
              onClick={() => handleDelete(task)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
