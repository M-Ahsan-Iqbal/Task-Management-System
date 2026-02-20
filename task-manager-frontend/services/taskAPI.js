import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api";


export const taskAPI = {
    // get all tasks for a user
  getAllTasks: async (userId) => {
    const response = await axios.get(`${API_BASE_URL}/tasks/user/${userId}`);
    return response.data;
  },

  // get a single task by id
  getTask: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/tasks/${id}`);
    return response.data;
  },

  // create a new task
  createTask: async (taskData) => {
    const response = await axios.post(`${API_BASE_URL}/tasks/createtask`, taskData);
    return response.data;
  },

  // update task
  updateTask: async (id, taskData) => {
    const response = await axios.put(`${API_BASE_URL}/tasks/${id}`, taskData);
    return response.data;
  },

  // delete task
  deleteTask: async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/tasks/${id}`);
    return response.data;
  }
};
