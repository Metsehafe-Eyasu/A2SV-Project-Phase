import React, {useState} from "react"
import { Todo } from "../model";

interface Props {
  handleSubmit: (todo: Todo) => void
}

const InputField : React.FC<Props> = ({ handleSubmit }) => {
  const [todo, setTodo] = useState("")

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (!todo) return
    const newTodo = {
      id: Date.now(),
      todo,
      isDone: false
    }
    handleSubmit(newTodo)
    setTodo("")
  }

  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        type="text"
        className="input-field"
        placeholder="Add a task"
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button className="add-btn" type="submit">Add</button>
    </form>
  )
};
export default InputField;
