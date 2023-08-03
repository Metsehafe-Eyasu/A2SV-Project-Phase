import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface TodoListProps {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  const edit = (id: number, value: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, todo: value };
      }
      return todo;
    });
    setTodos(newTodos);
  }
  const update = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(newTodos);
  }
  const remove = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }
  return (
    <div className="todo-items">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}  className="todo-item">
            <SingleTodo todo={todo} edit={edit} update={update} remove={remove}/>
          </li>
        ))}
      </ul>
    </div>
  ) 
};
export default TodoList;
