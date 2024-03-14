import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

async function updateProfileData(userId, data, token) {
    try {
        await axios.patch(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${userId}`,
            { ...data },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
    } catch (err) {
        console.log(err);
    }
}

const updateProfile = createAsyncThunk('settings', async ({ userId, data, token }
) => {
    console.log('Posting data')

    if (!token) {
        try {
            token = await axios.get('http://localhost:3001/settings/profile/oauth/token');

            updateProfileData(userId, data, token);
        } catch (err) {
            console.log(err);
        }
    } else {
        updateProfileData(userId, data, token);
    }
});

export { updateProfile }