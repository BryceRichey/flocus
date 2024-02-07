import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createTask = createAsyncThunk('tasks/createTasks', async () => {
    const response = await axios.post('http://localhost:3001/tasks/create');

    return response.data;
});