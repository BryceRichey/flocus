const pool = require('../../config/db.js');

async function createTask({
    name,
    tags,
    description,
    startTime,
    endTime,
    startDate,
    endDate,
    priority,
}) {
    const creatQuery = `
    INSERT INTO
        task_data (name, tags, description, start_time, end_time, start_date, end_date, priority)
    VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8)`

    const client = await pool.connect();
    await client.query(creatQuery, [
        name,
        tags,
        description,
        startTime,
        endTime,
        startDate,
        endDate,
        priority,
    ]);
    client.release();
}

module.exports = {
    createTask,
}