const pool = require('../../config/db.js');

async function getTasks() {
    const getQuery = `
    SELECT
        *
    FROM
        task_data`

    const client = await pool.connect();
    const result = await client.query(getQuery);
    const data = result.rows;
    client.release();

    return data;
}

async function getTask(taskId) {
    const getQuery = `
    SELECT 
        *
    FROM
        task_data
    WHERE
        id = $1`

    const client = await pool.connect();
    const result = await client.query(getQuery, [taskId]);
    const data = result.rows;
    client.release();

    return data;
}

module.exports = {
    getTasks,
    getTask,
}