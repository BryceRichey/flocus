import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createTask = createAsyncThunk('tasks', async (data) => {
    try {
        await axios.post('http://localhost:3001/tasks', { ...data });
    } catch (err) {
        console.log(err);
    }
});

export { createTask }