import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchTasks = createAsyncThunk('tasks', async () => {
    try {
        const response = await axios('http://localhost:3001/tasks');
        console.log(response);
        console.log('test');
        // return response.data;
    } catch (err) {
        console.log(err);
    }
});

export { fetchTasks }