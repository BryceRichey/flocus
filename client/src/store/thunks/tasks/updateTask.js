import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const updateTask = createAsyncThunk('task', async (data) => {
    try {
        await axios.post(`http://localhost:3001/tasks/${data.taskId}/edit`, { ...data });
    } catch (err) {
        console.log(err);
    }
});

export { updateTask }