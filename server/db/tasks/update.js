const pool = require('../../config/db.js');

async function updateTask({ name, tags, description, date, time, priority, taskId }) {
    const updateQuery = `
    UPDATE task_data
    SET name = $1,
        tags = $2,
        description = $3,
        due_date = $4,
        due_time = $5,
        priority = $6
    WHERE
        task_id = $7`

    const client = await pool.connect();
    await client.query(updateQuery, [
        name,
        tags,
        description,
        date,
        time,
        priority,
        taskId
    ]);
    client.release();
}

module.exports = {
    updateTask,
}