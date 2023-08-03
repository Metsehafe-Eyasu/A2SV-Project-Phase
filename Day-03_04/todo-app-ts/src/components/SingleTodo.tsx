import React, { useState } from "react";
import { Todo } from "../model";

interface TodoProps {
  todo: Todo;
  edit: (id: number, value: string) => void;
  update: (id: number) => void; 
  remove: (id: number) => void;
}

const SingleTodo: React.FC<TodoProps> = ({ todo, edit, update, remove }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [todoValue, setTodoValue] = useState<string>(todo.todo);
  const handleEditMode = () => {
    if (todo.isDone) return
    setEditMode(true);
  }
  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    edit(todo.id, todoValue);
    setEditMode(false);
  };
  return (
    <>
      <form onSubmit={handleEdit}>
        {editMode ? (
          <div className="edit-input">
            <input
              type="text"
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
            />
            <button type="submit">Save</button>
            <button onClick={() => setEditMode(false)}>cancel</button>
          </div>
        ) : (
          <p className={todo.isDone ? "done" : ""}>{todo.todo}</p>
        )}
      </form>
      {!editMode && 
        <div className="btns">
          <button onClick={handleEditMode}>Edit</button>
          <button onClick={() => remove(todo.id)}>Delete</button>
          <button onClick={() => update(todo.id)}>
            {todo.isDone ? "Not Done" : "Done"}
          </button>      
        </div>
       }
    </>
  );
};
export default SingleTodo;
