import axios from 'axios'

const baseUrl : string = 'http://localhost:3001/tasks'

export const getAllTasks = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const addTask = async (task: any) => {
  const response = await axios.post(baseUrl, task)
  return response.data
}

export const deleteTask = async (id: number) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

export const updateTask = async (task: any) => {
  const response = await axios.put(`${baseUrl}/${task.id}`, task)
  return response.data
}