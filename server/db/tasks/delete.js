const pool = require('../../config/db.js');

async function deleteTask(taskId) {
    const deleteQuery = `
    DELETE FROM 
        task_data
    WHERE
        task_id = $1`

    const client = await pool.connect();
    await client.query(deleteQuery, [taskId]);
    client.release();
}

module.exports = {
    deleteTask,
}