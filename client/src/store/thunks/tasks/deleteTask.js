import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteTask = createAsyncThunk('task', async (taskId) => {
    try {        
        await axios.get(`http://localhost:3001/tasks/${taskId}/delete`);
    } catch (err) {
        console.log(err);
    }
});

export { deleteTask };