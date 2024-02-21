import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchTask = createAsyncThunk('task', async (taskId) => {
    try {
        const response = await axios(`http://localhost:3001/tasks/${taskId}`)

        return response.data
    } catch (err) {
        console.log(err);
    }
});

export { fetchTask };